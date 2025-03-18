let number = -1;
while (number < 0 || isNaN(number)) {
  number = parseInt(prompt('Enter a positive integer: '));
  if (number < 0 || isNaN(number)) {
    alert('Invalid input, try again!');
  }
}

let sum = 0;
for (let i = 1; i <= number; i++) {
  sum += i;
}
const p = document.createElement('p');
document.body.appendChild(p);
p.innerHTML =
  'The sum of all natural number up until ' + number + ' is ' + sum + '.';
