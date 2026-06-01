# CalculaTRON

**Demo en vivo:** [https://calcula-tron.vercel.app/](https://calcula-tron.vercel.app/)

CalculaTRON es una calculadora web simple con estética futurista tipo TRON, desarrollada con React, Vite y TypeScript. El proyecto está estructurado en componentes pequeños, lógica pura separada, un hook propio para manejar el estado y pruebas automatizadas.

---

## Tecnologías

- React 19
- Vite 8
- TypeScript 6
- CSS Modules
- Bun (package manager)
- Vitest
- Testing Library
- Storybook 10
- ESLint

---

## Instalación

El proyecto usa Bun como package manager.

```bash
bun install
```

No usar npm, yarn ni pnpm.

---

## Ejecución en desarrollo

```bash
bun run dev
```

Vite mostrará la URL local donde corre la aplicación, generalmente `http://localhost:5173`.

---

## Build de producción

```bash
bun run build
```

Para previsualizar el build antes de desplegar:

```bash
bun run preview
```

---

## Testing

```bash
bun run test
```

Los tests cubren:

- `calculatorEngine`: appendDigit, appendDecimal, toggleSign, calculate, formatResult.
- `useCalculator`: estado inicial, concatenación de dígitos, operaciones, clear, errores.
- Límites de display: el décimo carácter se ignora, punto y signo cuentan como caracteres.
- Errores por resultados negativos y por overflow.
- Operaciones base: suma, resta, multiplicación.
- Extras: división, módulo, decimal, cambio de signo.

Para ejecutar en modo observación continua:

```bash
bun run test:watch
```

---

## Linting

```bash
bun run lint
```

ESLint verifica:

- Sin puntos y coma en el código fuente.
- Máximo 120 caracteres por línea.
- Imports y variables válidas, sin usos innecesarios.

Las reglas están configuradas en `eslint.config.js`.

---

## Storybook

Para explorar los componentes de forma aislada:

```bash
bun run storybook
```

Para generar el build estático de Storybook:

```bash
bun run build-storybook
```

Storybook incluye historias para:

- **Calculator**: calculadora completa con estado real.
- **Display**: estado normal y estado de error.
- **CalculatorButton**: variantes por tipo (número, operador, igual, peligro, utilidad).
- **Keypad**: layout completo de los 19 botones.
- **StatusBar**: todos los estados posibles (READY, INPUT, PENDING, RESULT, ERROR).

---

## Cómo usar la calculadora

Toda la entrada se realiza a través de los botones de la interfaz.

- Presionar los botones numéricos para ingresar un valor.
- Presionar `+`, `-`, `×`, `÷` o `%` para seleccionar la operación.
- Presionar `=` para calcular y mostrar el resultado.
- Presionar `C` para limpiar y volver al estado inicial.
- Presionar `.` para agregar un punto decimal al número actual.
- Presionar `+/-` para cambiar el signo del número en pantalla.

---

## Reglas funcionales

- El display no muestra más de 9 caracteres.
- Cualquier carácter adicional después del noveno se ignora.
- El punto decimal cuenta como un carácter dentro del límite.
- El signo menos cuenta como un carácter dentro del límite.
- Si una operación produce un resultado negativo, el display muestra `ERROR`.
- Si una operación produce un resultado mayor a `999999999`, el display muestra `ERROR`.
- La división entre cero muestra `ERROR`.
- El módulo entre cero muestra `ERROR`.
- Los resultados decimales largos se recortan para no superar los 9 caracteres.

---

## Operaciones soportadas

- Suma
- Resta
- Multiplicación
- División
- Módulo
- Igualdad (calcula el resultado)
- Punto decimal
- Cambio de signo (`+/-`)

---

## Estructura del proyecto

```
src/
  components/
    calculator/     Componentes visuales de la calculadora
                    (Calculator, Display, Keypad, CalculatorButton,
                     CalculatorHeader, StatusBar)
    layout/         Layout general de la aplicación (AppShell)
    ui/             Componentes de interfaz auxiliares (NeonFrame)

  hooks/
    useCalculator.ts  Hook propio que maneja el estado, el display,
                      la operación pendiente y las acciones del usuario

  systems/
    calculatorEngine.ts  Lógica pura de cálculo y reglas de display

  constants/
    calculatorLimits.ts  Límite de caracteres, valor máximo, mensajes
    operations.ts        Identificadores de operaciones
    buttons.ts           Configuración de los 19 botones

  stories/            Historias de Storybook para cada componente

  test/
    setup.ts          Configuración de Testing Library para Vitest

  styles/             Variables globales, animaciones y estilos base
```

---

## Scripts disponibles

| Script | Descripción |
|---|---|
| `bun run dev` | Inicia el servidor de desarrollo con Vite |
| `bun run build` | Genera el build de producción |
| `bun run preview` | Previsualiza el build de producción |
| `bun run test` | Ejecuta los tests con Vitest |
| `bun run test:watch` | Ejecuta los tests en modo observación |
| `bun run lint` | Verifica el código con ESLint |
| `bun run storybook` | Inicia el servidor de Storybook |
| `bun run build-storybook` | Genera el build estático de Storybook |

---

## Diseño visual

La interfaz usa estética futurista de ciencia ficción:

- Fondo oscuro casi negro.
- Cuadrícula sutil en cyan para reforzar la sensación de interfaz holográfica.
- Scanlines suaves sobre el display.
- Bordes con efecto neón.
- Display estilo HUD con etiqueta de información.
- Botones diferenciados visualmente por tipo: numéricos, operadores, igual, peligro y utilidad.

---

## Verificación de calidad

Para revisar el proyecto completo:

```bash
bun install
bun run dev
```

Para verificar la calidad antes de la entrega:

```bash
bun run lint
bun run test
bun run build
bun run build-storybook
```

Todos los comandos deben terminar sin errores.
