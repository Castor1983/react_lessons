const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500/';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWNjYjQyNTZhNDdkYmQ4NjM2Y2FiNTkwNzZlYjljYSIsInN1YiI6IjY0YmVhZWQ3ZTlkYTY5MDBlY2ViMWQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUovTjLiNTyX_Na-LMqLl0gWsksfTARfi5Dzb7LFaLM';
const movieList = '/discover/movie';
const page = '?page=';
const movie = '/movie'
const urls = {
    movieList: {
        byPageNumber: (numberPage) => `${movieList}${page}${numberPage}`
    },
    genreList: '/genre/movie/list',
    movie: {
        byId: (id) => `${movie}/${id}`
    }
}

export {
    baseURL,
    posterURL,
    token,
    urls
}