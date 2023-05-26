// Function => function is a block of code designed to perform a particular task.
// function is executed when "something" invokes it (calls it).

// Type of Function => 
// 1. non parameterise
// 2. parameterise
// 3. anonymous
// 4. self invoke function
// 5. call back function

// Function abc (){}  // This is syntax of function. Function keyword point out that is function

function submitUserDetails() {
  var first_name = document.getElementById("fname").value;
  var last_name = document.getElementById("lname").value;

  var userdetails = {
    Firstname: first_name,
    Lastname: last_name,
  };

  console.log("userdetails", userdetails);
}

// parameterise function => this type will accept one or two parameter and then we can devlope our logic

var userphone = 9637967737;
var useradress = "pune";

parameter(userphone, useradress);
function parameter(val1, val2) {
  //console.log("val1", val1);
  //console.log("val2", val2);
}

// ***  Anonymous Function => Anonymous it should not take any kind of name this function. It just use function keyword only
// we can bind this function with object and variables
 
var functionwithvariable = function () {
  console.log("example of anonymous function");
};

functionwith_object = {
  test: "test function",
  testmethod: function () {
    console.log("this is test function");
  },
}(
// *** Self invoke Function => It will execute itself with the use of () only.
// By default, variables declared in self invoked functions are only available to code within the self-invoked function. Does not care about how variables are declared or named in another block of code in JavaScript. 
// They are useful when you need to create a function that will only be used once or to create a private scope to prevent naming conflicts.

  //syntax => (function({console.log()}))()
  function () {
    console.log("self invoke logic");
  }
)();

// callback function => it will take one function at one time and then process next.
//suppose any error occured in any exicution part it stope callback for other.
//use of call back => there are certain dependency on function calling then we can go with callback function.
//useing callback we can make asyncronys call
maincall(firstcall, secsecondcall);

function maincall(firstcall, secondcall) {
  firstcall();
  secondcall();
}

function firstcall() {
  console.log("first call back function");
}
function secsecondcall() {
  console.log("second call back function");
}

// How scop is working in javascript => clouser will play a role of access in javascript.
//while we going to access ther private scope, state variable,function then clouse has been generated.

var parentvar = "break scope from local";

function parenFunction() {
  //parentFunction is will generate there own scope

  function childFunction() {
    var childvar = "childvar";
    console.log("childvar", childvar);
    console.log("parenvar", parentvar);
  }

  childFunction();
  //inthis process clouser has been generated. it will keep maintain the scope.
}

//*** recursive method => use to break function scope - 

function recursivemethod() {
  return function child1() {
    console.log("child data expose");
    return function child2() {
      console.log("child2 data expose");
    };
  };
}
//return keyword will execute statment immediatly and stop further statment execution and break the scope
// it also called callback hell.

//** Hoisting => Hoisting is process which accesible the declair varibale and function within the local scope

Hoistingcheck = "this is hoisting check";

var Hoisting; // hoisting will support var keyword only in case of variable

console.log("Hoisting check with hoisting", Hoistingcheck);
