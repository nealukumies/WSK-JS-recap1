const score = prompt('Enter your score:');
let grade;
const p = document.createElement('p');
document.body.appendChild(p);
if (!isNaN(score)) {
  if (score > 0 && score <= 39) {
    grade = 0;
  } else if (score >= 40 && score <= 51) {
    grade = 1;
  } else if (score >= 52 && score <= 63) {
    grade = 2;
  } else if (score >= 64 && score <= 75) {
    grade = 3;
  } else if (score >= 76 && score <= 87) {
    grade = 4;
  } else if (score >= 88 && score <= 100) {
    grade = 5;
  } else {
    grade = 6;
  }
  if (grade < 6) {
    p.innerHTML = 'With a score of ' + score + ', your grade is ' + grade + '.';
  } else {
    p.innerHTML =
      'Your score input (' +
      score +
      ') does not match possible score of 0-100.';
  }
} else {
  alert('Invalid input, try again!');
}
