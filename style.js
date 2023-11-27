//1

function anatovori(ana) {
  let vori = 0.0625;
  const convertanatovori = ana * vori;
  return convertanatovori;
}
console.log(anatovori(16));

//2

const singara = 7;
const samucha = 10;
const jilapi = 15;

function bill(singara, samucha, jilapi) {
  const total = singara + samucha + jilapi;
  return total;
}
console.log(bill(singara, samucha, jilapi * 7));

//3

function picnicbudget(persons) {
  let budget = 0;
  if (persons <= 100) {
    budget = persons * 5000;
  } else if (persons <= 200) {
    budget = 100 * 5000 + (persons - 100) * 4000;
  } else {
    budget = 100 * 5000 + 100 * 4000 + (persons - 200) * 3000;
  }
  return budget;
}
console.log(picnicbudget(100));

//4

function evenodd(inputstring) {
  const length = inputstring.length;
  if (length / 2) {
    result = "even";
  } else if ("length + 1 / 2") {
    result = "odd";
  }
  return result;
}
console.log(evenodd("Alter"));
console.log(evenodd("Batch01"));

//6

const cities = [
  {
    name: "City A",
    population: 1200000,
    coordinates: { lat: 34.0522, lon: -118.2437 },
  },

  {
    name: "City B",
    population: 800000,
    coordinates: { lat: 40.7128, lon: -74.006 },
  },
  {
    name: "City c",
    population: 500000,
    coordinates: { lat: 41.8781, lon: -87.6298 },
  },
];

const populations = cities.map((city) => city.population);
const totalpopulation = populations.reduce(
  (accum, currentpopulation) => accum + currentpopulation,
  0
);
console.log("Totalpopulation:", totalpopulation);

let maxpopulationcity = cities[0];
for (let i = 0; i < cities.length; i++);
console.log(maxpopulationcity);

const averagepopulation = totalpopulation / cities.length;
console.log(averagepopulation);
