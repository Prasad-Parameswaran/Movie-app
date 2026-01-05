import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Booking from './pages/Booking';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-dark-bg text-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/booking/:id" element={<Booking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
