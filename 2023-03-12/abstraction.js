// Abstraction

function DvdPlayer(brand) {
  this.marka = brand;
  let powerSupply = {
    input: "220V",
    output: "5V",
  };

  this.play = function () {
    console.log(`dvd calisiyor giris voltaji ${powerSupply.input}`);
  };

  // this.getPowerSupllyInfo = function () {
  //   return console.log(powerSupply);
  // };

  Object.defineProperty(this, "getPowerSupllyInfo", {
    get: function () {
      return powerSupply;
      // computed property
    },
    set: function (yeniDeger) {
      if (!yeniDeger.input || !yeniDeger.output) {
        console.error("Hayirdir ne yapmaya calisiyorsun");
        return;
      }
      powerSupply = yeniDeger;
    },
  });
}

const dvd = new DvdPlayer("sony"); // {}

dvd.getPowerSupllyInfo = {
  input: "220V",
  output: "12V",
};

// dvd.getPowerSupllyInfo = "hackledim";

// dvd.getPowerSupllyInfo();

// dvd.powerSupply = {
//   input: "10000V",
//   output: "40V",
// };
// dvd.marka = "philips";

// dvd.play();
