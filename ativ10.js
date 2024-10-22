const matriz = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

const n = matriz.length;
let simetrica = true;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (matriz[i][j] !== matriz[j][i]) {
            simetrica = false;
            break;
        }
    }
    if (!simetrica) break;
}

if (simetrica) {
    console.log("A matriz é simétrica.");
} else {
    console.log("A matriz não é simétrica.");
}
