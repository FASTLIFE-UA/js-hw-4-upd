// // *! Метод 1
// var array1 = [5, 10, 15, 20];
// var result1 = array1.reduce(function (sum, current) {
//   return sum + current;
// }, 0);

// var array2 = [10, 20, 30];
// var result2 = array2.reduce(function (sum, current) {
//   return sum + current;
// }, 0);

// let result = result1 + result2;

// console.log(result);

// *! Метод 2
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const array = array1.concat(array2);
// console.log(array);
// var result = array.reduce(function (sum, current) {
//   return sum + current;
// }, 0);

// console.log(result);

//*! цикл метод 3

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const result = [];

for (let i = 0; i < array1.length; i += 1) {
  result.push(array1[i] + array2[i]);
}
console.log(result);
