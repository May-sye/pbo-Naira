const sik = {
    kelas: "b" ,
    angkatan: "23" ,
    walidosen: "naira" ,

}

console.log (sik.kelas);
console.log (sik.angkatan);
console.log (sik.walidosen);

const siKel = {}

siKel.atribut1 = "contoh atribut 1";
siKel.atribut2 = "contoh atribut 2";

let orang= {
    nama : "naira", 
    pekerjaan : "wiraswasta",
    kendaraan : {
        mobil : "civic",
        motor : "pcx", 
    }
}

console.log(orang.kendaraan.mobil)
orang.kendaraan.mobil = "bmw"
console.log(orang.kendaraan.mobil)

let tampil = "nama saya" + orang.nama + "saya bekerja sebagai" + orang.pekerjaan + "sehari-hari saya menggunakan civic" +orang.civic
//document.getElementById("objek").innerHTML = tampil

let mahasiswa= {
    namaDepan : "naira",
    namaBelakang : "maisye",
    namaLengkap : function (){
        return this.namaDepan + " " + this.namaBelakang
    }
}
let tampilMhs = "nama saya " + mahasiswa.namaDepan + ", nama lengkap saya " + mahasiswa.namaLengkap()
document.getElementById("objek").innerHTML = tampilMhs

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK("naira", "B", 2023);
const mhs2 = new mahasiswaSIK("jiwon", "B", 2023);
const mhs3 = new mahasiswaSIK("kiya", "B", 2023);

console.log("nama mahasiswa pertama adalah " + mhs1.nama);
console.log("nama mahasiswa kedua adalah " + mhs2.nama);
console.log("nama mahasiswa ketiga adalah " + mhs3.nama);
