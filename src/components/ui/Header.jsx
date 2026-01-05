import { Search, MapPin, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const [query, setQuery] = useState(() => {
        return new URLSearchParams(location.search).get('search') || '';
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentSearch = new URLSearchParams(location.search).get('search') || '';
            if (query.trim() !== currentSearch) {
                if (query.trim()) {
                    navigate(`/?search=${encodeURIComponent(query)}`);
                } else if (currentSearch) {
                    navigate('/');
                }
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query, navigate, location.search]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/?search=${encodeURIComponent(query)}`);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-300 bg-gradient-to-b from-dark-bg/90 to-transparent">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link to="/" className="flex items-center gap-2">
                        <span className="bg-primary text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm">NEW</span>
                        <span className="text-white font-bold tracking-wider text-sm md:text-base">MOVIE</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs">
                        <MapPin size={14} className="text-primary" />
                        <div>
                            <span className="block text-white font-semibold">Kozhikkode</span>
                            <span className="block text-[10px]">Kerala</span>
                        </div>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
                    <Link to="/" className="text-white hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-[0_0_10px_rgba(229,9,20,0.8)]">New Movie</Link>
                    <Link to="#" className="hover:text-white transition-colors">Genre</Link>
                    <Link to="#" className="hover:text-white transition-colors">Country</Link>
                    <Link to="#" className="hover:text-white transition-colors">Movie</Link>
                    <Link to="#" className="hover:text-white transition-colors">TV Series</Link>
                </nav>

                <div className="flex items-center gap-4 text-gray-300">
                    <div className="h-4 w-px bg-gray-600 hidden md:block"></div>

                    <form onSubmit={handleSearch} className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border border-white/20 rounded-full px-4 py-1.5 pl-10 text-xs text-white focus:outline-none focus:border-primary w-[160px] transition-all placeholder:text-gray-500"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 hover:text-white text-gray-400">
                            <Search size={16} />
                        </button>
                    </form>


                    <form onSubmit={handleSearch} className="relative md:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border border-white/20 rounded-full px-3 py-1.5 pl-8 text-xs text-white focus:outline-none focus:border-primary w-[120px] transition-all placeholder:text-gray-500"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="absolute left-2.5 top-1/2 -translate-y-1/2 hover:text-white text-gray-400">
                            <Search size={14} />
                        </button>
                    </form>


                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-md border-t border-white/10 py-4 px-6 flex flex-col gap-4 text-white shadow-xl">
                    <Link to="/" className="text-primary font-medium" onClick={() => setIsMenuOpen(false)}>New Movie</Link>
                    <Link to="#" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Genre</Link>
                    <Link to="#" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Country</Link>
                    <Link to="#" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Movie</Link>
                    <Link to="#" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>TV Series</Link>
                </div>
            )}
        </header>
    );
}
