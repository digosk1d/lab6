// Función que calcula el factorial de un número (corregido)
function factorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) { // Corrección: i <= n
        result *= i;
    }
    return result;
}