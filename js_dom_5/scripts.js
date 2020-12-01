/*
document.createElement(tagName) creates an element node of tagName

However, document.createElement is not enough by itself to create an element and show it on the page.

To show the created element on the page, we need to use either:

* parentElementNode.appendChild(createdElementNode) to add the createdElementNode as the last child of an existing parentElementNode

* parentElementNode.insertBefore(createdElementNode, referenceNodeElement) to add the createdElementNode before an existing referenceNodeElement

E.g if we had a page that looked like:
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
    </myDiv>
</body>
</html>

var newParagraph = document.createElement("p");
newParagraph.setAttribute("id", "myPara");
newParagraph.innerHTML = "I am new paragraph";
document.getElementById("myDiv").appendChild(newParagraph);

would create a new <p id="myPara">I am a new paragraph</p> and add it as a last child of div#myDiv, i.e. after <h1>Header</h1>

Therefore, our page would now look like:
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
        <p id="myPara">I am a new paragraph</p>
    </myDiv>
</body>
</html>

var anotherPara = document.createElement("p");
newParagraph.innerHTML = "ANOTHER Paragraph";
document.getElementById("myDiv").insertBefore(anotherPara, document.getElementById("myPara"));

would create a new <p>ANOTHER Paragraph</p> and add it before the p#myPara element

Therefore, our page would then look like
<html>
<head></head>
<body>
    <div id="myDiv">
        <h1>Header</h1>
        <p>ANOTHER paragraph</p>
        <p id="myPara">I am a new paragraph</p>
    </myDiv>
</body>
</html>
*/

// Use comfirm to ask if the user wants to create a new paragraph
let wantsToCreateParagraph = confirm("Do you want to create a new paragraph?");
const myDiv = document.getElementById("paragraph_container");

while (wantsToCreateParagraph) {
    // Prompt the user with what they want the paragraph to say
    let text = prompt("Enter text for the paragraph");

    // Create a new paragraph element
    // Make the content of the newly created paragraph element the text entered by the user
    // Use the getRandomHexColor function to give the newly created paragraph a background color
    // Add the newly created paragraph as the last child of the div#paragraph_container

    const newP = document.createElement("p");
    newP.innerHTML = text;
    newP.style.backgroundColor = getRandomHexColor();
    myDiv.appendChild(newP);

    // Ask the user if they want to add another paragraph
    wantsToCreateParagraph = confirm("Want to create another paragraph?");
}

function getRandomHexColor() {
    let hexChars = "0123456789ABCDEF";

    let randomColor = "#";

    for (let index = 0; index < 6; index++) {
        let randomHexCharIdx = Math.floor(Math.random() * hexChars.length);

        let randomHexChar = hexChars[randomHexCharIdx];

        randomColor += randomHexChar;
    }

    return randomColor;
}