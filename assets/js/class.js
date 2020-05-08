// MAIN API CONSUMPTION CLASS
class swapi {
  constructor() {
    this.querySwapi();
  }
  // SEE ALL API
  async querySwapi() {
    const data = await fetch('http://swapi.dev/api/films');
    const dataJson = await data.json();
    return dataJson.results;
  }
  // CHECK MAIN INFORMATION FILM
  async infoMainiMovies() {
    const data = await this.querySwapi();
    return data.map((value) => {
      return { title: value.title, director: value.director, elease_date: value.release_date, opening_crawl: value.opening_crawl };
    });
  }
  // QUERY PLENETS
  async planets() {
    const data = await this.querySwapi();
    return data.map((value) => {
      const dataPlanet = value.planets; //{ planets: value.planets };
      return dataPlanet;
    });
  }
  // QUERY CHARACTERS
  async characters() {
    const data = await this.querySwapi();
    return data.map((value) => {
      const dataCharacters = { characters: value.characters };
      return dataCharacters;
    });
  }
  // QUERY STARSHIPS
  async starships() {
    const data = await this.querySwapi();
    return data.map((value) => {
      const dataStarships = { starships: value.starships };
      return dataStarships;
    });
  }
}
