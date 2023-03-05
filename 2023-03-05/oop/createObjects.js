// Create Objects

//örnek object

const circle = {
  radius: 5,
  location: {
    x: 1,
    y: 2,
  },
  name: "circle",
  // method
  ciz: function () {
    console.log("daire cizildi");
  },
};

const circle_2 = {
  radius: 5,
  location: {
    x: 1,
    y: 2,
  },
  name: "circle",
  // method
  ciz: function () {
    console.log("daire cizildi");
  },
};

// console.log(circle);
// console.log(circle_2);

// factory pattern
const createCircle = function (paramRadius) {
  return {
    radius: paramRadius,
    ciz: function () {
      console.log("cizildi");
    },
  };
};

const birinciObject = createCircle(5);
const ikinciObject = createCircle(5);
const ucuncuObject = createCircle(5);

// constructor pattern
function Circle(paramRadius) {
  this.radius = paramRadius;
  this.ciz = function () {
    console.log("daire cizildi");
  };
}

const circle_3 = new Circle(3);

console.log(circle_3);

circle_3.origin = 0;
console.log(circle_3);

circle_3["base-origin"] = 4;

console.log(circle_3["base-origin"]);
