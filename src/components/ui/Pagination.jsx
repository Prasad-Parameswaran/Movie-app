import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center items-center space-x-4 mt-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-dark-card hover:bg-dark-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white font-medium">Page {currentPage}</span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                className="p-2 rounded-full bg-dark-card hover:bg-dark-hover transition-colors"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default Pagination;
