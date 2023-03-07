const user = {
    nama : "Cahyo",
    umur : 19,
    JenisKelamin : "Pria",
};

for(const key in user){
    console.log(`${key}:${user[key]}`);
}