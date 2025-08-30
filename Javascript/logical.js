console.log(1 || 0);

console.log(23 || 0 || 212);

let acc;
acc = acc ?? 23; // ?? - nullish coalescing operator
console.log(acc);

console.log(true && undefined && null);