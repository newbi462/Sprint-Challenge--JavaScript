// ==== Objects ====

/*
  Given the following information about dinosaurs, create 3 objects:
  Use this pattern to create your objects:
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceous
const tyrannosaurusObj = {
  name: "tyrannosaurus",
  diet: "carnivorous",
  weight: "7000kg",
  length: "12m",
  period: "Late Cretaceous",
  roar: function() {return "RAWERSRARARWERSARARARRRR!";},
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const stegosaurusObj = {
  name: "stegosaurus",
  diet: "herbivorous",
  weight: "2000kg",
  length: "9m",
  period: "Late Jurassic",
};

// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceous
const velociraptorObj = {
  name: "velociraptor",
  diet: "carnivorous",
  weight: "15kg",
  length: "1.8m",
  period: "Late Cretaceous",
};

// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(tyrannosaurusObj.weight);

// What was the diet of a velociraptor?
console.log(velociraptorObj.diet);

// How long was a stegosaurus?
console.log(stegosaurusObj.length);

// What time period did tyrannosaurus live in?
console.log(tyrannosaurusObj.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.
console.log(tyrannosaurusObj.roar());


// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests using any array method you like

const graduates = [
  { id: 1, first_name: "Cynde", university: "Missouri Southern State College", email: "ctorry0@macromedia.com" },
  { id: 2, first_name: "Saundra", university: "The School of the Art Institute of Chicago", email: "swhal1@state.gov" },
  { id: 3, first_name: "Lambert", university: "Marian College", email: "lparham2@techcrunch.com" },
  { id: 4, first_name: "Modestine", university: "International Medical & Technological University", email: "mdolder3@symantec.com" },
  { id: 5, first_name: "Chick", university: "Sultan Salahuddin Abdul Aziz Shah Polytechnic", email: "camorts4@google.com.au" },
  { id: 6, first_name: "Jakob", university: "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft", email: "jharken5@spiegel.de" },
  { id: 7, first_name: "Robbi", university: "Salem University", email: "rbrister6@redcross.org" },
  { id: 8, first_name: "Colline", university: "Coastal Carolina University", email: "cbrosh7@alibaba.com" },
  { id: 9, first_name: "Michail", university: "Universidad Católica de Ávila", email: "mrome8@shinystat.com" },
  { id: 10, first_name: "Hube", university: "Universitat Rovira I Virgili Tarragona", email: "hlethbrig9@foxnews.com" },
];

/* Request 1: Create a new array called universities that contains all the universities in the graduates array. This will be an array of strings.

Once you have the new array created, sort the universities alphabetically and log the result. */
const universities = [];
graduates.forEach(function(index) {
  universities.push(index.university);
});
console.log(universities);

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. This will be an array of strings.

The resulting contact information strings should have a space between the first name and the email, like this:
"Josh josh@example.com"

Log the result of your new array. */
const contactInfo = [];
graduates.forEach(function(index) {
  contactInfo.push(`${index.first_name} ${index.email}`);
});
console.log(contactInfo);

/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called unisWithUni that contains them all. This will be an array of objects. Log the result. */
const unisWithUni = [];
graduates.forEach(function(index) {
  if (index.university.includes("Uni")) { // https://www.w3schools.com/jsref/jsref_includes.asp
    unisWithUni.push(index);
  }
});
console.log(unisWithUni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const displayNames = [];
zooAnimals.forEach(function(index) {
  displayNames.push(`Name: ${index.animal_name}, Scientific: ${index.scientific_name}`);
});
console.log(displayNames);
//"Name: Jackal, asiatic, Scientific: Canis aureus."

/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case.
Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/

const lowCaseAnimalNames = [];
zooAnimals.map( index => lowCaseAnimalNames.push(index.animal_name.toLowerCase())  );
console.log(lowCaseAnimalNames);

/* Request 3: .filter()

The zoos are concerned about animals with a lower population count.
Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/
const lowPopulationAnimals = [];
//zooAnimals.filter(  index => lowPopulationAnimals.push(index.population < 5)  );
function dameYouforusingConstthisiswhyLETisbetter(index) {
  if (index.population < 5) {
    lowPopulationAnimals.push(index);
  }
};
zooAnimals.filter(dameYouforusingConstthisiswhyLETisbetter);

console.log(lowPopulationAnimals);

/* Request 4: .reduce()

The zoos need to know their total animal population across the United States.
Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/
/*
const populationTotal = 0;
const reducer = (accumulator, currentValue) => ({population: accumulator.population + currentValue.population});
populationTotal = zooAnimals.reduce(reducer).population;
console.log(populationTotal);
*/
/*DUE TO FORCING CONST ONLY AND NO LETTING MODIFY THE VALUE OF THE ZERO FAIL MBP*/
/*
let populationTotal = 0; // I haver to change this to let or there is no way to do this one...
const reducer = (accumulator, currentValue) => ({population: accumulator.population + currentValue.population});
populationTotal = zooAnimals.reduce(reducer).population;
console.log(populationTotal);
*/

/*THIS CODE WORKS JUST FINE*/
let populationTotal4 = 0;
const reducer = (accumulator, currentValue) => ({population: accumulator.population + currentValue.population});
populationTotal4 = zooAnimals.reduce(reducer).population;
console.log(populationTotal4);
/*BUT acording to TL we need to change the value fo a const number*/
/*
I know of no way to do this becaue the whole point of a CONST is YOU CAN NOT CHANGE IT, in this case it is hard coded to 0
I could console.log the reduce but that is still not changing the calu of the constant with reduce.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
the documentation on reduce say nothing about it bodifying constants.
*/

/*THIS ALSO WORKS*/
let populationTotal2 = 0;
populationTotal2 = zooAnimals.reduce( function(accumulator, currentValue) {
  return accumulator + currentValue.population;
}, 0);
console.log(populationTotal2);
/*
BUT SAME PROBLEM the use of var = array.reduce can not be used when the var is a constant type, It wont let the change be made.

/*THIS WOULD ALSO WORK*/
const reducer2 = (accumulator, currentValue) => ({population: accumulator.population + currentValue.population});
const populationTotal3 = zooAnimals.reduce(reducer2).population;
console.log(populationTotal3);
/*
But this is cheating because I am not changing the value of the zero, but that is the only way I can think of to do this using a const.
*/

/*OK NOW WE CAN TOUCH THE starting code to fic this*/
//so a reformeated for MVP
const populationTotal = zooAnimals.reduce( function(accumulator, currentValue) {
  return accumulator + currentValue.population;
}, 0);
console.log(populationTotal);
/*leaving the above as the arrow funtions are a stretch goal*/


/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/
