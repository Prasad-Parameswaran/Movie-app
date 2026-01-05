import { Search, ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-1">
                    <span className="bg-primary text-white font-bold px-2 py-1 rounded-sm text-sm">NEW</span>
                    <span className="text-primary font-bold text-lg tracking-wide">MOVIE</span>
                </Link>

                <div className="hidden md:flex items-center gap-2 text-xs text-gray-300">
                    <MapPin size={14} className="text-primary" />
                    <div>
                        <p className="font-bold text-white">Kozhikode</p>
                        <p>Kerala</p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
                <Link to="/" className="text-white border-b-2 border-primary pb-1">New Movie</Link>
                <Link to="#" className="hover:text-white transition-colors">Genre</Link>
                <Link to="#" className="hover:text-white transition-colors">Country</Link>
                <Link to="#" className="hover:text-white transition-colors">Movie</Link>
                <Link to="#" className="hover:text-white transition-colors">TV Series</Link>
            </div>

            <div className="flex items-center">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Search className="text-white w-5 h-5" />
                </button>
            </div>
        </nav>
    );
}
