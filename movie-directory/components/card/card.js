import {getClassByRate} from  "../../utils/helper.js";

const card = (movieObj, imgBaseURL) => {
  const movieEl = document.createElement("div");
  movieEl.classList.add("movie");

  const { poster_path, title,vote_average,overview } = movieObj;

  movieEl.innerHTML = `<img
    src="${imgBaseURL}${poster_path}"
    alt="${title} poster"
  />
  <div class="movie-info">
  <h3 class="movie-title">${title}</h3>
  <span class="${getClassByRate(vote_average)}">${vote_average}</span>
</div>
<div class="overview">
<h4 class="overview-info">Overview: </h4>
${overview}
<div>
  `;
  return movieEl;
};

export default card;
