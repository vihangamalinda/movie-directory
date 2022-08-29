

const API_KEY = `4a67aa7580343149c1981977a80f20c7`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const BASE_URL = `https://api.themoviedb.org/3`;
const MOVIE_URL =`/movie`;
const POPULAR_CATEGORY = `/popular`;

export default{
 GET_ALL_POPULAR_MOVIES :`${BASE_URL}${MOVIE_URL}${POPULAR_CATEGORY}?api_key=${API_KEY}&language=en-US&page=1`,
 IMG_BASE_URL : `${IMG_PATH}`,
};



// "https://image.tmdb.org/t/p/w1280/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"
// "https://image.tmdb.org/t/p/w1280/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg"




