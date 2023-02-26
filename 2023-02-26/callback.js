// const topla = (num1 , num2) => {
//     return num1 + num2;
// }

// const displayer = (islem) => {
//     setTimeout(() => {
//         console.log(islem);
//     }, 2000)
// }

// displayer(topla(4,6));


//-------------------------------------

// function login(callBack) {
//     setTimeout(() => {
//         console.log("login başarili");
//         callBack();
//     }, 2000);
// }

// function listele() {
//     setTimeout(() => {
//         console.log("ilanlar listelendi");
//     }, 1000);
// }

// login(listele);

//--------------------------------------

// function adYaz(ad, callBack) {
//     setTimeout(() => {
//         console.log(ad);
//         callBack();
//     }, 2000);
// }

// function soyad() {
//     setTimeout(() => {
//         console.log("Kibar");
//     }, 1000);
// }

// adYaz("Ahmet" , soyad);

//----------------------------------------

const todos = [
    { title: "todo1", description: "konu tekrarı yapılacak" },
    { title: "todo2", description: "alıştırmalar çözülecek" },
    { title: "todo3", description: "ödev yapılacak" },
  ];

function todoList() {
    setTimeout(() => {
        todos.forEach((item) => {
            console.log(item);
        })
    }, 2000);
}

function newTodo(todo , callBack) {
    setTimeout(() => {
        todos.push(todo);
        callBack();
    }, 3000);
}

newTodo({
    title : "todo4",
    description : "yeni todo"
}, todoList)
