import countries from 'worldcities';


import cities from 'all-the-cities';

import citiesJ  from 'cities.json';

countries.City

// countries.getAllByName

// countries.getByName("")

export interface Item {
  country: string
  name: string
  lat: string
  lng: string
}


//const j = <Item[]> JSON.parse(citiesJ.toString())
 const getAll = countries.getAllByName

 //const carray[] = citiesJ; 

//console.log(citiesJ)
 

//  const formattedCities = j.map((country) => ({
//   value: country.name,
//   label: country.name,
//   flag: country.country,
//   latlng: [47.33333333, 13.33333333],
//   region: country.country,
// }));



const formattedCities = cities.map((country) => ({
  value: country.name,
  label: country.name,
  flag: country.country,
  latlng: country.loc.coordinates,
  region: country.country,
}));


// const formattedCities = getAll("a").map((country) => ({
//   value: country.name,
//   label: country.name,
//   flag: country.name,
//   latlng: [47.33333333, 13.33333333],
//   region: country.name,
// }));



// const formattedCountries = countries.map((country) => ({
//   value: country.cca2,
//   label: country.name.common,
//   flag: country.flag,
//   latlng: country.latlng,
//   region: country.region,
// }));

const useCountries = () => {
  const getAll = () => formattedCities;

  const getByValue = (value: string) => {
    return formattedCities.find((item) => item.value === value) || "";
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
