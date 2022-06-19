// Step 1. Read the file - Done!
// Step 2. Store the file data into an array of names - Done!!
// Step 3. Remove quotation marks - Done!!
// Step 4. Sort the names - Done!!!!
// Step 5. Assign value to each alphabet - Done!!!!!

// Step. Create an array?

// Step. Loop through the thing and add? Possibly with a while loop? Shove into new array?

// Step. Find the sum of each name? With a loop?

const fs = require('fs');

const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const nameScore = function(filename) {
  const fileData = fs.readFileSync(filename, 'utf8');
  const nameArray = fileData.replace(/\"/g, '').split(',').sort();

  nameArray.forEach(firstName => {
    let nameSum = 0
    firstName.split('').forEach(letter => {
      const letterPosition = ALPHA.indexOf(letter) + 1
      nameSum += letterPosition
    })
    console.log(firstName, nameSum)
  })

  return 5
}

const score = nameScore('names.txt')

console.log("Score is", score)