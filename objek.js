//Deklarasi Object
const karakter = {
    nama: "ichabela",
    level: 16,
    hp: 100,
    senjata: "pistol"
};
//output dot notation
console.log(karakter.nama);
console.log(karakter.level);
console.log(karakter.hp);
console.log(karakter.senjata);
//output bracket notation
console.log(karakter['nama']);
console.log(karakter['level']);
console.log(karakter['hp']);
console.log(karakter['senjata']);
//templete literal
console.log(`nama karakter ini adalah ${karakter.nama}, levelnya adalah ${karakter.level}, darahnya adalah ${karakter.hp} dan senjatanya adalah ${karakter.senjata}.;`)