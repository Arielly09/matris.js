const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let maiorElemento = matriz[0][0];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maiorElemento) {
            maiorElemento = matriz[i][j];
        }
    }
}

console.log("Maior elemento:", maiorElemento);
