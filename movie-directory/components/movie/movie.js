import endPoints from "../../utils/endPoint.js";
import card from "../card/card.js";



const getPopularMovies = async()=>{

const response = await fetch(`${endPoints.GET_ALL_POPULAR_MOVIES}`);
const result = await response.json();
console.log(result);
const introClass =document.getElementsByClassName("intro")[0];
console.log(introClass.childNodes[1]);
result.results.forEach((movie) => {
    const cardValue = card(movie,endPoints.IMG_BASE_URL);
    console.log(cardValue);
    introClass.childNodes[1].appendChild(cardValue);
    
});




}

console.log(`endPoints.GET_ALL_POPULAR_MOVIES:${endPoints.GET_ALL_POPULAR_MOVIES}`)
getPopularMovies();

