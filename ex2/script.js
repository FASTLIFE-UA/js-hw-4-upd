// *! Спосіб вирішення через Math.max
// const array = [23, 1, 45, 87, 4, 55, 6];

// console.log(Math.max(...array));
//
//
// *! Спосіб через цикл
const nums = [23, 1, 45, 87, 4, 55, 6];
let maxNum = 0;

for (let num of nums) {
  if (num > maxNum) {
    maxNum = num;
  }
}
alert(`Найбільше значення: ${maxNum}`);
