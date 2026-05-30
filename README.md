# Cheese Calculator

## Descripcion general
Cheese Calculator es una aplicacion movil desarrollada con Ionic Framework, Angular, TypeScript, HTML, SCSS y Capacitor. Su funcion principal es calcular ingredientes necesarios para la produccion de queso mediante proporcionalidad directa.

La aplicacion funciona completamente de forma local. No usa backend, base de datos ni almacenamiento local.

## Objetivo del proyecto
Crear una base profesional, escalable y colaborativa para un equipo de 5 desarrolladores que trabajara durante 4 dias en una app movil de calculo de sal y cuajo a partir de litros de leche.

## Valores integrados
- Responsabilidad: ingresar datos reales, revisar resultados y usar la aplicacion como apoyo responsable en el proceso.
- Inclusion: interfaz clara, accesible, con buen contraste y textos faciles de comprender.
- Trabajo colaborativo: estructura organizada, documentacion y tareas distribuidas para facilitar el desarrollo en equipo.

## Tecnologias utilizadas
- Ionic Framework
- Angular
- TypeScript
- HTML
- SCSS
- Capacitor
- Android SDK / Gradle para generar APK debug

## Paleta oficial
```scss
--color-cafe-principal: #8C774C;
--color-cafe-oscuro: #595242;
--color-crema: #F2E7D0;
--color-amarillo-suave: #FFE2A8;
--color-amarillo-queso: #FFCF6A;
```

Uso definido:
- Botones principales: `#FFCF6A`
- Textos principales: `#595242`
- Encabezados: `#8C774C`
- Fondo principal: `#F2E7D0`
- Tarjetas y secciones: `#FFE2A8`

## Requerimientos funcionales
1. Pantalla de inicio con marca visual relacionada con queso, nombre de la app y boton Comenzar.
2. Pantalla de calculo con campo para litros de leche, validaciones y boton para calcular ingredientes.
3. Pantalla de resultados con litros ingresados, sal calculada, cuajo calculado y boton Nuevo calculo.
4. Pantalla de ayuda con funcionamiento, formulas y valores socioemocionales.

## Requerimientos no funcionales
- Diseno responsivo.
- Interfaz accesible.
- Buen contraste visual.
- Codigo limpio y comentado cuando sea necesario.
- Arquitectura organizada y escalable.
- Buenas practicas Angular/Ionic.
- Validaciones visuales claras.
- Sin errores de consola.
- Facil mantenimiento.
- Botones grandes y faciles de presionar.

## Arquitectura del proyecto
La aplicacion separa responsabilidades en:
- `core`: modelos y servicios compartidos de logica.
- `shared`: espacio preparado para componentes reutilizables.
- `pages`: paginas principales de la aplicacion.
- `docs`: documentacion tecnica, planeacion, manuales y evidencias.
- `TO DO`: tareas por integrante del equipo.

## Flujo de navegacion
1. Inicio
2. Calculo
3. Resultados
4. Ayuda

## Formulas matematicas
```ts
salGramos = litrosDeLeche * 20;
cuajoMililitros = litrosDeLeche * 5;
```

## Estructura de carpetas
```text
/
|-- README.md
|-- capacitor.config.ts
|-- package.json
|-- android/
|-- TO DO/
|   |-- Valentin.md
|   |-- Ian.md
|   |-- Kento.md
|   |-- Daniel.md
|   `-- Jonatan.md
|-- docs/
|   |-- requerimientos/
|   |-- manuales/
|   |-- planeacion/
|   |-- branding/
|   `-- evidencias/
`-- src/
    |-- app/
    |   |-- core/
    |   |   |-- models/
    |   |   `-- services/
    |   |-- shared/
    |   |   `-- components/
    |   |-- pages/
    |   |   |-- home/
    |   |   |-- calculation/
    |   |   |-- results/
    |   |   `-- help/
    |   `-- home/
    |-- assets/
    |-- environments/
    |-- theme/
    |   `-- variables.scss
    |-- global.scss
    `-- main.ts
```

Flujo principal de carpetas:
- `src/app/pages`: pantallas principales de Cheese Calculator.
- `src/app/core`: modelos y servicio de calculo.
- `src/app/shared`: componentes reutilizables futuros.
- `docs`: documentacion del proyecto y evidencias.
- `TO DO`: tareas y lecturas asignadas a cada integrante.
- `src/theme` y `src/global.scss`: tema visual, paleta y estilos globales.
- `android`: proyecto nativo generado por Capacitor para compilar APK.

Nota: `src/app/home` pertenece a la estructura base generada por Ionic. El desarrollo principal de Cheese Calculator esta organizado en `src/app/pages`.

## Instalacion
```powershell
npm install
npm.cmd start
npm.cmd run build
```

## Generacion de APK Android
El proyecto ya incluye la plataforma Android de Capacitor. Para generar una APK debug en Windows:

```powershell
npm.cmd run build
npx.cmd cap sync android
cd android
$env:JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.4.7-hotspot'
$env:Path="$env:JAVA_HOME\bin;$env:Path"
.\gradlew.bat assembleDebug
cd ..
New-Item -ItemType Directory -Force -Path apk
Copy-Item android\app\build\outputs\apk\debug\app-debug.apk apk\proyectoQuesos-debug.apk -Force
```

La APK lista para compartir queda en `apk/proyectoQuesos-debug.apk`.

Notas importantes:
- `apk/` no se sube al repositorio porque contiene archivos generados.
- `android/app/build/` tampoco se sube; es salida temporal de Gradle.
- Si no existe Android SDK local, instalarlo en `C:\Users\Angel\AppData\Local\Android\Sdk` o configurar `android/local.properties`.
- Gradle debe ejecutarse con JDK 17 o superior. En este equipo se usa JDK 21 de Eclipse Adoptium.

## Roles del equipo
- Kento: lider de proyecto y supervision.
- Jonatan: documentacion tecnica y manuales.
- Ian: logica, modelos, servicios y calculos.
- Valentin: interfaz, navegacion y calidad visual.
- Daniel: apoyo frontend, validaciones y pruebas.

## Cronograma de trabajo
- Dia 1: crear proyecto, estructura, documentacion base, rutas, modelos y organizacion del equipo.
- Dia 2: crear pantallas, calculos, validaciones, estilos iniciales y paleta oficial.
- Dia 3: resultados, ayuda, accesibilidad, documentacion tecnica y testing inicial.
- Dia 4: testing final, correccion de bugs, revision responsive, manuales, evidencias y entrega final.
