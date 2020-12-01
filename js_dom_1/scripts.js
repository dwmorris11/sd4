/*
1. document.getElementById(id) returns the ONE element with that id

E.g document.getElementById("myDiv") will return the element with the id "myDiv". If there is no element with the id "myDiv",  document.getElementById("myDiv") will return null

2. element.innerHTML gets or sets the HTML contained within an element

E.g
var myBody = document.body.innerHTML; assigns the HTML content of the body element to myBody variable

document.getElementById("myH1").innerHTML = "Cool header"; makes the element with the id "myH1" contain "Cool header" as its content
*/

// Change the content of the p#empty_paragraph element to "This paragraph content was added using Javascript" and refresh your page and see what happened
// YOUR CODE GOES HERE

const element = document.getElementById("empty_paragraph");
element.innerHTML = "This paragraph content was added using Javascript";