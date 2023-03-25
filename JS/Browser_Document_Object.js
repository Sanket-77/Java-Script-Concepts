
//Browser object and document object

//Bom => Browser Object Model => This object will represent the browser content.

// Window.location => Provide information about current location of page.
// Window.reload() => It will refresh the current page.
// Window.history => It will maintain the history about the current page. we can check back forword.
// Window.replace => It will use to replace the current page url.
// Window.navigation => It will give information about page navigation or routes.
// Window.alert => alert() => use to show message on popup box of browser.
// Window.innerhight => it will give brwoser page innerhight in pixle
// Window.inner width => it will give brwoser page inner width in pixle

// settimeout => set time out will be use to perform a task after specific time 
// setTimeout(() => {
//     var tes1 = console.log("Execute after 3 sec ");
// }, 3000);

//  setInterval - perform tast continously in in specific time 

// setInterval(() => {
//     var test = console.log("Execute after every 3 sec")
// }, 3000);

// clear intervat => which is sue to stope setinterval execution
// clearInterval();


// // Document Object => DOM => Document Object Model
// //this object model will use to document element using diff methods 

// Document.write will use to write a content on page dynamiclly 
document.write("<h1>Write from js script</h1>")

// document.getElementById() => user to access element using ther id atrribute. this is unoque element will access.
// document.getElementByClassName => use to access element by using its class. This will be a multiple element.

var inputText = documenet.getElementById("Submitbutton");
inputText.addEventListner("click", callEvent);

function callEvent() {
    // documenet.write(<input type = "text" id = "dyn1" class = "dyn1"/>);

    // var creatinput = documenet.createElemenet("input");
    // creatinput.setattribute('type','text')
    // creatinput.setattribute('id','text1')
    // creatinput.setattribute('class','text1')

    // document.getElementById(DynamicControls).appendChild(creatinput);

    var tablestructure = document.createElement('table');
    var tabletr = document.createElement('tr');
    var tabletd = document.createElement('td');

}

// week asssignment => Dynamic fornm creation
// user will click on resister button then this dynamic form will be generated
// input => first name
// input => last name
// input => phone number
// checkbox = > process1,2,3
// redio button => gender male or female
// submit button => submit the data 
