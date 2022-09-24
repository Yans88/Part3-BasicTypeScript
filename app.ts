interface Data {
    id: number;
    nama: string;
    status: boolean;
}

function soalNomor3(){
    console.log('Decorator sebelum class');
}

function f() {
    console.log("f(): evaluated");
}

class Perkenalan implements Data {

    id: number;
    nama: string;
    status: boolean;

    constructor(id: number, nama: string, status: boolean) {
        this.id = id;
        this.nama = nama;
        this.status = status;
    }

    private displayData(): void {
        console.log(`ID : ${this.id}`);
        console.log(`Nama : ${this.nama}`);
        console.log(`Status : ${this.status}`);
    }

    tampilData(): void {
        return this.displayData();
    }

    myArray(data: number[]): number[] {
        const result = data;
        return result;
    }
}

let showData = new Perkenalan(1, 'Yansen', true);
showData.tampilData();

let data = [1,2,3];
console.log(showData.myArray(data));