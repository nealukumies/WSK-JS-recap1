input = prompt('Enter temperature in Celsius: ');
const temperature = parseFloat(input.replace(',', '.'));
if (!isNaN(temperature)) {
  const fahrenheit = ((9 / 5) * temperature + 32).toFixed(2);
  const p = document.createElement('p');
  document.body.appendChild(p);
  document.querySelector('p').innerHTML =
    temperature + ' C is ' + fahrenheit + ' F.';
} else {
  alert('Invalid input, please enter a valid number!');
}
