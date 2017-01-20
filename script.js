/*
Step 1: Add a 'splinter' function.
Step 2: The function should take in 2 numbers as arguments,
multiply those numbers,
and save the result to a locally scoped variable called 'z'.
Step 3: Create an array that stores the first argument, second argument, and z
Step 4: Return that array.
Step 5: Test this by console logging the splinter function, passing in 1 and 2.
*/

function splinter (x, y) {
  var z = x * y;
  var splinterArray = [x, y, z];
  return splinterArray;
};

console.log(splinter(1,2));
