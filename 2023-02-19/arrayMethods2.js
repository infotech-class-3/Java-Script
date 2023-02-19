const students = [
    { id: 1, adi: 'Murat', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 21, baslamaTarihi: 2010, bitirmeTarihi: 2014,  },
    { id: 2, adi: 'Ahmet', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 32, baslamaTarihi: 2000, bitirmeTarihi: 2006 },
    { id: 3, adi: 'Mahmut', cinsiyeti: 'e', bolum: 'mimarlik', yasi: 18, baslamaTarihi: 1999, bitirmeTarihi: 2008 },
    { id: 4, adi: 'Senem', cinsiyeti: 'k', bolum: 'mühendislik', yasi: 45, baslamaTarihi: 1993, bitirmeTarihi: 1997 },
    { id: 5, adi: 'Osman', cinsiyeti: 'e', bolum: 'mühendislik', yasi: 61, baslamaTarihi: 1980, bitirmeTarihi: 1988 },
    { id: 6, adi: 'Emine', cinsiyeti: 'k', bolum: 'iibf', yasi: 17, baslamaTarihi: 2017, bitirmeTarihi: 2021 },
];

// console.log(students[0].adi);
// console.log(students[1].adi);

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].adi);
// }

// function ismiYazdir(student) {
//     console.log(student.adi);
// }

// ismiYazdir(students[0]);

// students.forEach(ismiYazdir);

// const ismiYazdirArrow = (student) => {console.log(student.adi)}

// students.forEach(ismiYazdirArrow);

// students.forEach((student) => {
//     console.log(student.adi)
//     console.log(student.cinsiyeti)
// });

// mixedArray = [5, 'a']
// mixedArray.forEach((x) => console.log(typeof x));


// console.log(x);

//filter

filteredStudents = students.filter((student) => student.cinsiyeti === 'e');
// console.log(filteredStudents);

over15andMaleStudents = students.filter((student) => student.yasi > 20 && student.cinsiyeti === 'e');
// console.log(over15andMaleStudents);
// console.log('-----------------')

//find


foundStudent = students.find((student) => student.id === 3);
// console.log(foundStudent);

// console.log(students[2])


foundStudent2 = students.find((student) => student.id === 18);
// console.log(foundStudent2);

// dizide sartlara uyan ilk elemani bulur
yasOnsekizdenBuyukIlkOgrenci = students.find((student) => student.yasi > 45);
// console.log(yasOnsekizdenBuyukIlkOgrenci);

//findIndex
// kosulu saglayan ilk elemanin indexini dondurur
foundStudentIndex = students.findIndex((student) => student.id === 3);
// console.log(foundStudentIndex);

foundStudentIndexNegatif = students.findIndex((student) => student.id === 30);
// console.log(foundStudentIndexNegatif);

//every
// dizideki tum elemanlarin kosulu saglamasi durumunda true dondurur

allStudentsOver15 = students.every((student) => student.yasi > 15);
// console.log(allStudentsOver15);

allStudentsOver18 = students.every((student) => student.yasi > 18);
// console.log(allStudentsOver18);

allStudentsOver15 = students.every((student) => student.yasi > 15 && student.yasi < 62);
// console.log(allStudentsOver15);

allStudentsOver15andMale = students.every((student) => student.yasi > 15 && student.cinsiyeti === 'e');
// console.log(allStudentsOver15andMale);

allStudentsMale = students.every((student) => student.cinsiyeti === 'e');
// console.log(allStudentsMale);

//some
// dizideki en az bir elemanin kosulu saglamasi durumunda true dondurur
function testOver15(student) {
    return student.yasi > 15;
}
// isThereAnyStudentOver15fonksiyon = students.some(testOver15);
// console.log(isThereAnyStudentOver15fonksiyon);

// console.log(students.some(testOver15))

// isThereAnyStudentOver15 = students.some((student) => student.yasi > 15);
// console.log(isThereAnyStudentOver15);

// isThereAnyStudentOver15Negatif = students.some((student) => student.yasi > 90);
// console.log(isThereAnyStudentOver15Negatif);

