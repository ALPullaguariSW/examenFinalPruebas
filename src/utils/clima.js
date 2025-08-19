
//Convertir grados Fahrenheit a Celsius

export function toCelsius(f) {
    if (!Number.isFinite(f)) {
        throw new TypeError('El parámetro debe ser un número finito');
    }
    const celsius = (f - 32) * 5/9;
    return Math.round(celsius * 10) / 10;
}

//Convertir grados Celsius a Fahrenheit

export function toFahrenheit(c) {
    if (!Number.isFinite(c)) {
        throw new TypeError('El parámetro debe ser un número finito');
    }
    const fahrenheit = (c * 9/5) + 32;
    return Math.round(fahrenheit * 10) / 10;
}

// Calcular la media movil simple de una serie de numeros

export function movingAverage(series, window) {
    // Validamos que sea un array
    if (!Array.isArray(series)) {
        throw new TypeError('El primer parámetro debe ser un array');
    }
    
    // Validamos el window < 2
    if (!Number.isInteger(window) || window < 2) {
        throw new RangeError('La ventana debe ser un entero ≥ 2');
    }
    
    // Validamos que window no sea mayor que la longitud de la serie
    if (window > series.length) {
        throw new RangeError('La ventana no puede ser mayor que la longitud de la serie');
    }
    
    // Validamos que todos los numeros sean finitos
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
