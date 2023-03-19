function Kronometre() {
  let startTime = 0;
  let endTime = 0;
  let duration = 0;
  let isRunning = false;

  this.basla = function () {
    if (isRunning) {
      throw new Error("Zaten calisiyor...");
    } else {
      isRunning = true;
      startTime = new Date();
    }
  };

  this.dur = function () {
    if (!isRunning) throw new Error("Daha calismadi ki dursun..."); // early error pattern

    isRunning = false;
    endTime = new Date();

    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.sifirla = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
    isRunning = false;
  };

  Object.defineProperty(this, "sonuc", {
    get: function () {
      return duration + " sn";
    },
  });
}

const kron = new Kronometre();
