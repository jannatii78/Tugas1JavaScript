let hasil;
const operator = prompt("Pilih operator hitung (+, -, *, /): ");
const a = Number(prompt("Bilangan pertama:"));
const b = Number(prompt("Bilangan kedua:"));

function tambah (a,b) {
    hasil = a + b;
    alert(`${a} + ${b} = ${hasil}`)
}
function kurang (a,b) {
    hasil = a - b;
    alert(`${a} - ${b} = ${hasil}`)
}
function kalih (a,b) {
    hasil = a * b;
    alert(`${a} x ${b} = ${hasil}`)
}
function bagi (a,b) {
    hasil = a / b;
    alert(`${a} : ${b} = ${hasil}`)
}

if (operator === '+') {
  tambah(a,b); 
} else if (operator === '-') {
  kurang (a,b);
} else if (operator === '*') {
    kalih (a,b);
} else if (operator === '/') {
    if (b !== 0) {
        bagi (a,b);
    } else {
        alert("Pembagian dengan nol tidak diperbolehkan.");
        hasil = null;
    }
} else {
    alert("Operator tidak valid.");
    hasil = null;
}

