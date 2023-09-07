/* Browser will use aecho engine or js engine to run script code. 
Engine has been specifide some structure 
*/
// alert("show me alert box")
// console.log("sanket")

// for storing data type in java script it will use different types of variable
// variable are are started with var keyword

//types of variables in java script

// 1. primitive => String, number, float, boolean,undefined and null
//  ss bb nn u
/* String =>  " ", ' '
number => 125364
float => 35.57
boolean=> true or false / By default false 
undefine=> using it but not defined anywhere 
null=> it is took some memory which is used to store dynamic any kind of value  * type of null is object *
*/

// 2. non primitive => Date, Array, Object
/* 
//Date =>will tekan care system, it will system date 
Arrya=> it will store multiple kind data
*/
// Object => it will store multiple kind of data. it works with key value pair.

var name = "Vision It";
var phoneno = 9637967737;
var decimalpercent = 38.9;
var yesorno = false;
/*
var undefinevar;  // it will consider undefine var 
var nullvariable = null // null variable use null type of value. 
and it will be assing to use any kind of value at runtime. 

console.log("undefinevar", undefinevar )
console.log("nullvariable", nullvariable )
console.log("decimalpercent", decimalpercent )

// nullvariable = "Replace null value"
// console.log("nullvariable", nullvariable )

/// Array => syntax => [] => eg. ["String value",4854, false, 456.78,undefine,null]

var simpleArrayvariable = ["String value",4854, false, 456.78, undefined, null]

// Remove all value from array in one time // or simplearrayvariable.length = 0;
simpleArrayvariable = []

//console.log("simpleArrayvariable", simpleArrayvariable)

var Blankarray = []
//console.log("Blankarray", Blankarray.length)

//Array will work on index and value 
/* 
0: "String value"
1: 4854
2: false
3: 456.78
4: undefined
5: null
*/

//object =>  syntex => {} => object will tack key and value pair {name: "testname", phone number:9637967737, adress: "pune",telephonenumber[416122,876399,978635]}

var userdetail = {
  name: "testname",
  phonenumber: 9637967737,
  adress: "pune",
  telephonenumber: [416122, 876399, 978635],
  employeedetail: { empname: "tcs", empId: 83768 },
};
console.log("userdetail", userdetail);

document.getElementById("fname").innerHTML = userdetail.telephonenumber;

/* 
Access indevesual value using object key 
userdetai.adress => output => pune 

*/
var arraywithobject = [
  { id: 1, name: "Test1" },
  { id: 2, name: "Test2" },
  { id: 3, name: "Test3" },
  { id: 4, name: "Test4" },
  { id: 5, name: "Test5" },
];
document.write(
  arraywithobject.map((item) => {
    return "<div>" + item.name + "</div>";
  })
);
console.log("arraywith object user list", arraywithobject);

//Date => date will take system date and time

var todaydate = Date();
console.log("todaydate", todaydate);
