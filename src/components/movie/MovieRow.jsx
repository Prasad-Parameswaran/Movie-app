import MovieCard from './MovieCard';

export default function MovieRow({ title, movies, variant = 'portrait' }) {
    if (!movies || movies.length === 0) return null;

    return (
        <section className="mb-12">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
            </div>

            <div className="overflow-x-auto pb-8 no-scrollbar scroll-pl-6 pt-10">
                <div className="flex gap-6 w-max px-6 md:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] items-end">
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className={`${variant === 'landscape' ? 'w-[280px]' : variant === 'hero-card' ? 'w-[140px]' : 'w-[200px]'} flex-shrink-0`}>
                            <MovieCard movie={movie} variant={variant} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
