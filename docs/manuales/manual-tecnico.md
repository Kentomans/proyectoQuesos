# Manual tecnico

## Cheese Calculator

Fecha de elaboracion: 29 de mayo de 2026  
Version del documento: 1.0  
Proyecto: Cheese Calculator  
Tipo de sistema: Aplicacion movil/local desarrollada con Ionic y Angular

## 1. Introduccion

Cheese Calculator es una aplicacion orientada al calculo rapido de ingredientes para la produccion de queso. A partir de una cantidad de litros de leche ingresada por el usuario, el sistema calcula la cantidad proporcional de sal y cuajo.

El proyecto esta construido como una aplicacion Ionic con Angular, TypeScript, HTML, SCSS y Capacitor. Funciona de forma local y no utiliza backend, base de datos, servicios externos ni almacenamiento persistente.

## 2. Objetivo tecnico

El objetivo tecnico del sistema es ofrecer una estructura clara, mantenible y escalable para una aplicacion movil de calculo. La logica matematica esta centralizada en un servicio Angular para evitar duplicidad de formulas en componentes visuales.

## 3. Alcance del sistema

El sistema permite:

- Mostrar una pantalla de inicio con identidad visual de la aplicacion.
- Capturar litros de leche mediante un formulario validado.
- Calcular sal y cuajo con proporcionalidad directa.
- Mostrar el resultado del calculo en una pantalla independiente.
- Limpiar el resultado temporal para iniciar un nuevo calculo.
- Consultar una pantalla de ayuda con pasos, formulas y valores del proyecto.

El sistema no incluye:

- Inicio de sesion.
- Conexion a internet para calcular.
- Base de datos.
- Backend.
- Historial de resultados.
- Exportacion de calculos.
- Guardado en almacenamiento local. 

## 4. Tecnologias utilizadas

| Tecnologia | Uso dentro del proyecto |
| --- | --- |
| Ionic Framework | Componentes visuales, estructura movil y experiencia responsive. |
| Angular | Arquitectura de aplicacion, modulos, rutas, formularios y servicios. |
| TypeScript | Lenguaje principal para componentes, modelos y logica de negocio. |
| HTML | Plantillas de las pantallas. |
| SCSS | Estilos por pantalla, estilos globales y tema visual. |
| Capacitor | Base para empaquetar la aplicacion como app movil. |
| RxJS | Dependencia del ecosistema Angular. |
| Karma/Jasmine | Base configurada para pruebas unitarias. |

## 5. Dependencias principales

El archivo `package.json` define las dependencias del proyecto:

- Angular 20.
- Ionic Angular 8.
- Capacitor 8.
- Capacitor Android 8.
- TypeScript 5.9.
- Ionicons 7.
- Karma y Jasmine para pruebas.
- Angular ESLint para analisis estatico.

Comandos disponibles:

```bash
npm install
npm start
npm run build
npm test
npm run lint
```

Nota: el script `start` ejecuta `ng serve`. Para el flujo Ionic tambien puede usarse `ionic serve` si Ionic CLI esta instalado.

## 6. Requisitos de instalacion

Para instalar y ejecutar el proyecto se requiere:

- Node.js compatible con Angular 20.
- npm.
- Angular CLI.
- Ionic CLI, recomendado para desarrollo movil.
- Navegador moderno para pruebas locales.
- JDK 17 o superior para compilar Android. En este equipo se usa JDK 21 de Eclipse Adoptium.
- Android SDK con `platform-tools`, `platforms;android-36` y `build-tools;36.0.0`.
- Gradle wrapper incluido en la carpeta `android/`.

Instalacion:

```bash
npm install
```

Ejecucion local:

```bash
npm start
```

Compilacion de produccion:

```bash
npm run build
```

## 6.1 Configuracion Android y APK

El proyecto incluye la plataforma Android generada por Capacitor en la carpeta:

```text
android/
```

Configuracion principal:

- `capacitor.config.ts`: define `appId`, `appName` y `webDir`.
- `android/`: contiene el proyecto nativo Android.
- `android/local.properties`: define la ruta local del Android SDK y no se sube al repositorio.
- `android/.gitignore`: excluye salidas de compilacion como `build/`, `.gradle/`, assets copiados y configuraciones locales.
- `.gitignore`: excluye `apk/` para evitar subir APKs generadas al repositorio.

