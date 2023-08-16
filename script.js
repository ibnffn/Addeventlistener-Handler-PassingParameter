// Style Properti
function myFunction() {
  document.getElementById("myP").style.backgroundColor = "red";
  document.getElementById("myP").style.color = "white";
}
// result - click and see of changes on the text and warna background in HTML page

// Style Properti 2 - uses GETELEMENTBYTAGNAME
function myFunctions() {
  var x = document.getElementsByTagName("style")[0];
  document.getElementById("demo").innerHTML = x.innerHTML;
}
// result - tampil style by tagname = "style"
// #myP { color: black; background-color: white; padding: 10px; }

// DOM 2 - CREATEELEMENT,REMOVECHILD,APPENDCHILD,REPLACECHILD,WRITE,CREATETEXTNODE
// createlement,createtextnode,appendchild,insert,bef pre
document.body.onload = addElement;
function addElement() {
  const greet1 = document.createElement("greet");
  const contentgreet = document.createTextNode("hi there and greetings!");
  greet1.appendChild(contentgreet);
  const currentgreet1 = document.getElementById("greets");
  document.body.insertBefore(contentgreet, currentgreet1);
}
// result
// The text above has been created dynamically
// hi there and greetings!

// APPENDCHILD
function myFunctional() {
  let node = document.createElement("li");
  let textnode = document.createTextNode("water");
  node.appendChild(textnode);
  let current = document.getElementById("myList");
  current.appendChild(node);
  document.getElementById("myList");
}

// APPENDCHILD - INSERT BEFORE PREV
function myFunctionalis() {
  let nodes = document.createElement("li");
  let textnodes = document.createTextNode("water");
  nodes.appendChild(textnodes);
  let currents = document.getElementById("myLists");
  currents.appendChild(nodes);
  document.body.insertBefore(nodes, currents);
}

// ADDEVENTLISTENER - FUNCTION CLICK BY ID
document.getElementById("myBtn").addEventListener("click", myFunctiont);
function myFunctiont() {
  alert("You clicked me!");
}
// ADD MANY EVENT TO THE SAME ELEMENT - SOME ADDEVENTLISTENER

var x = document.getElementById("myBtns");
x.addEventListener("click", myFunctionss);
x.addEventListener("click", someOtherFunction);
function myFunctionss() {
  alert("clicked");
}
function someOtherFunction() {
  alert("This function was used!");
}
// popup 2 x - clicked and this function was used!

// ADD EVENT HANDLER TO WINDOW OBJECT
window.addEventListener("resize", function () {
  document.getElementById("demost").innerHTML = Math.random();
});
// result
// Add Event Listener with window
// 0.46454680848520624  -> angka berubah ubah

// PASSING PARAMETERS - anonymus function
let p1 = 5;
let p2 = 7;
document.getElementById("myBtnss").addEventListener("click", function () {
  myFunctionalization(p1, p2);
});
function myFunctionalization(a, b) {
  document.getElementById("demonas").innerHTML = a * b + 10;
}
// result 45

// NOT USE PARAMETER
let x1 = 2;
let x2 = 3;
document.getElementById("demons"),
  addEventListener("click", function () {
    myFunctiona(x1, x2);
  });
document.getElementById("myBtnsss").addEventListener("click", function () {
  myFunctiona();
  function myFunctiona(a, b) {
    document.getElementById("demons").innerHTML = a * b + 1;
  }
});
// result
// NaN
