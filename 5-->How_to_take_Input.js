/*
    How to take INPUT from user?

    Two Ways:
    1. Window Prompt (easy)
    2. HTML textbox  (difficult)
*/

// 1. Window Prompt 

let answer = window.prompt("How much wealth does bernie Sanders have?")
console.log(answer);

// 2. HTML textbox

/*
    The HTML would have the following code:

    <label>Enter your name: </label>
    <input type = "text" id = "firstText">
    <button type = "button" id = "firstButton">SUBMIT</button>
*/

let nam;
document.getElementById("firstButton").onclick = function (){
    nam = document.getElementById("firstText").value;
    console.log(nam);
}
