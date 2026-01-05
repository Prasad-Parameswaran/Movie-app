import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';

export default function Booking() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const movie = state?.movie || { Title: 'Movie Title', Poster: 'https://via.placeholder.com/150' };

    const [selectedDate, setSelectedDate] = useState(3);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const startDate = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

    const theaters = [
        {
            id: 1,
            name: "Cinipolis Gokulam Mall Ariyedathpalam ,Kozhikkode",
            distance: "2.5k Away",
            status: "Non Refundable",
            times: ["09:40 AM", "09:40 AM", "09:40 AM", "09:40 AM"]
        },
        {
            id: 2,
            name: "Cinipolis Gokulam Mall Ariyedathpalam ,Kozhikkode",
            distance: "2.5k Away",
            status: "Non Refundable",
            times: ["09:40 AM", "09:40 AM", "09:40 AM", "09:40 AM"]
        },
        {
            id: 3,
            name: "Cinipolis Gokulam Mall Ariyedathpalam ,Kozhikkode",
            distance: "2.5k Away",
            status: "Non Refundable",
            times: ["09:40 AM", "09:40 AM", "09:40 AM", "09:40 AM"]
        }
    ];

    const handleBooking = () => {
        if (!selectedTime) return;
        setShowSuccess(true);
    };

    return (
        <div className="min-h-screen bg-[#4a0404] flex items-center justify-center p-4 font-sans no-scrollbar">
            <div className="w-full max-w-lg bg-[#2b0505] rounded-[30px] overflow-hidden shadow-2xl relative min-h-[800px]">

                <div className="pt-8 pb-6 px-6">
                    <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar">
                        {dates.map((date, index) => {
                            const isSelected = selectedDate === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDate(index)}
                                    className={`flex flex-col items-center justify-center min-w-[50px] h-[70px] rounded-xl transition-all duration-300 ${isSelected
                                        ? 'bg-white text-black shadow-lg transform scale-110 z-10'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <span className="text-xl font-bold leading-none mb-1">{format(date, 'dd')}</span>
                                    <span className="text-xs font-medium uppercase">{format(date, 'EEE')}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="h-px bg-white/5 mx-6 mb-6"></div>

                <div className="px-6 pb-32 space-y-8 h-[600px] overflow-y-auto no-scrollbar">
                    {theaters.map((theater, idx) => (
                        <div key={idx}>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-primary tracking-tighter leading-tight text-center">cinépolis</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-xs md:text-sm leading-tight max-w-[200px]">{theater.name}</h3>
                                    <div className="flex gap-2 text-[10px] text-gray-400 mt-1">
                                        <span>{theater.distance}</span>
                                        <span>|</span>
                                        <span className="text-orange-500">{theater.status}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-3">
                                {theater.times.map((time, tIdx) => (
                                    <button
                                        key={tIdx}
                                        onClick={() => setSelectedTime(`${theater.id}-${tIdx}`)}
                                        className={`py-2 px-1 rounded-xl border border-white/10 text-center transition-all ${selectedTime === `${theater.id}-${tIdx}`
                                            ? 'bg-[#E50914] border-[#E50914] text-white'
                                            : 'bg-transparent text-gray-300 hover:border-gray-500'
                                            }`}
                                    >
                                        <div className="text-xs font-bold">{time.split(' ')[0]} <span className="text-[10px] font-normal">{time.split(' ')[1]}</span></div>
                                        <div className="text-[8px] text-gray-400 mt-0.5">Dolby 7.1</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#200202] to-[#2b0505]/95 p-6 border-t border-white/5 backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-gray-400 text-xs">Selected</span>
                            <span className="text-white text-xl font-bold">1 Seats</span>
                        </div>
                        <button
                            onClick={handleBooking}
                            disabled={!selectedTime}
                            className="bg-[#FF1F1F] hover:bg-[#E50914] text-white px-8 py-3 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(229,9,20,0.4)] transition-all transform active:scale-95 disabled:opacity-50 disabled:shadow-none"
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {showSuccess && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm rounded-[30px]">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="bg-[#b91c1c] w-full max-w-sm rounded-3xl p-6 text-center relative shadow-2xl overflow-hidden"
                            >
                                <div className="bg-[#22c55e] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/20 shadow-lg">
                                    <CheckCircle className="w-6 h-6 text-white" />
                                </div>

                                <h2 className="text-lg font-bold text-white mb-6">Booking Successful!</h2>

                                <div className="relative bg-white text-black rounded-lg overflow-hidden shadow-lg mx-auto w-40 text-left transform rotate-[-2deg]">
                                    <div className="h-20 bg-gray-200">
                                        <img src={movie.Poster} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-bold text-[10px] truncate">{movie.Title}</h3>
                                        <div className="text-[8px] text-gray-500 mt-1">1 Seat | {format(new Date(), 'dd MMM')}</div>
                                        <div className="h-6 mt-2 bg-repeat-x opacity-60" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAABNJREFUGFdjYEAC/3Ew/o/D/wEABxYEAeNxH+8AAAAASUVORK5CYII=')", backgroundSize: "4px 100%" }}></div>
                                    </div>
                                    <div className="absolute top-20 -left-1.5 w-3 h-3 bg-[#b91c1c] rounded-full"></div>
                                    <div className="absolute top-20 -right-1.5 w-3 h-3 bg-[#b91c1c] rounded-full"></div>
                                </div>

                                <button onClick={() => navigate('/')} className="mt-8 text-white/90 text-xs font-semibold hover:text-white">
                                    Back to Home
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
