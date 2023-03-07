// membuat function menghitung umur
// dibuat menggunakan cara function Declaration

// @param(integer) bod (tanggal lahir)
// @returns(integer) age (umur)

function getAge(bod){
    const year = 2023;
    const age = 2023 - bod;

    return age;
}

// Memanggil function getAge
console.log(getAge(2003));
console.log(getAge(2001));