'use strict';
const cards = document.getElementById('cards-list');
const spinner = document.getElementById('spinner');
function storage(data) {
  localStorage.setItem('array', data.toString());
}

// INSTANCE THE API CONSUMPTION
const api = new swapi();
// QUERY
const query = async () => {
  var _a;
  // CHECK MAIN INFORMATION ABOUT THE FILM
  const data = await api.infoMainiMovies();
  // VERIFY IF DATA
  if (data) {
    // DELETE HTML ELEMENT
    (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
    // CREATE ELEMENTS
    view(data);
  }
};
// ELEMENTO HTML
const view = (data) => {
  // INDEX COUNTER
  let contador = 0;
  // TRAVEL THROUGHOUT THE ARRAY
  for (const items of data) {
    const element = `<li class="cards__item">
<div class="card">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />
 <div class="card__content">
  <div class="card__title">${items.title}<span> | director: ${items.director}</span> <span> | date: ${items.elease_date}</span></div>
  <p class="card__text">
   ${items.opening_crawl}
  </p>
  <a href="./view-session.html" role="button"><button type="button" class="btn" onclick="storage('${contador++}')">ver</button></a>
</div>
</div>
</li>`;
    cards.innerHTML += element;
  }
};
// RUN QUERY
query();
