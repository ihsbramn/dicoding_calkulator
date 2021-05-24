// console.log('JS Connected');

// console.log("Selamat anda berhasil menggunakan JS pada website")

// let wakwaw = "anjaykeun weh";

// console.log(typeof(wakwaw));

// alert (wakwaw);


// let x = 5;
// let y = 10;

// console.log(x + y);
// console.log(x / y);
// console.log(x * y);
// console.log(x - y);
// console.log(y % x);

// console.log(x++);
// console.log(++x);


// let a = true;
// let b = false;

// console.log(typeof(a));
// console.log(typeof(b));

// let c = null;

// console.log(c);

// let contoharray = [

//     "kalcer",
//     42,
//     22,
//     true,
//     "niks niks"

// ];

// console.log(contoharray);
// console.log(contoharray[4]);

// console.log("panjang nya adalah " + contoharray.length);

// let ikhsan = {
//     namadepan: "Ikhsan",
//     namabelakang: "Abdurachman",
//     umur: "20"
// };

// console.log("halo saya " + ikhsan.namadepan + " umur saya" +ikhsan.umur);

// for(let i = 0; i < contoharray.length; i++) {
//     console.log(contoharray[i]);
// }

// let lang = "sunda";
// let greet = "gaskeun!"

// if (lang == "sunda"){
//     console.log(greet);
// }
// else{
// console.log("jancook");
// };

// for(arrayItem of contoharray){
//     console.log(arrayItem);
// }

// function HelloWorld(name, language){
//     if(language === "English") {
//         console.log("Good Morning " + name + "!");
//     } else if (language === "French") {
//         console.log("Bonjour " + name + "!");
//     } else {
//         console.log("Selamat Pagi " + name + "!");
//     }
// }

// let HelloWorldMessage = HelloWorld("Maskumambang","Indonesia");
// console.log(HelloWorldMessage);

// function kali(a, b){
//     return a * b;
// }

// let result = kali(20,5);
// console.log(result);

console.log("history.js");

const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return typeof(Storage) !== "undefined";
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
    
        historyData.unshift(data);
    
        if (historyData.length > 5) {
            historyData.pop();
        }
    
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
}

    function showHistory() {
    if (checkForStorage) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";
    
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
    
        historyList.appendChild(row);
    }
}

renderHistory();