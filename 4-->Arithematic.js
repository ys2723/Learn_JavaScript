/*
    Operator precedence:
    1. Paranthesis ()
    2. Exponents 
    3. Multiplication and Division
    4. Addition and Subtraction
*/

let value = 50;

value = value + 5;         // Can be done for '-', '*' and '/' too.
console.log(value);

let number = 50;
number += 5                // Works same as 'number = number + 5'
console.log(number);

let EndValue = 4 + 5 * (6 - 3) + 45
console.log(EndValue);     // Printed according to operator precedence.
