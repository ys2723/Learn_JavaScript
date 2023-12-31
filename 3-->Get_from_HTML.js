/* 
    Some tag in the HTML code will have the id 'greet' and 'age'.

    <p id = "greet"></p>
    <p id = "age"></p>
*/

let nam = "Watergate Richard";
let age = 54;

document.getElementById("greet").innerText = "Hello " + nam;
// Javascript would connect with the id 'greet' and change the tag's text using the above line.

document.getElementById("age").innerText = "Your age is " + age;
// Javascript would connect with the id 'age' and change the tag's text using the above line.
