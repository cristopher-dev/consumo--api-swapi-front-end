'use strict';
const cards = document.getElementById('cards-list');
const spinner = document.getElementById('spinner');
function storage(data) {
  localStorage.setItem('session', data.toString());
}

// INSTANCE THE API CONSUMPTION
const api = new swapi();
// QUERY
const query = async () => {
  // QUERY STOREGE
  const session = parseInt(localStorage.getItem('array'));
  // CHECK MAIN INFORMATION ABOUT THE FILM
  const data = await api.querySwapi();
  // SELECT ARRAY
  const separateData = data[session];
  // SELECT OBJECT
  const extractData = [separateData];
  // VERIFY IF YOU HAVE DATA
  if (separateData) {
    // EXTRACT DATA
    const completed = extractData.map((value) => {
      const data = [];
      if (value.planets) {
        data.push('planets');
      }
      if (value.characters) {
        data.push('characters');
      }
      if (value.starships) {
        data.push('starships');
      }
      return data;
    });
    // EXECUTE FUNCTION CREATE HTML ELEMENT
    view(completed);
  } else {
    console.log('ERROR');
  }
};
// ELEMENTO HTML
const view = (data) => {
  var _a;
  // DELETE SPINNER
  (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
  // TRAVEL THROUGHOUT THE ARRAY
  for (const items of data[0]) {
    const element = `<li class="cards__item">
    <div class="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />

      <div class="card__content">
        <div class="card__title card--text">${items}</div>

        <a href="./select-sesion.html" role="button"><button type="button" class="btn" onclick="storage('${items}')">ver</button></a>
      </div>
    </div>
  </li>`;
    cards.innerHTML += element;
  }
};
// RUN QUERY
query();