// function someByAgeGreater(liste, age) {
//     return liste.some((item) => item.yasi > age)
// }

// console.log(someByAgeGreater(students, 90));


//sort 
// mevcut diziyi siralayarak degistirir
// const cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes"];

// const sayilar = [4, 12, 45,4, 123, 21];

// console.log(cars.sort());

// console.log(sayilar.sort());

// console.log(sayilar.sort((a, b) => a + b));

// console.log(sayilar.sort((a, b) => a - b));

// sayilar.sort((a, b) => b - a)

// console.log(sayilar);

// console.log(students.sort((a, b) => a.baslamaTarihi - b.baslamaTarihi));


//includes
// dizide aranan eleman varsa true yoksa false dondurur
// console.log(cars.includes('BMW'));

// console.log(cars.includes('bmw'));


//map
// dizideki her eleman icin belirtilen islemi yapar ve yeni bir dizi olusturur

mappedStudentsNames = students.map((student) => {
    return {adi: student.adi}
});

// console.log(mappedStudentsNames);

mappedStudentsNamesAndId = students.map((student) => {
    return {
        adi: student.adi, 
        id: student.id
    }
});

// console.log(mappedStudentsNamesAndId);

studentStudyYears = students.map((student) => {
    return {
        adi: student.adi,
        okulYili: student.bitirmeTarihi - student.baslamaTarihi
    }
});

// console.log(studentStudyYears);
// console.log(students);

studentsWithStudyYears = students.map((student) => {
    return {
        ...student,
        okulYili: student.bitirmeTarihi - student.baslamaTarihi
    }
});

// console.log(studentsWithStudyYears);
// console.log(students);

//reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sonuc = numbers.reduce((total, number) => 
    {return total + number}
, 0);

// console.log(sonuc);

sonuc = numbers.reduce((snc, number) => snc + number, 50);

// console.log(sonuc);


studentTotalAge = students.reduce((toplamYas, student) => {
    return toplamYas + student.yasi
}, 0);

// console.log(studentTotalAge)

avarageStudentAge = studentTotalAge / students.length;
// console.log(Math.ceil(avarageStudentAge));

//reduce gruplama

// bolumler = {'mimarlik':2, 'muhendislik': 3}

bolumSayilari = students.reduce((bolumler, student) => {
    if (bolumler[student.bolum]){
        bolumler[student.bolum]++;
    } else {
        bolumler[student.bolum] = 1;
    }
    return bolumler;
}, {});

console.log(bolumSayilari);


// for dongusu ile gruplama
siniflar = {};
for (let i = 0; i < students.length; i++) {
    if (siniflar[students[i].bolum]){
        siniflar[students[i].bolum]++;
    }
    else {
        siniflar[students[i].bolum] = 1;
    }
}
// console.log(siniflar)


//reduce ornek 2
let arabalar = [ 
    {model:'volkswagen',color:'red'},
    {model:'mercedes',color:'blue'},
    {model:'toyota',color:'black'},
    {model:'skoda',color:'red'},
    {model:'hyundai',color:'red'},
    {model:'hyundai',color:'blue'}
];


renklereGoreSayilar = arabalar.reduce((renkler, araba) => {
    if (renkler[araba.color]){
        renkler[araba.color]++;
    } else {
        renkler[araba.color] = 1;
    }
    return renkler;
}, {});

// console.log(renklereGoreSayilar);

renklereGoreSayilar2 = arabalar.reduce((renkler, araba) => {
    (renkler[araba.color] ? renkler[araba.color]++ : renkler[araba.color] = 1);
    return renkler;
}, {});

console.log(renklereGoreSayilar2);

renklereGoreArabalar1 = arabalar.reduce((renkler, araba) => {
    if (renkler[araba.color]){
        renkler[araba.color].push(araba);
    } else {
        renkler[araba.color] = [araba];
    }
    return renkler;
}
, {}
);

// console.log(renklereGoreArabalar1);

renklereGoreArabalar = arabalar.reduce((renkler, araba) => {
    (renkler[araba.color] = renkler[araba.color] || []).push(araba); 
    return renkler;
}, {});

// console.log(renklereGoreArabalar);