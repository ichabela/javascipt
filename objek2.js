//deklarasi object
const karakter = {
    nama: "ichabela nadia wahyu sabrina",
    kelas: "x rpl 3",
    hobi: "membaca dan memasak",
    citacita: "guru"
};
//output dot notation
console.log(karakter.nama);
console.log(karakter.kelas);
console.log(karakter.hobi);
console.log(karakter.citacita);
//output bracket notation
console.log(karakter[`nama`]);
console.log(karakter[`kelas`]);
console.log(karakter[`hobi`]);
console.log(karakter[`citacita`]);
//template literal
console.log(`nama saya adalah ${karakter.nama}, sekarang saya kelas ${karakter.kelas}, hobi saya adalah ${karakter.hobi} dan cita-cita saya adalah ${karakter.citacita}.;`)