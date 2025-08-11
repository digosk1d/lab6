// Función que calcula el factorial de un número (con error intencional)
function factorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i < n; i++) { // Error: i < n en lugar de i <= n
        result *= i;
    }
    return result;
}

