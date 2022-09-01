import {getPopularMovies,searchMovies} from "./components/movie/movie.js";
const form = document.querySelector("form");
const search = document.querySelector(".search-btn")[0];
// const searchInput = document.querySelector(".inputSearch");
const mainTag = document.querySelector("main");

//intial get favourite movies
getPopularMovies();


//search 
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    mainTag.innerHTML =``;
    const searchInputValue =document.getElementsByClassName("search-btn")[0].value;
    // const searchedTerm = searchInput.value;
    console.log(searchInputValue);
    searchMovies(searchInputValue);

})