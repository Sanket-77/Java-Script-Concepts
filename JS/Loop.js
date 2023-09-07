// Loops in javascript //

// ** for loop => multiple execution done in single statment
// for (declaration,condition,increment/decrement)

var array = [232, 434, 565, 79, 434, 57];

for (var i = 0; i < array.length; i++) {
  console.log("Every element in array", array[i]);
}
// for loop support only array kind data
// Object dosent have length propety *******

// forEach loop is only available for arrays in JavaScript, while the for loop can be used to iterate over various types of collections.

// ** While loop => while loop will use to handle process until it will not get finish.
var test = 10;
while (test < 15) {
  console.log("Test will get execute until 15", test);
  test++;
}

// ** Do while loop => opposite of while loop it will do execution first then check the until condition.
// in do while loop it will execute once before checking condtion
var test1 = 0;
do {
  test1++;
  console.log("tast1", test1);
} while (test1 < 5);

// *** For-in => for in is similar kind of for loop but supported object and arrya both of the data.

var array1 = [1, 4, 5, 8, 9, 0];
var objcheck = { a: 1, b: 2, c: 3, d: 4 };
for (var i in objcheck) {
  console.log("i check in for loop: ", objcheck[i]);
}

// *** for-of => It will use iterate value without index. Not support to object type iteration.
// Also we can bind it with html element

for (var item of array1) {
  console.log("item in for of", array1[item]);
}
// In special case we use for of loop. Not for the all execution.
