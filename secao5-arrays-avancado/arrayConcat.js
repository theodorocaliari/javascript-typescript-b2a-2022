const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const n3 = n1.concat(n2, [7, 8, 9], "Theo");
// ... rest operator -> ... spread
console.log(n3);

const a3 = [...n1, ...n2, ...[7, 8, 9]];
console.log(a3);
