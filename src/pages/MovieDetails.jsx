import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { Loader2, Clock } from 'lucide-react';
import Header from '../components/ui/Header';
import BookingSection from '../components/movie/BookingSection';

export default function MovieDetails() {
    const { id } = useParams();
    const bookingRef = useRef(null);
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await getMovieDetails(id);
            if (data.Response === "True") {
                setMovie(data);
            }
            setLoading(false);
        };
        fetchDetails();
    }, [id]);

    const scrollToBooking = () => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-dark-bg">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
    );

    if (!movie) return (
        <div className="text-center p-8 bg-dark-bg min-h-screen text-white">
            <h2 className="text-2xl text-red-500">Movie not found</h2>
            <Link to="/" className="text-primary hover:underline mt-4 block">Back to Home</Link>
        </div>
    );

    const castMembers = movie.Actors ? movie.Actors.split(',').map(name => ({ name: name.trim(), role: 'Actor' })) : [];
    const displayCast = [...castMembers, ...castMembers, ...castMembers].slice(0, 8);


    return (
        <div className="min-h-screen bg-[#4a0404] text-white font-sans pb-32">
            <Header />

            <div className="relative h-[80vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1200x800?text=No+Backdrop'}
                        alt="Backdrop"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#4a0404]/40 to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10 container mx-auto">

                    <div className="flex flex-col md:flex-row items-end gap-8">
                        <div className="w-40 md:w-56 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 hidden md:block transform translate-y-8">
                            <img
                                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                                alt={movie.Title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 mb-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{movie.Title}</h1>

                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <div className="flex items-center bg-transparent border border-gray-500 rounded-lg overflow-hidden backdrop-blur-sm">
                                    <span className="bg-white/10 px-3 py-1 text-white font-bold text-sm">UA16+</span>
                                    <span className="px-3 py-1 text-white text-sm border-l border-gray-500">{movie.Genre.split(',')[0]}</span>
                                    <span className="px-3 py-1 text-white text-sm border-l border-gray-500 flex items-center gap-1">
                                        <Clock size={14} /> {movie.Runtime}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs text-gray-300 border border-gray-600">2D, IMAX 2D, DOLBY CINEMA 2D</span>
                                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs text-gray-300 border border-gray-600">English</span>
                            </div>

                            <button
                                onClick={scrollToBooking}
                                className="inline-block w-full md:w-auto min-w-[300px] text-center bg-[#FF1F1F] hover:bg-[#c41616] text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-primary/40 transition-transform hover:scale-105"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col gap-12">

                    <div className="w-full">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">About The Movie</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {movie.Plot}
                            </p>
                        </div>

                        <div className="relative mb-16  overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7f1d1d]/20 via-black to-black backdrop-blur-md -z-10 rounded-xl border border-white/5"></div>

                            <div className="flex items-center p-6 bg-transparent">
                                <div className="w-16 flex-shrink-0 flex items-center justify-center -rotate-180 border-l border-white/10" style={{ writingMode: 'vertical-rl' }}>
                                    <span className="text-2xl font-bold tracking-widest text-white/40 uppercase py-4">Cast</span>
                                </div>

                                <div className="flex-1 flex gap-4 overflow-x-auto no-scrollbar pl-4 items-center">
                                    {displayCast.map((actor, idx) => (
                                        <div key={idx} className="flex-shrink-0 flex items-center gap-3 w-48 md:w-56 bg-transparent hover:bg-[#171717] p-2 rounded-lg transition-colors border-r border-white/5 last:border-0">
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-black flex-shrink-0 shadow-md">
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${actor.name}&background=random&size=128`}
                                                    alt={actor.name}
                                                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                                                />
                                            </div>
                                            <div className="flex flex-col text-left">
                                                <h4 className="font-bold text-xs md:text-sm text-white line-clamp-1 leading-tight mb-0.5">{actor.name}</h4>
                                                <p className="text-[10px] text-gray-400 font-medium truncate w-full">{actor.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>
                    <div ref={bookingRef} className="w-full">
                        <BookingSection movie={movie} />
                    </div>
                </div>
            </div>
        </div>
    );
}
