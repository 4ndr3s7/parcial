function numerosMayoresQueCinco(array) {
    let numerosMayores = array.filter(numero => numero > 5);
    return numerosMayores;
}

let numeros = [2, 6, 8, 3, 10, 4, 7];
let numerosMayores = numerosMayoresQueCinco(numeros);

console.log(numerosMayores);
