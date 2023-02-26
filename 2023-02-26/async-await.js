const data = [];
const durum = true;

const dataLoader = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                {
                  id: "88f24bea-3825-4237-a0d1-efb6b92d37a4",
                  firstName: "Sam",
                  lastName: "Hughes",
                },
                {
                  id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
                  firstName: "Terri",
                  lastName: "Bishop",
                }];
                data.push(users);
                if(durum){
                    resolve();
                }else {
                    reject("Hata var.. Data yüklenemedi..!!")
                }
        }, 3000);
    });
};

const dataPrinter = () => {
    setTimeout(() => {
        data.forEach(i => console.log(i))
    }, 2000);
};
async function islemAkisi() {
    await dataLoader();
    dataPrinter();
}

islemAkisi();