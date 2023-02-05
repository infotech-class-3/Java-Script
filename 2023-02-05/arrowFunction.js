function sayHello(isim){
    console.log("Hello " + isim);
}

sayHello('Veli');


const sayHello2 = (isim) => {
    console.log("Hello " + isim);
    return 1;
}

sayHello2('Veli');

const sayHello3 = (isim) => 1;

sayHello3('Veli');

x = () => "Hello"

console.log(x());

sayHello('ahmet')

const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.filter(number => number !== 2);
console.log(filteredNumbers); // [1, 3, 4]