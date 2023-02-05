a = [1,2,3,4,5,6,7,8,9,10];
b = [20,30,40,50,60,70,80,90,100,110];

console.log(a);
console.log(b);

d = [...a];
console.log(d);

c = [...a, ...b]; //[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,110];
console.log(c);

str = 'Hello';
charsOfStr = [...str];
console.log(charsOfStr);

arr = [1,2,3];
function sum(a,b,c){
    return a+b+c;
}

sonuctoplam = sum(...arr)
console.log(sonuctoplam);

console.log(sum(arr[0], arr[1], arr[2]));


v = [1,2,3,4,5,6,7,8,9,10];
z = [1,2,3,4,5,6,7,8,9,10];

y = [5,8,...v, ...z];


console.log(y);

// using spread operator with objects
const iletisim = {
    email: 'test'
}

const person = {
    name: 'John',
    age: 30,
    city: 'Miami',
    iletisim: iletisim
}

console.log(person);
// spread operator
const person2 = {ad :person.name,  email: 'denen@yahoo.com'};
const person3 = {...person, email: 'denen@yahoo.com'};

person.name = 'Jack';
console.log(person);
console.log(person2);
console.log(person3);

person3.iletisim.email = 'yeniemail'
person.iletisim.email = 'yeniemail2'
console.log(person);
console.log(person3);

// console.log(person2);