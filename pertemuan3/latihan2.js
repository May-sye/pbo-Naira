class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}`;
    }
}

class Tiket {
    constructor(tanggal, kelas, kabin) {
        this.tanggal = tanggal;
        this.kelas = kelas;
        this.kabin = kabin;
    }

    infoTiket() {
        return `Tiket ini untuk keberangkatan pada ${this.tanggal} dengan kelas ${this.kelas} dengan nomor kabin ${this.kabin}`;
    }
}

class Pelayaran {
    constructor(kapal, pelabuhanAsal, pelabuhanTujuan, tanggalBerangkat, tanggalTiba) {
        this.kapal = kapal;
        this.pelabuhanAsal = pelabuhanAsal;
        this.pelabuhanTujuan = pelabuhanTujuan;
        this.tanggalBerangkat = tanggalBerangkat;
        this.tanggalTiba = tanggalTiba;
        this.status = "berlayar"; // Status awal: berlayar
    }

    infoPelayaran() {
        return `Kapal ${this.kapal.nama} berlayar dari ${this.pelabuhanAsal} menuju ${this.pelabuhanTujuan} pada tanggal ${this.tanggalBerangkat} dan dijadwalkan tiba pada ${this.tanggalTiba}. Status saat ini: ${this.status}`;
    }

    sandar() {
        this.status = "sandar";
        console.log(`Kapal ${this.kapal.nama} telah sandar di ${this.pelabuhanTujuan}`);
    }

    berlayar() {
        this.status = "berlayar";
        console.log(`Kapal ${this.kapal.nama} sedang berlayar menuju ${this.pelabuhanTujuan}`);
    }
}

let kapal = new Kapal("Budionosiregar", "Ferry", 500, 200, 100);
let tiket = new Tiket("20-09-2024", "VIP", 30);
let pelayaran1 = new Pelayaran(kapal, "Jakarta", "Bali", "20-09-2024", "22-09-2024");

console.log(pelayaran1.infoPelayaran());
console.log(tiket.infoTiket());

document.getElementById("pelayaran-info").innerHTML = pelayaran1.infoPelayaran();
document.getElementById("tiket-info").innerHTML = tiket.infoTiket();
