// membuat function menghitung umur
// dibuat menggunakan cara function Expression

// @param(integer) bod (tanggal lahir)
// @returns(integer) age (umur)

const getAge = function(bod){
    const year = 2023;
    const age = year - bod

    return age;
}

// memamnggil function getAge
console.log(getAge(2003));
console.log(getAge(1999));
