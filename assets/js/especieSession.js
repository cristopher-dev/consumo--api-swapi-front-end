'use strict';
const cards = document.getElementById('cards-list');
const spinner = document.getElementById('spinner');
function storage(data) {
  localStorage.setItem('especie', data.toString());
}
// MAIN API CONSUMPTION CLASS

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
  // QUERY STORAGE
  const storageSession = [JSON.parse(localStorage.getItem('especie'))];
  // VERIFY DATA
  if (storageSession[0] !== 'false') {
    try {
      // CONSUME THE API OF EACH URL
      for (var storageSession_1 = __asyncValues(storageSession), storageSession_1_1; (storageSession_1_1 = await storageSession_1.next()), !storageSession_1_1.done; ) {
        const dataObject = storageSession_1_1.value;
        const data = await fetch(dataObject);
        const dataJson = await data.json();
        1;
        dataComplented.push(dataJson);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (storageSession_1_1 && !storageSession_1_1.done && (_a = storageSession_1.return)) await _a.call(storageSession_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    // CHOOSE THE CARD TO BE CREATED
    viewEspecie(dataComplented);
  } else {
    console.log('errror');
  }
};
// CREATE ELEMENT ESPECIE
const viewEspecie = (data) => {
  var _a;
  // DELETE SPINNER
  (_a = spinner.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(spinner);
  for (const items of data) {
    const element = ` <li class="cards__item">
    <div class="card" href="./view.html">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t_TL025GFw1aWWgTu1LyXHtjZP7vsqumHhuJ-ZIFvzCNUd8xxQ&s" alt="" class="card__image--fence" />
      <div class="card__content">
        <div class="card__title"><span>Especie</span></div>
        <p class="card__text"> 
          <span>${items.name}</span> <br />
          <span>${items.language}</span> | <span>${items.average_height}</span>    
        </p>       
      </div>
    </div>
  </li>`;
    cards.innerHTML += element;
  }
};
query();
