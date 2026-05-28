/**
 * CheeseCalculationModel
 *
 * Representa el resultado de un cálculo de ingredientes para queso.
 * Se usa como estructura de datos entre el servicio y las pantallas.
 *
 * Unidades:
 *  - milkLiters : litros (L)
 *  - salt       : kilogramos (kg)  → litros * 0.02
 *  - rennet     : litros (L)       → litros * 0.005
 */
export interface CheeseCalculationModel {
  /** Litros de leche ingresados por el usuario */
  milkLiters: number;
 
  /** Cantidad de sal calculada en kilogramos */
  salt: number;
 
  /** Cantidad de cuajo calculada en litros */
  rennet: number;
}
 