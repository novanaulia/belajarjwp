/* ALERT */
//alert("Hai, yuk belajar java");

/* MENGGUNAKAN VARIABEL */
let nama_depan = "novan";
let nama_belakang = "aulia";

let nama_lengkap = `${nama_depan} ${nama_belakang}`;

document.write("Menggabung variabel:<p>");
document.write(nama_lengkap);

/* OPERASI BILANGAN */

let barang = 80;
let jumlah = 2;
let total = barang * jumlah;

document.write("<br><br><p>Operasi Bilangan:</p>");
document.write("Total Barang : " + total);

/* KONSTANTA */
const phi = 3.14;

document.write("<br><br><p>Variabel konstanta = " + phi);

/* KONDISIONAL */
document.write("<br><br><p>Percabangan:<p> nama = novan<p>");

let nama = "novan";
if (nama == "novan") {
  document.write("Benar kamu novan, boleh masuk");
} else {
  document.write("kamu gak boleh masuk");
}

/* LOOPING */
document.write("<br><br><p>LOOPING for i <p>");
for (let i = 0; i <= 10; i++) {
  document.write(i + "<br>");
}

document.write("<br><br><p>LOOPING while <p>");

let b = 100;
while (b <= 120) {
  document.write(b + "<br>");
  b++;
}

/* FUNCTION */
document.write("<br><br><p>Membuat Fungsi Greeting <p>");

function greeting() {
  if (nama_depan == "novan") {
    document.write("benar nama kamu " + nama_depan);
  } else {
    document.write("salah ini bukan kamu");
  }
}
greeting();

document.write("<br><br><p>Membuat Fungsi Login <p>");

function login(username, password) {
  if (username && password) {
    document.write("Selamat datang user Anda " + username + " dengan password " + password);
    //document.write("Selamat datang Anda sudah masuk");
  } else if (username || password) {
    document.write("user password salah");
  } else {
    document.write("belum login.");
  }
}

let username = "rendang";
let password = "teh";

login(username, password);

document.write("<br><br><p>Membuat Fungsi Segitiga <p>");

function luas_segitiga(a, t) {
  luas = (1 / 2) * (a, t);
  document.write("<p>Luas segitiga adalah : " + luas + "</p>");
}

let a = 10;
let t = 20;
luas_segitiga(a, t);

/* STRUKTUR DATA */

document.write("<br><br><p>Mengambil nilai Array<p>");

let buah = ["Apple", "Orange", "Plum"];
document.write(buah[2]);
