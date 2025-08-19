// Importar las funciones desde el módulo
import { toCelsius, toFahrenheit, movingAverage } from '../src/utils/clima.js';

// Hacer las funciones disponibles globalmente para los onclick del HTML
window.convertToFahrenheit = function() {
    const celsiusInput = document.getElementById('celsius');
    const resultSpan = document.getElementById('fahrenheit-result');
    
    try {
        const celsius = parseFloat(celsiusInput.value);
        if (isNaN(celsius)) {
            resultSpan.textContent = 'Error: Ingrese un número válido';
            resultSpan.style.color = 'var(--accent-color)';
            return;
        }
        
        const fahrenheit = toFahrenheit(celsius);
        resultSpan.textContent = `${celsius}°C = ${fahrenheit}°F`;
        resultSpan.style.color = 'var(--primary-color)';
    } catch (error) {
        resultSpan.textContent = `Error: ${error.message}`;
        resultSpan.style.color = 'var(--accent-color)';
    }
};

window.convertToCelsius = function() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultSpan = document.getElementById('celsius-result');
    
    try {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (isNaN(fahrenheit)) {
            resultSpan.textContent = 'Error: Ingrese un número válido';
            resultSpan.style.color = 'var(--accent-color)';
            return;
        }
        
        const celsius = toCelsius(fahrenheit);
        resultSpan.textContent = `${fahrenheit}°F = ${celsius}°C`;
        resultSpan.style.color = 'var(--primary-color)';
    } catch (error) {
        resultSpan.textContent = `Error: ${error.message}`;
        resultSpan.style.color = 'var(--accent-color)';
    }
};

window.calculateMovingAverage = function() {
    const seriesInput = document.getElementById('series');
    const windowInput = document.getElementById('window');
    const resultDiv = document.getElementById('moving-average-result');
    
    try {
        // Parsear la serie de números
        const seriesText = seriesInput.value.trim();
        const series = seriesText.split(',').map(num => {
            const parsed = parseFloat(num.trim());
            if (isNaN(parsed)) {
                throw new Error('La serie debe contener solo números separados por comas');
            }
            return parsed;
        });
        
        // Parsear la ventana
        const window = parseInt(windowInput.value);
        if (isNaN(window)) {
            throw new Error('La ventana debe ser un número entero');
        }
        
        // Calcular la media móvil
        const result = movingAverage(series, window);
        
        // Mostrar el resultado
        resultDiv.innerHTML = `
            <strong>Serie:</strong> [${series.join(', ')}]<br>
            <strong>Ventana:</strong> ${window}<br>
            <strong>Resultado:</strong> [${result.join(', ')}]
        `;
        resultDiv.style.color = 'var(--primary-color)';
        
    } catch (error) {
        resultDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
        resultDiv.style.color = 'var(--accent-color)';
    }
};

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación de Clima & Conversión cargada correctamente');
    
    // Ejemplos de uso de las funciones
    console.log('Ejemplos de conversión:');
    console.log('32°F =', toCelsius(32), '°C');
    console.log('0°C =', toFahrenheit(0), '°F');
    console.log('100°C =', toFahrenheit(100), '°F');
    console.log('-40°C =', toFahrenheit(-40), '°F');
    
    console.log('Ejemplos de media móvil:');
    console.log('movingAverage([10,20,30,40], 2) =', movingAverage([10,20,30,40], 2));
    console.log('movingAverage([1,2,3], 3) =', movingAverage([1,2,3], 3));
});







