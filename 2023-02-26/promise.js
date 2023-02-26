// const todos = [
//     { title: "todo1", description: "konu tekrarı yapılacak" },
//     { title: "todo2", description: "alıştırmalar çözülecek" },
//     { title: "todo3", description: "ödev yapılacak" },
//   ];

//   function todoList() {
//     setTimeout(() => {
//         todos.forEach((item) => {
//             console.log(item);
//         })
//     }, 2000);
// }

// function newTodo(todo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         todos.push(todo);
//         const eror = true;
//         if(!eror) {
//             resolve();
//         }else {
//             reject("Hata var");
//         }
//     }, 3000);
//     });  
// }

// newTodo({
//     title : "todo4",
//     description : "yeni todo"
// })
//     .then(() => {
//         todoList();
// })
//     .catch((e) => console.log(e))

//------------------------------------------

const loginOldu_mu = true;

const promise_1 = () => {
    const result = new Promise((resolve, reject) => {
        if (loginOldu_mu) {
            resolve("login başarili.");
        } else {
            reject("login başarisiz..!!");
        }
    });
    return result;
}

const makalesiVarmi = false;

const promise_2 = () => {
    const result = new Promise((resolve, reject) => {
        if (makalesiVarmi) {
            resolve("Makalesi var..");
        } else {
            reject("Makalesi yok.. !!");
        }
    });
    return result;
}


promise_1()
    .then((sonuc) => {
        console.log(sonuc);
        promise_2()
            .then((sonuc) => console.log(sonuc))
            .catch((error) => console.log(error))
    })
    .catch((error) => {
        console.log(error);
    })