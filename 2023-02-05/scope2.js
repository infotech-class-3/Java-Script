// block in a function

function anotherTest() {    
    var x = 1;
    let y = 2;
    const z = 3;
    console.log('Function scope: ', x, y, z);
    if (true){
        var x = 4;
        let y = 5;
        const z = 6;
        console.log('Block scope: ', x, y, z);
    }
    console.log('Function2 scope: ', x, y, z);
}

anotherTest();