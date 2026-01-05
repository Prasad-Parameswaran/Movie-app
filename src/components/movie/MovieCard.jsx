import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, variant = 'portrait' }) {
    const isLandscape = variant === 'landscape';
    const isHeroCard = variant === 'hero-card';

    return (
        <Link to={`/movie/${movie.imdbID}`} className={`block relative group ${isLandscape ? 'w-[280px] h-[160px] hover:h-[180px]' :
            isHeroCard ? 'w-[150px] h-[210px] hover:h-[230px]' :
                'w-[200px] h-[300px] hover:h-[330px]'
            } rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50 bg-black shadow-lg hover:shadow-2xl`}>

            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
                alt={movie.Title}
                className="w-full h-full object-cover transition-all duration-500 opacity-60 group-hover:opacity-100"
            />

            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
                {!isHeroCard && (
                    <>
                        <h3 className="font-bold text-white text-sm leading-tight mb-1">{movie.Title}</h3>
                        <div className="flex justify-between items-center">
                            <span className="text-white/60 text-[10px]">{movie.Year}</span>
                            <span className="text-[10px] border border-white/20 px-1.5 py-0.5 rounded text-white/50">{movie.Type}</span>
                        </div>
                    </>
                )}

                {(isHeroCard || variant === 'upcoming') && (
                    <div className="w-full bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-medium py-2.5 rounded-lg text-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        Book Now
                    </div>
                )}

            </div>

            {isLandscape && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <h3 className="font-bold text-white text-sm truncate">{movie.Title}</h3>
                </div>
            )}
        </Link>
    );
}