Ruta local del Android SDK usada en este equipo:

```text
C:\Users\Angel\AppData\Local\Android\Sdk
```

Paquetes Android requeridos:

```text
platform-tools
platforms;android-36
build-tools;36.0.0
```

Para instalar paquetes desde `sdkmanager`:

```powershell
$env:JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.4.7-hotspot'
$env:Path="$env:JAVA_HOME\bin;$env:Path"
$sdk='C:\Users\Angel\AppData\Local\Android\Sdk'
& "$sdk\cmdline-tools\latest\bin\sdkmanager.bat" --sdk_root="$sdk" "platform-tools" "platforms;android-36" "build-tools;36.0.0"
```

Para aceptar licencias del SDK:

```powershell
$env:JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.4.7-hotspot'
$env:Path="$env:JAVA_HOME\bin;$env:Path"
$sdk='C:\Users\Angel\AppData\Local\Android\Sdk'
(1..50 | ForEach-Object { 'y' }) | & "$sdk\cmdline-tools\latest\bin\sdkmanager.bat" --sdk_root="$sdk" --licenses
```

## 6.2 Generacion de APK debug

Antes de compilar Android debe generarse el build web y sincronizar Capacitor:

```powershell
npm.cmd run build
npx.cmd cap sync android
```

Despues se compila la APK debug con Gradle:

```powershell
cd android
$env:JAVA_HOME='C:\Program Files\Eclipse Adoptium\jdk-21.0.4.7-hotspot'
$env:Path="$env:JAVA_HOME\bin;$env:Path"
.\gradlew.bat assembleDebug
cd ..
```

Salida original generada por Gradle:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Para copiarla a una carpeta mas sencilla de ubicar:

```powershell
New-Item -ItemType Directory -Force -Path apk
Copy-Item android\app\build\outputs\apk\debug\app-debug.apk apk\proyectoQuesos-debug.apk -Force
```

APK final recomendada para compartir:

```text
apk/proyectoQuesos-debug.apk
```

No se recomienda subir APKs generadas al repositorio. Si se necesita compartir una version compilada, usar una entrega externa o una release de GitHub.

## 7. Estructura de carpetas

