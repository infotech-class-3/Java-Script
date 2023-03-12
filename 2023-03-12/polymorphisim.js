// Polymorphism

class Bildirim {
  yap = (gelenClass) => {
    console.log("-----------");
    gelenClass.gonder();
    console.log("bildirim yapildi");
    console.log("-----------");
  };
}

class Mesaj {
  constructor(paramMesaj) {
    this.mesaj = paramMesaj;
  }
  gonder = () => {
    console.log(`Bu bir ${this.mesaj} dir.`);
  };
}

class Eposta extends Mesaj {
  constructor(paramMesaj) {
    super(paramMesaj);
  }
}

class SMS extends Mesaj {
  constructor(paramMesaj) {
    super(paramMesaj);
  }
}

const click = () => {
  const bildirim = new Bildirim();
  const eposta = new Eposta("eposta mesaji");
  bildirim.yap(eposta);
};

click();

// SOLID Prensipleri

// Dependency Inversion
