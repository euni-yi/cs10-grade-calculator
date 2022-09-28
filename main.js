// CS-10 Grade Calculator

// Input
let first= +prompt("Enter yoru Client Side Scripting 1 Grade:");
let second= +prompt("Enter yoru Structured Programming 1 Grade:");
let third= +prompt("Enter your Structure Programming 2 Grade:");
let fourth= +prompt("Enter your Client Side Scripting 2 Grade:");
let fifth= +prompt("Enter your Project A Grade:");

// Process
let total = (first + second + third + fourth + fifth) / 5 ;

// Output
alert(`Your Final CS10 Grade is: ${first} + ${second} + ${third} + ${fourth} + ${fifth}: = ${total}% `)