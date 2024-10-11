const angka = Number(prompt("Masukkan sebuah angka:"));
function bilanganPrima(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}
if (bilanganPrima(angka)) {
    alert(`${angka} adalah bilangan prima.`);
} else {
    alert(`${angka} bukan bilangan prima.`);
}
