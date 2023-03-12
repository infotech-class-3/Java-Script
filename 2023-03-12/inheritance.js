// Inheritance

class Tasit {
  constructor(marka, model, yil) {
    this.marka = marka;
    this.modeli = model;
    this.yil = yil;
  }

  calistir = function () {
    console.log("tasit calisti");
  };

  bilgiVer = function () {
    console.log(`Bu tasit bir ${this.marka} dir`);
  };
}

class Motosiklet extends Tasit {
  constructor(marka, model, yil, km) {
    super(marka, model, yil);
    this.km = km;
  }
}
// class Otomobil extends Tasit {
//   constructor(marka, model, yil, km) {
//     super(marka, model, yil);
//     this.km = km;
//   }
// }
// class IsMakinesi extends Tasit {
//   constructor(marka, model, yil, km) {
//     super(marka, model, yil);
//     this.km = km;
//   }
// }

// const tasit_1 = new Tasit("audi", "a4", "2015"); // {}

const motosiklet_1 = new Motosiklet("honda", "cross", "2001", 34500);

motosiklet_1.bilgiVer();
