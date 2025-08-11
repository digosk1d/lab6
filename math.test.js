const { factorial, fibonacci } = require('./math');

// Prueba para el factorial
test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
});

// Prueba para Fibonacci
test('fibonacci de 6 debe ser 8', () => {
    expect(fibonacci(6)).toBe(8);
});

test('fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
});