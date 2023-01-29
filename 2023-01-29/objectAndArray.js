//Primitive Data types
//  - String
//  - Boolean
//  - Number

// Referans Data types
//  - Function
//  - Array
//  - Object

// primitive data types örnek

// var age = 20;
// var age1 = age;

// console.log(`yaş : ${age}   yaşi : ${age1}`);

// age = 30;

// console.log(`yaş : ${age}   yaşi : ${age1}`);

// referans data types örnek

// var info = {
//     isim : "Mehmet",
//     yas : 35
// };

// console.log(`İsmi : ${info.isim}   yaşi : ${info.yas}`);

// var info1 = info;

// info1.isim = "Ahmet";
// info1.yas = 40;

// console.log(`İsmi : ${info.isim}   yaşi : ${info.yas}`);

// Object

//person -> Object nin ismi
//firstName -> Objenin property

// var person = {
//     firstName : "Ali",
//     lastName : "Yilmaz",
//     age : 30,
// };

// console.log(person);
// console.log(person.firstName + " " + person.lastName);
// console.log(`yaşı : ${person.age}`);
// console.log(person["firstName"]);

// var araba = {
//     marka : "bmw",
//     modelYili : 2015,
//     rengi : "mavi",
//     motor : {
//         gucu : "120ps",
//         tipi : "Dizel"
//     }
// }

// console.log(araba.motor.gucu);
// console.log(araba.motor["gucu"]);

//Array

var cars = ["mercedes" , "bmw" , "citroen", 123 , true , 
    ["kirmizi" , "mavi"], 
    { marka : "bmw",
      modelYili : 2015,
      rengi : "mavi"}
]

// console.log(cars);
// console.log(cars.length);
// console.log(cars[0]);
// console.log(cars[6].marka);

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}



