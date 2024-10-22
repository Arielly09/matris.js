const matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const resultado = [];
const linhasA = matrizA.length;
const colunasB = matrizB[0].length;

for (let i = 0; i < linhasA; i++) {
    resultado[i] = [];
    for (let j = 0; j < colunasB; j++) {
        resultado[i][j] = 0;
        for (let k = 0; k < matrizA[0].length; k++) {
            resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
    }
}

