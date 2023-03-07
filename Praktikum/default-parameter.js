// membuat function menghitung umur
// dibuat menggunakan cara function Declaration

// @param(integer) bod (tanggal lahir)
// @returns(integer) age (umur)

const getAge = (bod = 1999) =>{
    const year = 2023;
    const age = year - bod;

    return age;
}

console.log(getAge());
console.log(getAge(2003));