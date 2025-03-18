const a = prompt("Enter first side of triangle:");
const b = prompt("Enter second side of triangle:");
const c = prompt("Enter third side of triangle:");

if (!isNaN(a || b || c)){
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.innerHTML = "The sides of your triangle: " + a + ", " + b + " and " + c;

  const p2 = document.createElement("p");
  document.body.appendChild(p2);
  let triangle;
  if (a == b && b == c){
    triangle = "equilateral"
  } else if (a != b && b != c){
    triangle = "scalene"
  } else {
    triangle = "isosceles"
  }
  p2.innerHTML = "Triangle is " + triangle;

} else {
  alert("Invalid input, try again!");
}
