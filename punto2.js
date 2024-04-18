
function numeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        return num2 + " es mayor que " + num1;
    } else {
        return "Los números son iguales";
    }
}


var numero1 = 10;
var numero2 = 5;
console.log(numeroMayor(numero1, numero2));