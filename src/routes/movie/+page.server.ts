// import "dotenv/config"

export const load = (async () => {
    const fetchMovie = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`)
        const movieRes = await movie.json();
        return movieRes.results
    }

    return {
        getMovie: fetchMovie()
    }
})