let text1 = "";
let i = 0;

do {
  text1 = text1 + " "+ i;
  i++;
}
while (i < 10);
console.log(text1);

let fruits = ["apple", "banana", "orange", "grape"]
let text2 = "";
let item = 0;

while (fruits[item]){
  console.log(fruits[item]);
  text2 = text2 + " " + fruits[item];
  item++;
}

console.log(text2);


let veggies = ["tomato", "cucumber", "potato"];
let text3 = "";
let a = 0;
for (;veggies[a];){
  
  text3 = text3 + " " + veggies[a];
  a++;
}
console.log(text3);

const el = document.getElementById('mydiv');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    console.log(el.tagName);
    console.log(el.textContent);
});
