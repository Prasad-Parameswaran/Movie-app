import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import Header from '../components/ui/Header';
import Hero from '../components/movie/Hero';
import MovieRow from '../components/movie/MovieRow';
import Pagination from '../components/ui/Pagination';
import { Loader2 } from 'lucide-react';

export default function Home() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search');

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRowMovies, setTopRowMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const mainQuery = query || 'gravity';

            const trending = await searchMovies(mainQuery, page);

            const upcoming = query ? await searchMovies(query, page + 1) : await searchMovies('adventure', page);

            const topRow = await searchMovies('avengers', 1); // Keep visual anchor

            if (trending.Search) setTrendingMovies(trending.Search);
            else setTrendingMovies([]);

            if (upcoming.Search) setUpcomingMovies(upcoming.Search);
            if (topRow.Search) setTopRowMovies(topRow.Search);

            setLoading(false);
        };
        fetchData();
    }, [page, query]);

    return (
        <div className="min-h-screen bg-[#4a0404] pb-20 overflow-x-hidden">
            <Header />
            <Hero />

            <div className="-mt-16 md:-mt-32 relative z-20 w-full mb-8 md:mb-12">
                <MovieRow
                    title=""
                    movies={topRowMovies}
                    variant="hero-card"
                />
            </div>


            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-primary" size={40} />
                </div>
            ) : (
                <div className="space-y-4">
                    <MovieRow title="Trending Movie Near You" movies={trendingMovies} variant="landscape" />

                    <MovieRow title="Upcoming" movies={upcomingMovies} variant="upcoming" />

                    <div className="container mx-auto px-6 lg:px-[40px] mt-12 pb-12 border-t border-white/5 pt-8">
                        <Pagination
                            currentPage={page}
                            onPageChange={setPage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
