//ES6 => is advance version of javasrcipt. Which is Supported in javascript.
// Features of javascript 
// 1. Two new variable let and const 
// 2. Arrow
// 3. Template Literal
// 4. Default parameter 
// 5. Object destructing 
// 6. Promises 


// 1. Let and Const => It is variable Type but it work base on the scope. it will not supported hoisting.
// where you define it the scope has been started over there. 

// let => This type of variable we can not declare multiple time. but we override its value.
let test = "This is test pf let var";

test = "override let variable value "
console.log(test);

// const => This is fixed, once we declare const it will not allow to override thre defination as well as ther value 
// but in the case of few non-primitive data it will update the value. It will not support hoisting.

// const constvariable = 'Static constant'

// constvariable = 'Override details of const'     //Uncaught TypeError: Assignment to constant variable. we can not override canst value

// console.log(constvariable);


const user = {}

user.name = 'const user update'
user.phone = 'const user phone update'

//console.log('const user', user);


// * 2  Arrow => Arrow is similae kind of normal function but its taking memory unit while execute.
// so it is faster than the normal function. Also it is not requied specific name 
// It will return statment automatically if we not give any kind of return there. As usual this keyword is not requird
//syntax () => {}   / not required function keyword 

function normaltype() { console.log(' I am nirma function') }

const Arrowtype = () => { console.log("Iam Arrow Function") }


//* 3. Template Literal => It will usefull for concatination a text 
// This will help to change dynamic bloging. 

var text1 = "Dynamic variable one "
var text2 = "Dynamic varianle two"

var result = "concate all text in single statment " + text1 + " second text " + text2;

console.log("concate result => ", result);

var TemplateliteralTest = `concate all text in single statment ${text1} concate all text in single statment concate all text in single ${text2} statment`;


// *  4. Default parameter => It will use to handle default value in parameter.

function DefaultTest(defaultparameter = "Assigned default value") {
    console.log("defaultparameter value => ", defaultparameter);
}

var dynamictext = "This is dynamic text to default "

DefaultTest(dynamictext);
DefaultTest();

// * 5. Object destructing => It will use to convert key into variable. As well as it will use to pick some of the properties or required properties from object:

let userObject = {
    Id: '234',
    empName: "sanket",
    age: 25,
    Address: {
        Local: 'pune',
        Permanant: 'kolhapur'
    }
}

let username = userObject.Name;

// const{empName}= userObject;




















