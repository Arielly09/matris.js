const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposta = [];

for (let i = 0; i < matriz[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
    }
}

console.log("Matriz transposta:", transposta);

