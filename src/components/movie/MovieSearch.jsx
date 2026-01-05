import { Search } from 'lucide-react';

const MovieSearch = ({ value, onChange }) => {
    return (
        <div className="relative w-full max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-full leading-5 bg-dark-card text-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-0 transition duration-300"
                placeholder="Search for movies..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default MovieSearch;
