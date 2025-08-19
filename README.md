# Clima & Conversión

## Descripción
Proyecto de examen final que implementa funciones de conversión de temperatura y cálculo de media móvil, con despliegue automático a GitHub Pages.

## Autor
- **Nombre:** Axel Lenin Pullaguari Cedeño
- **NRC:** 23311
- **Correo:** alpullaguari@espe.edu.ec

## Funcionalidades

### 1. Conversión de Temperatura
- **toCelsius(f):** Convierte grados Fahrenheit a Celsius
  - Fórmula: °C = (°F − 32) × 5/9
  - Redondeo: 1 decimal
  - Validación: TypeError si f no es número finito

- **toFahrenheit(c):** Convierte grados Celsius a Fahrenheit
  - Fórmula: °F = (°C × 9/5) + 32
  - Redondeo: 1 decimal
  - Validación: TypeError si c no es número finito

### 2. Media Móvil
- **movingAverage(series, window):** Calcula la media móvil simple
  - **series:** Array de números
  - **window:** Entero ≥ 2 y ≤ series.length
  - **Resultado:** Redondeado a 2 decimales
  - **Errores:** TypeError para valores no numéricos, RangeError para ventana fuera de rango

## Casos de Referencia
- 32°F → 0.0°C
- 0°C → 32.0°F
- 100°C → 212.0°F
- -40°C ↔ -40°F
- movingAverage([10,20,30,40], 2) → [15.00, 25.00, 35.00]
- movingAverage([1,2,3], 3) → [2.00]

## Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm

### Instalación
```bash
git clone https://github.com/ALPullaguariSW/examenFinalPruebas.git
cd examenFinalPruebas
npm install
```

### Scripts Disponibles
```bash
# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar linting
npm run lint

# Iniciar servidor local
npm start

# Build del proyecto
npm run build
```

## Estructura del Proyecto
```
examenFinalPruebas/
├── src/
│   └── utils/
│       ├── clima.js          # Funciones de conversión y media móvil
│       └── clima.test.js     # Tests de las funciones
├── public/
│   ├── index.html            # Página principal
│   ├── styles.css            # Estilos CSS
│   ├── app.js                # Lógica de la interfaz
│   └── .nojekyll             # Archivo para GitHub Pages
├── .github/
│   └── workflows/
│       ├── ci.yml            # Pipeline de CI
│       └── deploy.yml        # Pipeline de CD a GitHub Pages
├── jest.config.js            # Configuración de Jest
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## Criterios de Aceptación

### CI (Integración Continua)
- ✅ CI corre en push/PR a main
- ✅ Lint sin errores
- ✅ Cobertura mínima ≥ 80% (líneas y ramas)
- ✅ PR bloqueado si la CI falla

### CD (Despliegue Continuo)
- ✅ Preview visible en PR (URL única del preview)
- ✅ Live al hacer merge a main (condicionado a CI verde)

## Despliegue

### GitHub Pages
El proyecto se despliega automáticamente a GitHub Pages en el mismo repositorio:
- **URL de producción:** `https://alpullaguarisw.github.io/examenFinalPruebas/`
- **Despliegue automático:** Al hacer merge a main (solo si CI pasa)
- **Sin configuración adicional:** Todo se maneja automáticamente

### Configuración Requerida
1. **Habilitar GitHub Pages** en Settings > Pages del repositorio
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` (se crea automáticamente)
4. **Folder:** `/ (root)`

### Workflows de GitHub Actions
- **CI:** Ejecuta tests y linting en cada push/PR
- **Deploy:** Despliega automáticamente a GitHub Pages en merge a main

## Tests

### Ejecutar Tests
```bash
npm test
```

### Cobertura
```bash
npm run test:coverage
```

### Casos de Prueba
- Conversión de temperatura (32°F ↔ 0°C, 100°C ↔ 212°F, -40°C ↔ -40°F)
- Media móvil con diferentes tamaños de ventana
- Validación de errores (TypeError, RangeError)
- Redondeo correcto de decimales

## Tecnologías Utilizadas
- **JavaScript ES6+** con módulos
- **Jest** para testing
- **ESLint** para linting
- **GitHub Actions** para CI/CD
- **GitHub Pages** para hosting (en el mismo repositorio)

## Contribución
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit de cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## Licencia
Este proyecto está bajo la Licencia ISC.

---

**Nota:** Este proyecto cumple con todos los requisitos del examen final de Pruebas de Software, incluyendo las funciones obligatorias, tests, cobertura de código, y despliegue automático a GitHub Pages.
