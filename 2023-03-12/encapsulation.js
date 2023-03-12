// Encapsulation

const maas = 4000;
const fazlaMesai = 20;
const fazlaMesaiUcreti = 10;

const maasHesapla = (p1, p2, p3) => {
  return p1 + p2 * p3;
};

// console.log(maasHesapla(maas, fazlaMesai, fazlaMesaiUcreti));

// oop

const calisan_1 = {
  maas: 3000,
  fazlaMesai: 20,
  fazlaMesaiUcreti: 15,
  maasHesapla: function () {
    return this.maas + this.fazlaMesai * this.fazlaMesaiUcreti;
  },
};

const calisan_2 = {
  maas: 2000,
  fazlaMesai: 20,
  fazlaMesaiUcreti: 15,
  maasHesapla: function () {
    return this.maas + this.fazlaMesai * this.fazlaMesaiUcreti;
  },
};

console.log(calisan_1.maasHesapla());
