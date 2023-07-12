import countryData from "../constants/countryData.mjs";

class Country {
  constructor(
    flag,
    name,
    capital,
    region,
    subregion,
    abbreviation,
    language,
    area,
    population,
    currency,
    borders,
    maps
  ) {
    this.flag = flag;
    this.name = name;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.abbreviation = abbreviation;
    this.language = language;
    this.area = area;
    this.population = population;
    this.currency = currency;
    this.borders = borders;
    this.maps = maps;
  }
}

const countries = [];

for (let i = 0; i < countryData.length; i++) {
  const country = countryData[i];
  const countryName = country.name.common;
  const flagImage = country.flags.png;
  const {
    capital,
    region,
    subregion,
    cca3,
    languages,
    area,
    population,
    currencies,
    borders,
    maps,
  } = country;

  countries.push(new Country(
    flagImage,
    countryName,
    capital,
    region,
    subregion,
    cca3,
    languages,
    area,
    population,
    currencies,
    borders,
    maps
  ));
}


export default countries;