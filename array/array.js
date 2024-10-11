// //no 1
// let nilai = [75, 81, 73, 80, 89];
// let rataRata = hitung(nilai);
// function hitung(nilai) {
//     let total = 0;
//     for (let i = 0; i < nilai.length; i++) {
//         total += nilai[i];
//     }
//     return total / nilai.length;
// }
// alert(`Nilai rata-rata dari ${nilai} adalah ${rataRata}`);

//no 2
// let nilai = [75, 81, 73, 90, 89];
// let angkaUrut = urut(nilai);
// function urut(nilai) {
//     return nilai.sort(function(a, b) {
//         return a - b;
//     });
// }
// alert(`Nilai urut: ${angkaUrut}`);

//no 3
// let nilai = [75, 81, 73, 95, 85];
// let besar = angkaTerbesar(nilai);
// function angkaTerbesar(nilai) {
//     return Math.max(...nilai);
// }
// alert(`angka terbesar dari ${nilai} adalah ${besar} `);

//no 4
let n = 10;
let hasilFibonacci = deretFibonacci(n);
function deretFibonacci(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n);
}
alert(`Deret Fibonacci: ${hasilFibonacci.join(", ")}`);
