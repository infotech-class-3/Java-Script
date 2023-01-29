// var a = 1;

// if (a==1) {
//     console.log("eşit");
// }else {
//     console.log("eşit değil");
// }

// var havaDurumu = "güneşli";

// if (havaDurumu == "bulutlu") {
//     console.log("hava bulutlu");

// }else if(havaDurumu == "güneşli") {

//     console.log("güneşli");

// }else {
//     console.log("havaDurumunu bilmiyorum");
// }


//switch

var day;

switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Sali";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    default:
        // hiçbir şarta uymuyorsa bu blok çalışacak
        break;
}

console.log("Bugün : " + day);