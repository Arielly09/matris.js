const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaDiagonalSecundaria = 0;
const n = matriz.length;

for (let i = 0; i < n; i++) {
    somaDiagonalSecundaria += matriz[i][n - 1 - i];
}

console.log("Soma da diagonal secundária:", somaDiagonalSecundaria);
