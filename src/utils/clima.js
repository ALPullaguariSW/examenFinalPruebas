/**
 * Convierte grados Fahrenheit a Celsius
 * @param {number} f - Temperatura en grados Fahrenheit
 * @returns {number} Temperatura en grados Celsius redondeada a 1 decimal
 * @throws {TypeError} Si f no es un número finito
 */
export function toCelsius(f) {
    if (!Number.isFinite(f)) {
        throw new TypeError('El parámetro debe ser un número finito');
    }
    const celsius = (f - 32) * 5/9;
    return Math.round(celsius * 10) / 10;
}

/**
 * Convierte grados Celsius a Fahrenheit
 * @param {number} c - Temperatura en grados Celsius
 * @returns {number} Temperatura en grados Fahrenheit redondeada a 1 decimal
 * @throws {TypeError} Si c no es un número finito
 */
export function toFahrenheit(c) {
    if (!Number.isFinite(c)) {
        throw new TypeError('El parámetro debe ser un número finito');
    }
    const fahrenheit = (c * 9/5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}

/**
 * Calcula la media móvil simple de una serie de números
 * @param {number[]} series - Array de números
 * @param {number} window - Tamaño de la ventana (≥ 2 y ≤ series.length)
 * @returns {number[]} Array con las medias móviles redondeadas a 2 decimales
 * @throws {TypeError} Si hay valores no numéricos
 * @throws {RangeError} Si la ventana está fuera de rango
 */
export function movingAverage(series, window) {
    // Validar que series sea un array
    if (!Array.isArray(series)) {
        throw new TypeError('El primer parámetro debe ser un array');
    }
    
    // Validar que window sea un entero ≥ 2
    if (!Number.isInteger(window) || window < 2) {
        throw new RangeError('La ventana debe ser un entero ≥ 2');
    }
    
    // Validar que window no exceda la longitud de series
    if (window > series.length) {
        throw new RangeError('La ventana no puede ser mayor que la longitud de la serie');
    }
    
    // Validar que todos los elementos sean números
    if (!series.every(num => Number.isFinite(num))) {
        throw new TypeError('Todos los elementos de la serie deben ser números finitos');
    }
    
    const result = [];
    
    for (let i = 0; i <= series.length - window; i++) {
        const sum = series.slice(i, i + window).reduce((acc, val) => acc + val, 0);
        const average = sum / window;
        result.push(Math.round(average * 100) / 100);
    }
    
    return result;
}
