let number = -1;
while (number < 0 || isNaN(number)) {
  number = parseInt(prompt('Enter a positive integer: '));
  if (number < 0 || isNaN(number)) {
    alert('Invalid input, try again!');
  }
}

const table = document.createElement('table');
document.body.appendChild(table);

for (let row = 1; row <= number; row++) {
  const tr = document.createElement('tr');
  for (let col = 1; col <= number; col++) {
    const td = document.createElement('td');
    td.innerHTML = row * col;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
