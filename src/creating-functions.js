// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increment(a) {
  return a + 1
}
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(input) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}
// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smiley(name) {
  name = capitalise(name)
  const hi = 'Hi, '
  name = hi.concat(name)
  return (name = name.concat(' :)'))
}
// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function howManyStrings(stuff) {
  let count = 0
  for (let i = 0; i < stuff.length; i++) {
    if (typeof stuff[i] === 'string') {
      count++
    }
  }
  return count
}
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
// What?
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function damnWeirdFunction(object) {
  if (!Object.hasOwn(object, 'edward')) {
    object.edward = 'amazing'
  }
  return object
}
// TODO: change each undefined below to be the name of the functions you defined
// It took me almost half an hour of not understanding what I was doing wrong with task 1 to find that I needed to do this, maybe I'm just dumb but some indication that this is needed higher up in the file would be nice.
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: howManyStrings,
  e: damnWeirdFunction
}
