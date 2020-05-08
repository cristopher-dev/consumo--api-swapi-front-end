'use strict';
const cards = document.getElementById('cards-list');
const spinner = document.getElementById('spinner');
function storage(data) {
  if (data !== '') {
    localStorage.setItem('especie', JSON.stringify(data));
  } else {
    localStorage.setItem('especie', JSON.stringify('false'));
  }
}

var __asyncValues =
  (this && this.__asyncValues) ||
  function (o) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function (v) {
          return new Promise(function (resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  };
const api = new swapi();
const query = async () => {
  var e_1, _a;
  // SAVE THE DATA OF THE CONSULTATION
  const dataComplented = [];
  // STORAGE IN LOCAL MEMORY
  const storageArray = parseInt(localStorage.getItem('array'));
  const storageSession = localStorage.getItem('session').trim();
  // CHECK ALL API
  const data = await api.querySwapi();
  // REMOVE THE CORRECT ARRAY
  const selectArray = data[storageArray];
  // SELECT THE OBJECT
  const selectObject = selectArray[storageSession];
  try {
    //CONSUME THE API OF EACH URL
    for (var selectObject_1 = __asyncValues(selectObject), selectObject_1_1; (selectObject_1_1 = await selectObject_1.next()), !selectObject_1_1.done; ) {
      const dataObject = selectObject_1_1.value;
      const data = await fetch(dataObject);
      const dataJson = await data.json();
      dataComplented.push(dataJson);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (selectObject_1_1 && !selectObject_1_1.done && (_a = selectObject_1.return)) await _a.call(selectObject_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  // CHOOSE THE CARD TO BE CREATED
  switch (storageSession) {
    case 'planets':
      viewPlanets(dataComplented);
      break;
    case 'characters':
      viewCharacters(dataComplented);
      break;
    case 'starships':
      viewStarships(dataComplented);
      break;
  }
};
// CREATE ELEMENT PLANETS
const viewPlanets = (data) => {
  var _a;
  // DELETE SPINNER
  (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
  for (const items of data) {
    const element = ` <li class="cards__item">
    <div class="card" href="./view.html">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />
      <div class="card__content">
        <div class="card__title"><span>Planets</span></div>
        <p class="card__text"> 
          <span>${items.name}</span> | <span>${items.terrain}</span>  <br />
           <span>${items.gravity}</span> | <span>${items.diameter}</span>  <br />        
          <span>${items.population}</span>   <br />        
        </p>       
      </div>
    </div>
  </li>`;
    cards.innerHTML += element;
  }
};
// CREATE ELEMENT CHARACTERS
const viewCharacters = (data) => {
  var _a;
  // DELETE SPINNER
  (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
  let contador = 0;
  for (const items of data) {
    const element = ` <li class="cards__item">
    <div class="card" href="./view.html">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />
      <div class="card__content">
        <div class="card__title"><span>Characters</span></div>
        <p class="card__text"> 
          <span>${items.name}</span> | <span>${items.gender}</span>  <br />
           <span>${items.skin_color}</span> | <span>${items.eye_color}</span>  <br />        
          <span>${items.height}</span> |  <span>${items.average_height}</span>  <br />        
        </p>      
        <a href="./especie-sesion.html" role="button"><button type="button" class="btn" onclick="storage('${items.species}')">Especie</button></a> 
      </div>
    </div>
  </li>`;
    cards.innerHTML += element;
  }
};
// CREATE ELEMENT STARSHIPS
const viewStarships = (data) => {
  var _a;
  // DELETE SPINNER
  (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
  for (const items of data) {
    const element = ` <li class="cards__item">
    <div class="card" href="./view.html">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />
      <div class="card__content">
        <div class="card__title"><span>Starships</span></div>
        <p class="card__text"> 
          <span>${items.name}</span>  <br />
           <span>${items.model}</span>  <br />
           <span>${items.manufacturer}</span>  <br />
            <span>${items.passengers}</span>  <br />                            
        </p>       
      </div>
    </div>
  </li>`;
    cards.innerHTML += element;
  }
};
query();
