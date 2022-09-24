"use strict";
function soalNomor3() {
    console.log('Decorator sebelum class');
}
function f() {
    console.log("f(): evaluated");
}
class Perkenalan {
    constructor(id, nama, status) {
        this.id = id;
        this.nama = nama;
        this.status = status;
    }
    displayData() {
        console.log(`ID : ${this.id}`);
        console.log(`Nama : ${this.nama}`);
        console.log(`Status : ${this.status}`);
    }
    tampilData() {
        return this.displayData();
    }
    myArray(data) {
        const result = data;
        return result;
    }
}
let showData = new Perkenalan(1, 'Yansen', true);
showData.tampilData();
let data = [1, 2, 3];
console.log(showData.myArray(data));