```text
/
|-- README.md
|-- package.json
|-- angular.json
|-- capacitor.config.ts
|-- ionic.config.json
|-- docs/
|   |-- branding/
|   |-- manuales/
|   |-- planeacion/
|   `-- requerimientos/
|-- src/
|   |-- app/
|   |   |-- core/
|   |   |   |-- models/
|   |   |   `-- services/
|   |   |-- pages/
|   |   |   |-- home/
|   |   |   |-- calculation/
|   |   |   |-- results/
|   |   |   `-- help/
|   |   |-- app-routing.module.ts
|   |   |-- app.component.*
|   |   `-- app.module.ts
|   |-- assets/
|   |-- environments/
|   |-- global.scss
|   |-- main.ts
|   `-- theme/
|       `-- variables.scss
`-- TO DO/
```

La carpeta `src/app/home` pertenece a la estructura base generada por Ionic. El desarrollo principal del proyecto esta organizado en `src/app/pages`.

## 8. Arquitectura de la aplicacion

La aplicacion sigue una organizacion por responsabilidades:

- `pages`: contiene las pantallas principales y sus estilos.
- `core/models`: contiene interfaces TypeScript compartidas.
- `core/services`: contiene la logica de negocio.
- `theme`: concentra variables visuales para Ionic.
- `global.scss`: define estilos globales compartidos.
- `docs`: contiene requerimientos, planeacion y manuales.

La aplicacion usa rutas con carga diferida mediante `loadChildren`, lo que mantiene cada pantalla separada en su propio modulo.

## 9. Modulos y paginas

### Home

Ubicacion:

```text
src/app/pages/home/
```

Funcion:

- Presenta el nombre Cheese Calculator.
- Muestra una marca visual relacionada con queso.
- Permite iniciar el flujo con el boton Comenzar.
- Permite entrar a Ayuda.

### Calculation

Ubicacion:

```text
src/app/pages/calculation/
```

Funcion:

- Captura los litros de leche.
- Usa un formulario reactivo.
- Valida que el campo sea obligatorio.
- Valida que el valor minimo sea 0.01 litros.
- Llama a `CalculationService`.
- Navega a `/results` cuando el calculo es valido.

### Results

Ubicacion:

```text
src/app/pages/results/
```

Funcion:

- Lee el calculo activo desde `CalculationService`.
- Muestra leche ingresada, sal y cuajo.
- Redirige a `/calculation` si no existe calculo en memoria.
- Permite iniciar un nuevo calculo y limpiar el estado temporal.

### Help

Ubicacion:

```text
src/app/pages/help/
```

Funcion:

- Explica el uso de la aplicacion.
- Presenta las formulas usadas.
- Refuerza los valores de responsabilidad, accesibilidad y trabajo colaborativo.

## 10. Rutas del sistema

Las rutas estan definidas en `src/app/app-routing.module.ts`.

| Ruta | Pantalla | Descripcion |
| --- | --- | --- |
| `/home` | Home | Pantalla inicial de la aplicacion. |
| `/calculation` | Calculation | Captura y validacion de litros de leche. |
| `/results` | Results | Visualizacion del resultado calculado. |
| `/help` | Help | Ayuda, formulas y valores del proyecto. |
| `/` | Redireccion | Redirige automaticamente a `/home`. |

Flujo principal:

```text
Inicio -> Calculo -> Resultados -> Nuevo calculo -> Calculo
```

Flujo de ayuda:

```text
Inicio -> Ayuda
Calculo -> Ayuda
Ayuda -> Inicio
Ayuda -> Calculo
```

## 11. Modelo de datos

El modelo principal esta en:

```text
src/app/core/models/cheese-calculation.model.ts
```

Interfaz:

```ts
export interface CheeseCalculationModel {
  milkLiters: number;
  salt: number;
  rennet: number;
}
```

Campos:

- `milkLiters`: litros de leche ingresados por el usuario.
- `salt`: cantidad calculada de sal en gramos.
- `rennet`: cantidad calculada de cuajo en mililitros.

## 12. Servicio de calculo

El servicio principal esta en:

```text
src/app/core/services/calculation.service.ts
```

Responsabilidades:

- Centralizar las formulas matematicas.
- Validar que los litros sean un numero finito mayor a 0.
- Redondear resultados a 3 decimales.
- Entregar la sal en gramos y el cuajo en mililitros para que coincidan con la interfaz.
- Mantener el ultimo calculo en memoria.
- Limpiar el calculo cuando se inicia un nuevo flujo.

Metodos publicos:

```ts
calculateIngredients(milkLiters: number): CheeseCalculationModel
getCurrentCalculation(): CheeseCalculationModel | null
clearCalculation(): void
```

## 13. Formulas de negocio

Las constantes de proporcion estan definidas dentro de `CalculationService`:

```ts
private readonly saltGramsPerLiter = 20;
private readonly rennetMillilitersPerLiter = 5;
```

Formulas:

```ts
salt = milkLiters * 20;
rennet = milkLiters * 5;
```

Los resultados se redondean con:

```ts
Number(value.toFixed(3))
```

Nota tecnica sobre unidades:

- El modelo guarda `salt` directamente en gramos.
- El modelo guarda `rennet` directamente en mililitros.
- La pantalla de resultados muestra esas mismas unidades, por lo que no se debe aplicar una segunda conversion en la vista.

## 14. Validaciones

Validaciones del formulario de calculo:

- Campo obligatorio: `Validators.required`.
- Valor minimo: `Validators.min(0.01)`.
- Entrada numerica mediante `ion-input type="number"`.
- Mensaje visible cuando el campo es invalido y fue tocado o enviado.

Validacion del servicio:

```ts
if (!Number.isFinite(milkLiters) || milkLiters <= 0) {
  throw new Error('Los litros de leche deben ser un numero mayor a 0.');
}
```

Esta doble validacion protege tanto la interfaz como la logica central.

## 15. Estado y persistencia

El estado del calculo se guarda temporalmente en una propiedad privada del servicio:

```ts
private currentCalculation: CheeseCalculationModel | null = null;
```

Caracteristicas del estado:

- Vive solo en memoria.
- Se pierde al recargar la aplicacion.
- Se borra con `clearCalculation()`.
- No se almacena en localStorage, sessionStorage ni base de datos.

## 16. Tema visual

La paleta oficial esta definida en `src/theme/variables.scss`.

| Variable | Valor | Uso |
| --- | --- | --- |
| `--color-cafe-principal` | `#8C774C` | Encabezados y elementos de marca. |
| `--color-cafe-oscuro` | `#595242` | Texto principal. |
| `--color-crema` | `#F2E7D0` | Fondo principal. |
| `--color-amarillo-suave` | `#FFE2A8` | Tarjetas y secciones. |
| `--color-amarillo-queso` | `#FFCF6A` | Botones y acentos. |

