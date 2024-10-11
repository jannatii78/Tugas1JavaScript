let operator = prompt("Pilih operator hitung (+, -, *, /): ");
let a = Number(prompt("bilangan pertama:"));
let b = Number(prompt("bilangan kedua:"));

let hasil;

if (operator === '+') {
    hasil = a + b;
} else if (operator === '-') {
    hasil = a - b;
} else if (operator === '*') {
    hasil = a * b;
} else if (operator === '/') {
    if (b !== 0) {
        hasil = a / b;
    } else {
        alert("pembagian dengan nol tidak diperbolehkan.");
        hasil = null;
    }
} else {
    alert("operator tidak valid.");
    hasil = null;
}

if (hasil !== null) {
    alert(`Hasil = ${hasil}`);
}
