// ** ES6 => is advance version of javasrcipt.
// Features of javascript
// 1. let and const
// 2. Arrow
// 3. Template Literal
// 4. Default parameter
// 5. Object destructing
// 6. Promises

// 1. Let and Const => It is variable Type but it work base on the scope. it will not supported hoisting.

// let => This type of variable we can not declare multiple time. but we override its value. 
let test = "This is test pf let var";

test = "override let variable value ";
console.log(test);

// const => This is fixed, once we declare const it will not allow to override there defination as well as ther value.
// but in the case of few non-primitive data it will update the value. It will not support hoisting.

// const constvariable = 'Static constant'

// constvariable = 'Override details of const'     //Uncaught TypeError: Assignment to constant variable. we can not override const value

// console.log(constvariable);

const user = {};

user.name = "const user update";
user.phone = "const user phone update";

console.log("const user", user);

// * 2  Arrow => Arrow is similar kind of normal function but its taking memory unit while execute.
// so it is faster than the normal function. Also it is not requied specific name. 
// It will return statment automatically if we not give any kind of return there.
// As usual this keyword is not requird.
// syntax () => {} / not required function keyword.

function normaltype() {
  console.log(" I am nirma function");
}

const Arrowtype = () => {
  console.log("Iam Arrow Function");
};

//* 3. Template Literal => It will usefull for concatination of text.

var text1 = "Dynamic variable one ";
var text2 = "Dynamic varianle two";

var result =
  "concate all text in single statment " + text1 + " second text " + text2;

console.log("concate result => ", result);

var TemplateliteralTest = `concate all text in single statment ${text1} concate all text in single statment concate all text in single ${text2} statment`;

// *  4. Default parameter => It will use to handle default value in parameter.
// parameters to be initialized with default values if no value or undefined is passed.

function DefaultTest(defaultparameter = "Assigned default value") {
  console.log("defaultparameter value => ", defaultparameter);
}

var dynamictext = "This is dynamic text to default ";

DefaultTest(dynamictext);
DefaultTest();

//  2.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); //10

console.log(multiply(5)); //5

// * 5. Object destructing => It will use to convert key into variable. As well as it will use to pick some of the properties or required properties from object:

let userObject = {
  Id: "234",
  empName: "sanket",
  age: 25,
  Address: {
    Local: "pune",
    Permanant: "kolhapur",
  },
};

//  Without object destructuring we do this
let username = userObject.empName;
console.log(username);

//  with object destructuring we do this
const { empName, Id, age, Address } = userObject;

console.log(empName);
console.log(Id);
console.log(age);
console.log(Address);
