// callback

// [].filter((item)=> {
//     item.id == 'asdasd'
// })

// function topla(sayi1, sayi2) {
//     return sayi1 + sayi2
// }

const birinci = (sonrakiIslem) => {
  setTimeout(() => {
    console.log("ilk function calisti");
    sonrakiIslem();
  }, 3000);
};

const ikinci = () => {
  setTimeout(() => {
    console.log("ikinci function calisti");
  }, 2000);
};

birinci(ikinci);
