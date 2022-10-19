function random(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
console.log("######");
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
