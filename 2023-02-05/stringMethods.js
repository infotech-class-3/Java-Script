// stringler

var fruits = "Muz, Portakal, Elma, Çilek, Karpuz";
console.log(fruits.length)

console.log(fruits.slice(3, 10))

fruits.slice(fruits.length - 10, fruits.length - 3)

ogrenci_numarasi1 = "FATIH_56_1234567890";
ogrenci_numarasi2 = "FATIH_56_123456789065566";

console.log(ogrenci_numarasi1.slice(0, 10))
console.log(ogrenci_numarasi1.slice(9))
console.log(ogrenci_numarasi2.slice(0, 10))
console.log(ogrenci_numarasi2.slice(9))


//substring
console.log(fruits.substring(fruits.length - 10, fruits.length - 3))

//substr
console.log(fruits.substr(3, 10))

//replace
console.log(fruits.replace("Çilek", "Kivi"))

// regular expression bakabilirsiniz.
// tum eslesenleri degistirir
console.log(fruits.replace(/ /g, "Kivi"))

//replaceAll
console.log(fruits.replaceAll(",", "."))

// concat
console.log(fruits.concat(" ", "Mandalina"))

console.log(fruits)

// fruits = fruits + ", " + "Mandalina"

fruits = fruits.concat(",", "Çilek")

console.log(fruits)

// charAt

console.log(fruits.charAt(fruits.length - 1))

// indexOf

console.log(fruits.indexOf("Çilek"))
console.log(fruits.indexOf("Çilek", 22))

// split

fruits_array = fruits.split(",")
fruits_array[1] = fruits_array[1].trim()
console.log(fruits_array)
