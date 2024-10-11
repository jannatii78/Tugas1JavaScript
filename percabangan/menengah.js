//no 1
// let a = prompt("Masukkan bilangan pertama (a):");
// let b = prompt("Masukkan bilangan kedua (b):");
// let hasil = Math.max(a, b);
// alert(`bilangan terbesar dari ${a} dan ${b} adalah ${hasil}`);

//no 2
// let a = Number(prompt("Masukkan nilai a: "))
// let b = Number(prompt("Masukkan nilai b: "))
// let c = Number(prompt("Masukkan nilai c: "))

// D = b**2 - 4*a*c

// if (D > 0) {
//     alert(`Persamaan memiliki dua akar real yang berbeda.`)
// } else if (D == 0) {
//     alert(`Persamaan memiliki dua akar real yang sama (kembar).`)
// } else {
//     alert(`Persamaan memiliki dua akar imajiner.`)
// }

//no 3
// let uts = Number(prompt("Masukkan nilai UTS: "));
// let uas = Number(prompt("Masukkan nilai UAS: "));
// let tugas = Number(prompt("Masukkan nilai Tugas: "));
// let NA = (uts * 0.35) + (uas * 0.45) + (tugas * 0.20);
// let grade;

// if (NA >= 80 && NA <= 100) {
//     grade = 'A';
// } else if (NA >= 70 && NA < 80) {
//     grade = 'B';
// } else if (NA >= 50 && NA < 70) {
//     grade = 'C';
// } else if (NA >= 40 && NA < 50) {
//     grade = 'D';
// } else {
//     grade = 'E';
// }
// alert(`Nilai Akhir: ${NA.toFixed(2)}, Indeks Nilai: ${grade}`);

// no 4
// let x = prompt("Masukkan bilangan pertama (x):");
// let y = prompt("Masukkan bilangan kedua (y):");
// let z= prompt("Masukkan bilangan kedua (z):");
// let hasil = Math.max(x, y, z);
// alert(`bilangan terbesar diantara ${x} dan ${y} dan ${z} adalah ${hasil}`);

//no 5
// let x = Number(prompt("Masukkan nilai x: "));
// let y = Number(prompt("Masukkan nilai y: "));
// let kuadran;

// if (x > 0 && y > 0) {
//     kuadran = "Kuadran I";
// } else if (x < 0 && y > 0) {
//     kuadran = "Kuadran II";
// } else if (x < 0 && y < 0) {
//     kuadran = "Kuadran III";
// } else if (x > 0 && y < 0) {
//     kuadran = "Kuadran IV";
// } else if (x == 0 && y == 0) {
//     kuadran = "Titik Pusat";
// } else if (x == 0) {
//     kuadran = "Pada Sumbu Y";
// } else if (y == 0) {
//     kuadran = "Pada Sumbu X";
// }
// alert(`Titik (${x}, ${y}) berada di ${kuadran}`);

//no 6
let tanggal = Number(prompt("Masukkan tanggal (1-31): "));
let bulan = Number(prompt("Masukkan bulan (1-12): "));
let hariDalamBulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (bulan < 1 || bulan > 12 || tanggal < 1 || tanggal > hariDalamBulan[bulan - 1]) {
    alert("Tanggal atau bulan yang dimasukkan tidak valid.");
} else {
    let hariKe = 0;
    for (let i = 0; i < bulan - 1; i++) {
        hariKe += hariDalamBulan[i];
    }
    hariKe += tanggal;
    alert(`Hari ke-${hariKe} dalam tahun ini.`);
}
