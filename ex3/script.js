const names = ["Pyton", "C++", "C#", "PHP"];
const nameToFind = "Java Script";
let message;

for (const name of names) {
  if (name === nameToFind) {
    message = `Позиція з таким іменем ( ${nameToFind} ) є в базі даних!`;
    break;
  }
  message = `Позиції з таким іменем ${nameToFind} немає в базі даних! Зараз додамо!!!`;
}
console.log(message);

names.push("Java Script");
console.log(names);
