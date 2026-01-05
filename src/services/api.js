const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com';

export const searchMovies = async (query, page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}&page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Response: "False", Error: error.message };
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return { Response: "False", Error: error.message };
    }
};
