// Membuat if else dasar
const age = 21;

if (age > 21){
    console.log("Dewasa");
}
else{
    console.log("Belum Dewasa");
}

// Ternary operator digunakan untuk membuat if else lebih singkat
age > 21 ? console.log("Dewasa") :console.log("Belum dewasa");

// Ternary operator dapat digunakan untuk menyimpan nilai ke variable.
const status = age > 21 ? "Dewasa" : "Belum Dewasa";
console.log(status);