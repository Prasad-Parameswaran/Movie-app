import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function BookingSection({ movie }) {
    const navigate = useNavigate();
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
        <div className="flex items-center justify-center p-0 font-sans no-scrollbar w-full">
            <div className="w-full max-w-5xl bg-[#2b0505] rounded-[30px] overflow-hidden shadow-2xl relative min-h-[800px] border border-white/5">

                <div className="pt-6 pb-4 px-4 md:pt-10 md:pb-8 md:px-8">
                    <div className="flex justify-between items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar">
                        {dates.map((date, index) => {
                            const isSelected = selectedDate === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setSelectedDate(index)}
                                    className={`flex flex-col items-center justify-center min-w-[60px] h-[80px] md:min-w-[70px] md:h-[90px] rounded-2xl transition-all duration-300 flex-shrink-0 ${isSelected
                                        ? 'bg-white text-black shadow-lg transform scale-105 z-10'
                                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="text-xl md:text-2xl font-bold leading-none mb-2">{format(date, 'dd')}</span>
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{format(date, 'EEE')}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="h-px bg-white/5 mx-4 md:mx-8 mb-6 md:mb-8"></div>

                <div className="px-4 md:px-8 pb-28 md:pb-32 space-y-6 md:space-y-10 h-[500px] md:h-[600px] overflow-y-auto no-scrollbar">
                    {theaters.map((theater, idx) => (
                        <div key={idx} className="bg-black/20 p-4 md:p-6 rounded-2xl border border-white/5">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg">
                                        <span className="text-[8px] md:text-[10px] font-extrabold text-[#0B1E45] tracking-tighter leading-tight text-center">cinépolis</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm md:text-lg leading-tight">{theater.name}</h3>
                                        <div className="flex gap-2 md:gap-3 text-[10px] md:text-xs text-gray-400 mt-1 font-medium">
                                            <span>{theater.distance}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full self-center"></span>
                                            <span className="text-red-400">{theater.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                                {theater.times.map((time, tIdx) => (
                                    <button
                                        key={tIdx}
                                        onClick={() => setSelectedTime(`${theater.id}-${tIdx}`)}
                                        className={`group relative py-2 md:py-3 px-1 md:px-2 rounded-xl border transition-all duration-200 ${selectedTime === `${theater.id}-${tIdx}`
                                            ? 'bg-[#E50914] border-[#E50914] text-white shadow-lg shadow-red-900/40'
                                            : 'bg-transparent border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="text-xs md:text-sm font-bold flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-1">
                                            {time.split(' ')[0]} <span className="text-[9px] md:text-[10px] font-normal opacity-80">{time.split(' ')[1]}</span>
                                        </div>
                                        <div className="text-[8px] md:text-[9px] text-gray-500 group-hover:text-gray-200 mt-0.5 md:mt-1 tracking-wide uppercase">Dolby 7.1</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="fixed bottom-0 left-0 right-0 bg-[#2b0202] border-t border-white/10 p-3 md:p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                    <div className="w-full max-w-5xl mx-auto flex justify-between items-center px-2 md:px-4">
                        <div className="flex flex-col">
                            <span className="text-white/50 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold">Selected Seats</span>
                            <span className="text-white text-xl md:text-2xl font-bold">1 <span className="text-sm md:text-base font-normal text-white/60">($24.00)</span></span>
                        </div>
                        <button
                            onClick={handleBooking}
                            disabled={!selectedTime}
                            className="bg-[#E50914] hover:bg-[#c40812] text-white px-8 py-3 md:px-12 md:py-4 rounded-xl font-bold text-sm md:text-base shadow-[0_4px_14px_rgba(229,9,20,0.4)] transition-all transform active:scale-95 disabled:opacity-50 disabled:grayscale disabled:shadow-none"
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
                                className="bg-gradient-to-br from-[#A81010] to-[#5e0404] w-full max-w-sm rounded-[40px] p-8 text-center relative shadow-2xl overflow-hidden border border-white/10"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#4ade80] to-[#16a34a] shadow-[0_4px_12px_rgba(22,163,74,0.4)] border-4 border-white/10 backdrop-blur-md">
                                    <CheckCircle className="w-8 h-8 text-white drop-shadow-md" strokeWidth={3} />
                                </div>

                                <h2 className="text-xl font-bold text-white mb-1">Booking Successful</h2>
                                <p className="text-white/60 text-sm mb-8 font-medium">For {movie.Title}</p>

                                <div className="relative w-48 h-48 mx-auto -mb-6 perspective-1000 flex items-center justify-center">
                                    <div className="absolute w-32 h-44 bg-white rounded-xl shadow-lg transform -rotate-[15deg] -translate-x-6 translate-y-2 opacity-80 overflow-hidden border border-gray-200">
                                        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} className="w-full h-[65%] object-cover opacity-60 grayscale" alt="" />
                                        <div className="bg-white h-[35%] p-2 relative opacity-50">
                                            <div className="border-t-2 border-dashed border-gray-300 w-full mb-2"></div>
                                            <div className="w-full h-8 bg-black/10"></div>
                                        </div>
                                    </div>

                                    <div className="absolute w-32 h-44 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.3)] transform rotate-[5deg] translate-x-2 overflow-hidden">
                                        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} className="w-full h-[65%] object-cover" alt="" />
                                        <div className="relative h-[35%] bg-white p-3 flex flex-col pt-1">
                                            <div className="absolute top-0 left-0 right-0 -mt-px border-t-2 border-dashed border-gray-300"></div>

                                            <div className="mt-2 space-y-1">
                                                <div className="flex justify-between text-[7px] font-bold text-gray-400 uppercase tracking-wider">
                                                    <span>Date</span>
                                                    <span>Time</span>
                                                </div>
                                                <div className="flex justify-between text-[9px] font-bold text-gray-900">
                                                    <span>{format(new Date(), 'MMM dd')}</span>
                                                    <span>{selectedTime ? selectedTime.split('-')[1].length < 2 ? '09:40 AM' : '09:40 AM' : '09:40 AM'}</span>
                                                </div>
                                            </div>
                                            <div className="w-full h-6 mt-2 opacity-70" style={{ backgroundImage: "linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%)", backgroundPosition: "bottom", backgroundSize: "3px 100%", backgroundRepeat: "repeat-x" }}></div>
                                        </div>

                                        <div className="absolute top-[65%] -left-2 w-4 h-4 bg-[#6F0606] rounded-full"></div>
                                        <div className="absolute top-[65%] -right-2 w-4 h-4 bg-[#6F0606] rounded-full"></div>
                                    </div>
                                </div>

                                <button onClick={() => navigate('/')} className="mt-12 text-white/80 text-xs font-semibold hover:text-white transition-colors uppercase tracking-widest">
                                    Close
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
