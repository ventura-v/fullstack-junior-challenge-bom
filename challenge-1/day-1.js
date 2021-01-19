// ====== CHALLENGE 1 ====== //
// ======== DAY 1 ========= //
// ======= PART ONE ====== //

// getting the inputs
const inputs = require('./day-1-input').inputs

// transforming the inputs data in an array
const changesList = inputs.split(/\n/); // separated by linebreaks

const initialFrequency = 0,
  frequenciesList = [];

// changing the type of the values to number and adding them into the frequency list
changesList.map(currFrequency => {
  frequenciesList.push(parseInt(currFrequency));
});

// getting the resulting frequency
const resultingFrequency = frequenciesList.reduce((acc, curr) => {
  return acc + curr;
}, initialFrequency);

// showing the resulting frequency
console.log(resultingFrequency);

// ======= PART TWO ====== //

let accFrequency = initialFrequency;
const accFrequenciesList = [accFrequency];
let count = 0;

// looping until the first duplicated frequency is detected
while (true) {
  // repeating the list of changes
  if (count === frequenciesList.length) {
    count = 0;
  }

  accFrequency += frequenciesList[count];

  // checking if the frequency is duplicated
  if (!(accFrequenciesList.includes(accFrequency))) {
    accFrequenciesList.push(accFrequency);
    count++;
  } else {
    break; // when the first duplicate frequency appears, the loop ends
  }
}

// showing the first frequency that reaches twice
console.log(accFrequency);