# Manual tecnico

## Resumen
Cheese Calculator es una aplicacion Ionic + Angular que calcula sal y cuajo usando proporcionalidad directa. El proyecto esta preparado para trabajo colaborativo sin backend, base de datos ni almacenamiento local.

## Arquitectura
- `src/app/core/models`: modelos TypeScript.
- `src/app/core/services`: logica de negocio.
- `src/app/pages`: pantallas lazy-loaded.
- `src/app/shared`: componentes reutilizables futuros.
- `src/theme/variables.scss`: variables del tema Ionic.
- `src/global.scss`: estilos globales.

## Servicio principal
`CalculationService` centraliza:
- Calculo de sal.
- Calculo de cuajo.
- Resultado actual en memoria.
- Limpieza del calculo actual.

## Formulas
```ts
sal = litrosDeLeche * 0.02;
cuajo = litrosDeLeche * 0.005;
```

## Rutas
- `/home`: pantalla de inicio.
- `/calculation`: pantalla de calculo.
- `/results`: pantalla de resultados.
- `/help`: pantalla de ayuda.

## Instalacion
```bash
npm install
ionic serve
ionic build
```

## Reglas tecnicas
- No duplicar formulas en componentes.
- Mantener validaciones en formularios Angular.
- Mantener estilos usando variables oficiales.
- No implementar guardado de resultados.
