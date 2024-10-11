//no 1 dasar
// let n = parseInt(prompt("Masukkan nilai n (n >= 1):"));
// let i = 1;

// if (n >= 1) {
//     while (i <= n) {
//         console.log(i);
//         i++;
//     }
// } else {
//     console.log("Masukkan nilai n yang valid (n >= 1).");
// }


//no 2 dasar
// let awal = parseInt(prompt("Masukkan batas awal (bilangan > 0):"));
// let akhir = parseInt(prompt("Masukkan batas akhir (bilangan > 0):"));

// if (awal > 0 && akhir > 0 && awal <= akhir) {
//     let i = awal;
//     while (i <= akhir) {
//       console.log(i);
//         i++;
//     }
// } else {
//   console.log("Masukkan nilai batas awal dan batas akhir yang valid (batas awal < batas akhir dan bilangan > 0)");
// }

// //no 3 dasar
// let awal = parseInt(prompt("Masukkan batas awal:"));
// let akhir = parseInt(prompt("Masukkan batas akhir:"));

// if (awal <= akhir) {
//     let i = awal;

//     if (i % 2 === 0) {
//         i++;
//     }

//     while (i <= akhir) {
//         console.log(i);
//         i += 2;
//     }
// } else {
//     console.log("Masukkan batas awal yang lebih kecil daripada batas akhir.");
// }

//no 4 dasar
// let awal = parseInt(prompt("Masukkan batas awal:"));
// let akhir = parseInt(prompt("Masukkan batas akhir:"));

// if (awal <= akhir) {
//     let i = awal;

//     if (i % 5 !== 0) {
//         i += (5 - (i % 5));
//     }

//     while (i <= akhir) {
//         console.log(i);
//         i += 5;
//     }
// } else {
//     console.log("Masukkan batas awal yang lebih kecil daripada batas akhir.");
// }

// //no 5 menengah
// let awal = parseInt(prompt("Masukkan batas awal:"));
// let akhir = parseInt(prompt("Masukkan batas akhir:"));

// if (awal <= akhir) {
//     let i = awal;
//     let count = 0;

//     if (i % 2 === 0) {
//         i++;
//     }
//     while (i <= akhir) {
//         count++;
//         i += 2; 
//     }

//     console.log("Banyaknya bilangan ganjil: " + count);
// } else {
//     console.log("Masukkan batas awal yang lebih kecil daripada batas akhir.");
// }

//no 6 menengah
let awal = parseInt(prompt("Masukkan batas awal:"));
let akhir = parseInt(prompt("Masukkan batas akhir:"));

if (awal <= akhir) {
    let i = awal;
    let sum = 0;

    if (i % 2 === 0) {
        i++;
    }

    while (i <= akhir) {
        sum += i; 
        i += 2;  
    }

    console.log("Jumlah deret bilangan ganjil: " + sum);
} else {
    console.log("Masukkan batas awal yang lebih kecil daripada batas akhir.");
}

