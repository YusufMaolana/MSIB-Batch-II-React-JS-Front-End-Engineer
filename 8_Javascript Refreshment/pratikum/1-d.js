var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

// No 4
function perkenalan() {
    let asal = "Indonesia";
    return console.log(
        "Perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + "terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

// console.log("asal diakses = " + asal);

console.log ("array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();