El tema Ionic tambien define:

- `--ion-color-primary`.
- `--ion-color-secondary`.
- `--ion-color-tertiary`.
- `--ion-background-color`.
- `--ion-text-color`.
- `--ion-toolbar-background`.

## 17. Accesibilidad

El proyecto considera:

- Textos claros y directos.
- Botones grandes.
- Contraste entre fondo, textos y botones.
- Etiquetas visibles para campos.
- Mensajes de validacion visibles.
- Navegacion predecible.
- Uso de `aria-labelledby` y `aria-describedby` en secciones y campos clave.

## 18. Requerimientos funcionales cubiertos

- RF-01: pantalla de inicio con marca, nombre y acceso al calculo.
- RF-02: pantalla de calculo con captura, validacion y ejecucion de formulas.
- RF-03: pantalla de resultados con litros, sal, cuajo y nuevo calculo.
- RF-04: pantalla de ayuda con pasos, formulas y valores.

## 19. Requerimientos no funcionales cubiertos

- Diseno responsivo.
- Interfaz accesible.
- Buen contraste visual.
- Codigo separado por responsabilidades.
- Sin backend, base de datos ni almacenamiento local.
- Validaciones claras.
- Arquitectura preparada para mantenimiento.

## 20. Pruebas recomendadas

Pruebas funcionales:

- Abrir la aplicacion y verificar que inicia en `/home`.
- Presionar Comenzar y llegar a `/calculation`.
- Enviar el formulario vacio y verificar el mensaje de error.
- Ingresar `0` y verificar rechazo.
- Ingresar `10` y verificar que se navega a resultados.
- Presionar Nuevo calculo y verificar regreso a calculo.
- Entrar a Ayuda desde Inicio y Calculo.

Pruebas tecnicas:

```bash
npm run build
npm test
npm run lint
```

Pruebas de servicio sugeridas:

- `calculateIngredients(10)` debe producir `salt = 200` y `rennet = 50`.
- `calculateIngredients(0)` debe lanzar error.
- `calculateIngredients(NaN)` debe lanzar error.
- `clearCalculation()` debe dejar el resultado actual en `null`.

## 21. Mantenimiento

Reglas de mantenimiento:

- No duplicar formulas en componentes.
- Mantener la logica matematica en `CalculationService`.
- Mantener las interfaces en `core/models`.
- Mantener las rutas en `app-routing.module.ts`.
- Usar variables del tema antes de definir colores nuevos.
- Revisar la consistencia de unidades si se cambia la presentacion visual.
- Documentar cualquier cambio funcional en `docs/`.

## 22. Posibles mejoras futuras

- Agregar historial local opcional.
- Exportar resultados a PDF o imagen.
- Permitir seleccionar tipo de queso.
- Agregar configuracion de proporciones.
- Agregar pruebas unitarias completas del servicio.
- Mantener sincronizadas las formulas, la interfaz y la documentacion cuando cambien las unidades.
- Preparar build release firmado para distribucion Android.
- Evaluar empaquetado iOS si el proyecto requiere soporte para esa plataforma.

## 23. Conclusion

Cheese Calculator tiene una arquitectura simple y adecuada para una aplicacion educativa o de apoyo rapido. La separacion entre pantallas, modelos y servicio central permite entender el proyecto con facilidad y mantener la logica de calculo en un unico punto.
