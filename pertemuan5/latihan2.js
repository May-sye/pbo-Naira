class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;''
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}`;
    }
}

class KapalPesiar extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, fasilitas) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return `Kapal pesiar ${this.nama} memiliki fasilitas mewah seperti ${this.fasilitas.join(", ")}.`;
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

class TiketVIP extends Tiket {
    constructor(tanggal, kabin, fasilitasVIP) {
        super(tanggal, 'VIP', kabin);
        this.fasilitasVIP = fasilitasVIP;
    }

    infoTiket() {
        return `${super.infoTiket()} (Tiket VIP) dengan fasilitas: ${this.fasilitasVIP.join(", ")}`;
    }
}

class TiketReguler extends Tiket {
    constructor(tanggal, kabin, hargaDiskon) {
        super(tanggal, 'Reguler', kabin);
        this.hargaDiskon = hargaDiskon;
    }

    infoTiket() {
        return `${super.infoTiket()} (Tiket Reguler) dengan harga diskon: ${this.hargaDiskon}`;
    }
}

class Penumpang {
    constructor(nama, umur, noTelp) {
        this.nama = nama;
        this.umur = umur;
        this.noTelp = noTelp;
    }

    infoPenumpang() {
        return `Nama penumpang ${this.nama} usia ${this.umur} nomor telepon ${this.noTelp}`;
    }
}

class PenumpangVIP extends Penumpang {
    constructor(nama, umur, noTelp, fasilitasVIP) {
        super(nama, umur, noTelp);
        this.fasilitasVIP = fasilitasVIP;
    }

    infoPenumpang() {
        return `${super.infoPenumpang()} (Penumpang VIP) dengan fasilitas: ${this.fasilitasVIP.join(", ")}`;
    }
}

class PenumpangReguler extends Penumpang {
    constructor(nama, umur, noTelp, tiketDiskon) {
        super(nama, umur, noTelp);
        this.tiketDiskon = tiketDiskon;
    }

    infoPenumpang() {
        return `${super.infoPenumpang()} (Penumpang Reguler) dengan diskon tiket: ${this.tiketDiskon}%`;
    }
}

class Pelayaran {
    constructor(kapal, pelabuhanAsal, pelabuhanTujuan, tanggalBerangkat, tanggalTiba) {
        this.kapal = kapal;
        this.pelabuhanAsal = pelabuhanAsal;
        this.pelabuhanTujuan = pelabuhanTujuan;
        this.tanggalBerangkat = tanggalBerangkat;
        this.tanggalTiba = tanggalTiba;
        this.status = "berlayar";
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
let tiketVIP = new TiketVIP("20-09-2024", 30, ["Lounge Eksklusif", "Makan Gratis"]);
let tiketReguler = new TiketReguler("20-09-2024", 120, 50);
let penumpangVIP = new PenumpangVIP("Naira", 25, "6299", ["Lounge Eksklusif", "Makan Gratis"]);
let penumpangReguler = new PenumpangReguler("Budi", 30, "9876", 10);
let pelayaran1 = new Pelayaran(kapal, "Jakarta", "Bali", "20-09-2024", "22-09-2024");

console.log(kapal.infoKapal());
console.log(tiketVIP.infoTiket());
console.log(tiketReguler.infoTiket());
console.log(penumpangVIP.infoPenumpang());
console.log(penumpangReguler.infoPenumpang());
console.log(pelayaran1.infoPelayaran());


document.getElementById("kapal-info").innerHTML = kapal.infoKapal();
document.getElementById("tiket-info").innerHTML = tiketVIP.infoTiket(); 
document.getElementById("penumpang-info").innerHTML = penumpangVIP.infoPenumpang(); 
document.getElementById("pelayaran-info").innerHTML = pelayaran1.infoPelayaran();
