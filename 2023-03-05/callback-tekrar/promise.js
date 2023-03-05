// promise nedir

// --------- BACKEND TARAFI ----------------
// promiselerin yazilmasi

const loginOlduMu = true; // 3000ms
const makalesiVarMi = false; // 2000ms

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

// -------------------------

// --------- FRONTEND TARAFI ----------------
// promiselerin kullanilmasi
loginPromise()
  .then((loginSonucu) => {
    console.log(loginSonucu);
    makalePromise()
      .then((makaleSonucu) => {
        console.log(makaleSonucu);
      })
      .catch((makaleHata) => {
        console.warn(makaleHata);
      });
  })
  .catch((loginHata) => {
    console.warn(loginHata);
  });

// siraya sokulmasi
