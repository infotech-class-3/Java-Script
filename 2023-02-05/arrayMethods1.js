// array methods 1
//toString()
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Peach', 'Strawberry', 'Watermelon'];

console.log(fruits);

fruits_string = fruits.toString();
console.log(fruits_string);


//join()
fruits_string2 = fruits.join(' | ');
console.log(fruits_string2);

//pop()
atilan = fruits.pop();

console.log(fruits);

console.log(atilan);

atilanlar_string = atilan;
console.log(atilanlar_string);

atilan2 = fruits.pop();
atilanlar_string = atilanlar_string + ' ' + atilan2;
console.log(atilanlar_string);

//shift()
atilan3 = fruits.shift();
atilanlar_string = atilanlar_string + ' ' + atilan3;
console.log(atilanlar_string);
console.log(fruits);

//push()

p = fruits.push('Kiwi');
console.log(fruits);
console.log(p);

//unshift()

x = fruits.unshift('Pineapple');
console.log(fruits);
console.log(fruits.length);

//concat()

fruits2 = ['Papaya', 'Pomegranate', 'Pear', 'Plum', 'Peach', 'Persimmon', 'Pineapple'];
allFruits = fruits.concat(fruits2);
console.log(allFruits);

//splice()

//fruits2.splice(2, 0, 'Cherry', 'Grape');
console.log(fruits2);

fruits2.splice(0, 0, 'Cherry', 'Grape');
console.log(fruits2);

// fruits2.splice(1,fruits2.length-1);

console.log(fruits2);

//slice()

console.log(fruits2)
sepet = fruits2.slice(5, 8);
console.log(sepet);

//reverse()
console.log(fruits2.reverse());