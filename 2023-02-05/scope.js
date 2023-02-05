// Global scope

a = 1;
let b = 2;
const c = 3;


function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function scope: ', a, b, c);
}

test();

// Block scope
if (true) {
    let a = 10;
    let b = 20;
    const c = 30;
    console.log('If scope: ', a, b, c);
}


console.log('Global scope: ', a, b, c);

