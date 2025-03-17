const x1 = prompt("Enter X coordinate for point 1");
const y1 = prompt("Enter Y coordinate for point 1");
const x2 = prompt("Enter X coordinate for point 2");
const y2 = prompt("Enter Y coordinate for point 2");

const p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML = "Point 1: (" + x1 + ", " + y1 + "), Point 2: (" + x2 + ", " + y2 + ")";

const p2 = document.createElement("p");
document.body.appendChild(p2);
const distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(2);
p2.innerHTML = "Distance is " + distance;
