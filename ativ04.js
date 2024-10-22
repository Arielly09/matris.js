const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, -8, 9]
];

let todosPositivos = true;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < 0) {
            todosPositivos = false;
            break;
        }
    }
    if (!todosPositivos) break;
}

if (todosPositivos) {
    console.log("Todos os números são positivos.");
} else {
    console.log("Nem todos os números são positivos.");
}
