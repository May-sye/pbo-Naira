class SensorPasut {
   constructor (nama, lokasi){
    this.nama = nama,
    this.lokasi = lokasi
    this._status = "Mati";
   }


aktifkan(){
    this._status = "aktif";
    `return Sensor ${this.nama} di ${this.lokasi} telah diaktifkan`;
}

nonaktifkan(){
    this._status = "Mati";
    `return Sensor ${this.nama} di ${this.lokasi} telah dinonaktifkan`;
}

getStatus(){
    return `Status sensor ${this.nama} adalah ${this._status}`;
}
}

class UsiaSensor extends SensorPasut{
    
}


let SensorPasutMerak = new SensorPasut("Selat sunda", "Merak")
console.log(SensorPasutMerak.aktifkan())
console.log(SensorPasutMerak.nonaktifkan())
console.log(SensorPasutMerak.getStatus())

