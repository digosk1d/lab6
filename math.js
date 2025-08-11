function factorial(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacci(n) {
    if (n < 0) return 0;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}

module.exports = { factorial, fibonacci };