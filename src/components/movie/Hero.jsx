import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function Hero() {
    const heroMovie = {
        Title: "Spider-Man: No Way Home",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
        Plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
        Year: "2021",
        Runtime: "148 min",
        Genre: "Action, Adventure, Fantasy",
        imdbRating: "8.2",
        Rated: "UA16+"
    };

    return (
        <div className="relative w-full h-[85vh] md:h-[90vh] mb-0">
            <div className="absolute inset-0">
                <img
                    src={heroMovie.Poster}
                    alt={heroMovie.Title}
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404] via-transparent to-transparent"></div>
            </div>

            <div className="absolute inset-0 container mx-auto px-6 lg:px-[40px] flex flex-col justify-center pb-24">
                <div className="max-w-2xl pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                        Spider man<br />
                        <span className="text-white">No Way Home</span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-300 mb-6 font-medium">
                        <span className="bg-[#E50914] text-white px-1 py-0.5 rounded textxs font-bold w-10 text-center">IMDb</span>
                        <span>{heroMovie.imdbRating} (12,327)</span>
                        <span>•</span>
                        <span>{heroMovie.Year}</span>
                        <span>•</span>
                        <span>{heroMovie.Runtime.replace('min', 'minutes')}</span>
                        <span>•</span>
                        <span>Sci-Fi</span>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed max-w-lg line-clamp-3">
                        {heroMovie.Plot}
                    </p>

                    <div className="flex gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-white/30 rounded-lg text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                            Watch trailer
                        </button>
                        <Link to={`/movie/tt10872600`} className="flex items-center justify-center gap-2 px-8 py-3 bg-[#E50914] rounded-lg text-white font-bold hover:bg-[#c40812] transition-colors shadow-lg shadow-red-600/30">
                            <Play size={18} fill="currentColor" />
                            Watch now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
