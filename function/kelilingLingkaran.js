let keliling;
const jari = Number(prompt("Masukkan nilai jari-jari lingkaran:"));

function hitungKelilingLingkaran(r) {
    let phi;
    if (r == 7) {
        phi = 22 / 7;
    } else {
        phi = 3.14;
    }
    const keliling = 2 * phi * r;
    alert(`Keliling lingkaran adalah 2 x ${phi} x ${r} = ${keliling}`);
}

hitungKelilingLingkaran(jari);
