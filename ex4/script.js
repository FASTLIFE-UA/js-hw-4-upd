// let array = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];

// array.splice(0, 4, "Pyton", "C++", "C#", "PHP");
// console.log(array);

//*!через цикл
const lang = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
let result = [];

for (let element of lang) {
  element = element.slice([2]);
  result.push(element);
}
console.log(result);
