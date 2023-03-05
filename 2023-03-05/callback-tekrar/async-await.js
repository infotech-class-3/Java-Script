// async-await

// --------- BACKEND TARAFI ----------------
// promiselerin yazilmasi

const loginOlduMu = true; // 3000ms
const makalesiVarMi = true; // 2000ms

const loginPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginOlduMu) {
        resolve("login islemi basarili");
        //   resolve({ kullaniciAdi: "Osman", sifre: "adasdasd" });
      } else {
        reject("login islemi BASARISIZ!!");
      }
    }, 3000);
  });
};

const makalePromise = () => {
  const sonuc = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (makalesiVarMi) {
        resolve("makaleler yüklendi");
      } else {
        reject("makelesi BULUNAMADI!!");
      }
    });
  }, 2000);
  return sonuc;
};

// siraya sokulmasi

// async function islem() {}
const islem = async () => {
  await loginPromise()
    .then((sonuc) => console.log(sonuc))
    .catch((hata) => console.log(hata));

  await makalePromise()
    .then((sonuc) => console.log(sonuc))
    .catch((hata) => console.log(hata));

  console.log("islemler bitti");
};

islem();
