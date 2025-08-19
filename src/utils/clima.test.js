import { toCelsius, toFahrenheit, movingAverage } from './clima.js';

describe('Funciones de Conversión de Temperatura', () => {
    describe('toCelsius', () => {
        test('convierte 32°F a 0.0°C', () => {
            expect(toCelsius(32)).toBe(0.0);
        });

        test('convierte 212°F a 100.0°C', () => {
            expect(toCelsius(212)).toBe(100.0);
        });

        test('convierte -40°F a -40.0°C', () => {
            expect(toCelsius(-40)).toBe(-40.0);
        });

        test('redondea correctamente a 1 decimal', () => {
            expect(toCelsius(98.6)).toBe(37.0);
        });

        test('lanza TypeError para valores no numéricos', () => {
            expect(() => toCelsius('32')).toThrow(TypeError);
            expect(() => toCelsius(null)).toThrow(TypeError);
            expect(() => toCelsius(undefined)).toThrow(TypeError);
            expect(() => toCelsius(NaN)).toThrow(TypeError);
            expect(() => toCelsius(Infinity)).toThrow(TypeError);
        });
    });

    describe('toFahrenheit', () => {
        test('convierte 0°C a 32.0°F', () => {
            expect(toFahrenheit(0)).toBe(32.0);
        });

        test('convierte 100°C a 212.0°F', () => {
            expect(toFahrenheit(100)).toBe(212.0);
        });

        test('convierte -40°C a -40.0°F', () => {
            expect(toFahrenheit(-40)).toBe(-40.0);
        });

        test('redondea correctamente a 1 decimal', () => {
            expect(toFahrenheit(37)).toBe(98.6);
        });

        test('lanza TypeError para valores no numéricos', () => {
            expect(() => toFahrenheit('0')).toThrow(TypeError);
            expect(() => toFahrenheit(null)).toThrow(TypeError);
            expect(() => toFahrenheit(undefined)).toThrow(TypeError);
            expect(() => toFahrenheit(NaN)).toThrow(TypeError);
            expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
        });
    });
});

describe('Función movingAverage', () => {
    test('calcula media móvil con ventana 2', () => {
        const result = movingAverage([10, 20, 30, 40], 2);
        expect(result).toEqual([15.00, 25.00, 35.00]);
    });

    test('calcula media móvil con ventana 3', () => {
        const result = movingAverage([1, 2, 3], 3);
        expect(result).toEqual([2.00]);
    });

    test('calcula media móvil con ventana 4', () => {
        const result = movingAverage([1, 2, 3, 4, 5], 4);
        expect(result).toEqual([2.50, 3.50]);
    });

    test('redondea correctamente a 2 decimales', () => {
        const result = movingAverage([1.333, 2.666, 3.999], 2);
        expect(result).toEqual([2.00, 3.33]);
    });

    test('lanza TypeError para valores no numéricos', () => {
        expect(() => movingAverage([1, '2', 3], 2)).toThrow(TypeError);
        expect(() => movingAverage([1, null, 3], 2)).toThrow(TypeError);
        expect(() => movingAverage([1, NaN, 3], 2)).toThrow(TypeError);
    });

    test('lanza RangeError para ventana < 2', () => {
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], 0)).toThrow(RangeError);
        expect(() => movingAverage([1, 2, 3], -1)).toThrow(RangeError);
    });

    test('lanza RangeError para ventana > series.length', () => {
        expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
        expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
    });

    test('lanza TypeError si series no es un array', () => {
        expect(() => movingAverage('1,2,3', 2)).toThrow(TypeError);
        expect(() => movingAverage(null, 2)).toThrow(TypeError);
        expect(() => movingAverage(undefined, 2)).toThrow(TypeError);
    });
});
