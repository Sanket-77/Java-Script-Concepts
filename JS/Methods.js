//*****  Onject or Array methods ******/
//methods are playing role to process data in minimum time. It will give accurate result

//Array Method => ********************

//(concat) => concat will use to merge multiple array in single object

var simplearray = [];

var emppersonaldetail = [{ fname: "empfname", lname: "empfname" }];
var addressprof = [{ currentadd: "pune", parmanentadd: "kolhapur" }];

simplearray.concat();

// Array (filter) =>> method will use to filter data which we require. filter will return result in new array

var result = emppersonaldetail.filter((item, index) => (item = "empfname"));
//console.log("result", result)

// ForEach => this method is also utilise to itterate the every element in Array.it will modify original array

var empdetail = [
  { id: 1, name: "Test1" },
  { id: 2, name: "Test2" },
  { id: 3, name: "Test3" },
  { id: 4, name: "Test4" },
  { id: 5, name: "Test5" },
];

//console.log("original empdetail", empdetail)

empdetail.forEach((item, index) => {
  if (item.id == 4) {
    item.name = "Modified name";
    item.add = "pune";
  }
});

//console.log("after for each ", empdetail)

// ** indexof => this method is used to find out element into the array. If element will not present it will return -1. else it will return 0

var details = [
  "sanket",
  "prashant",
  "shubham",
  "pratik",
  "sumit",
  "sanket",
  "prashant",
];

var rea = details.indexOf("shubham");
//console.log(rea)

// join => join will use to convert all element from array to string. it will not affect the original one

var joinarr = details.join(" / ");
//console.log("joinarr", joinarr)

//** Lastindexof => will return last index posion of element from array

var checklastindex = details.lastIndexOf("sanket");

//console.log("checklastindex", checklastindex)

//** Map => it will iterate every element from array. Also we modify existing element using map. it will never return new array  */

var mapResult = details.map((item, index) => item == "pratik");

//console.log("mapResult",mapResult)

// ** pop=> it will remove lasr element from array. change original one array. it will remove only the value

console.log("details", details);
details.pop();

//** push=> push will add element in last posion in array  */

details.push("meher");
//console.log("details",details)

// * reduce => reduce method will be iterate every element from array. it will genrate result in single result. it will support callback function.

var redexample = [12, 34, 57, 9, 24, 57, 68];

var redres = redexample.reduce(sumnub);

function sumnub(num) {
  console.log("num =>", num * 3);
}

// * reverse => it will revers the element in array

redexample.reverse();
//output => [12, 34, 57, 9, 24, 57, 68]

// * slice => slice will help to slicing the elements. it will work with start point and end point. both points are teken the index number.
// slice will generat a new array in every time. it will not affect the original one.

redexample.slice(0, 4);

//splice => it will eccept start and end point of elemenet. but it will delete the end point count.
// we can pass element number in start position and give delete count. it will gwnwrate new array for delete element only.
// Also effect the original array

redexample.splice(0, 3);

// output = [68, 57, 24]

// original array print =  [9, 57, 34, 12]

// sort => sort is use to sorting the array element. it should be in ascending or descending order.
//it will use call abck function and return sorting order //sort method will impact the original array also.

var sortex = [23324, 435, 576, 80, 6, 1, 7890];

//sortex.sort(function(a,b){a - b});
//output = [1,6,80,435,576,7890,23324]

// unshift=> it will use to add elements in start position
// shift => it will remove element from start position off array

//* object methods /************************************** */

// key => it will represent the key only from the object
// value => it will represent the value only from object
// entries => it will convert object element into entries. how many element are there converted into seperate array element
// object.entries(objectExample);

// object assign() => it will create a new object and disconnection fron source one.it will work with deep copy concept

//object.freeze() => it will nit allowed write anything into the object.

//***/ 1> deep copy => deep copy will copy object or array into anather source and disconnect from original.
// copwithspread = {...cop1};

//***/ 2> shalow copy => it will do copy one object into another but keep connect with orirginal one.
//suppose there change happen in copy object it will change the original one
