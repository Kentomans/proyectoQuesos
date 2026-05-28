import { Injectable } from '@angular/core';
 
import { CheeseCalculationModel } from '../models/cheese-calculation.model';
 
/**
 * CalculationService
 *
 * Centraliza toda la lógica matemática de la aplicación.
 * Es el único lugar donde se aplican las fórmulas de sal y cuajo;
 * ningún componente debe calcular por su cuenta.
 *
 * No usa backend ni almacenamiento local: el resultado vive en memoria
 * mientras la sesión está activa y se borra al iniciar un nuevo cálculo.
 */
@Injectable({
  providedIn: 'root',
})
export class CalculationService {
 
  // ─── Proporciones oficiales ────────────────────────────────────────────────
 
  /** Proporción de sal respecto a los litros de leche: 2 % (0.02 kg por litro) */
  private readonly saltRatio = 0.02;
 
  /** Proporción de cuajo respecto a los litros de leche: 0.5 % (0.005 L por litro) */
  private readonly rennetRatio = 0.005;
 
  // ─── Estado en memoria ────────────────────────────────────────────────────
 
  /** Último cálculo realizado. Es null si aún no se ha calculado o se limpió. */
  private currentCalculation: CheeseCalculationModel | null = null;
 
  // ─── Métodos públicos ─────────────────────────────────────────────────────
 
  /**
   * Calcula la cantidad de sal y cuajo a partir de los litros de leche.
   *
   * Fórmulas aplicadas:
   *   sal   = milkLiters * 0.02   (kg)
   *   cuajo = milkLiters * 0.005  (L)
   *
   * @param milkLiters - Litros de leche. Debe ser un número finito mayor a 0.
   * @returns Un objeto CheeseCalculationModel con los tres valores redondeados a 3 decimales.
   * @throws Error si el valor no es un número finito o es menor o igual a 0.
   */
  calculateIngredients(milkLiters: number): CheeseCalculationModel {
    // Validación: rechaza NaN, Infinity, -Infinity y cualquier valor <= 0
    if (!Number.isFinite(milkLiters) || milkLiters <= 0) {
      throw new Error('Los litros de leche deben ser un número mayor a 0.');
    }
 
    const calculation: CheeseCalculationModel = {
      milkLiters,
      salt:   this.roundIngredient(milkLiters * this.saltRatio),
      rennet: this.roundIngredient(milkLiters * this.rennetRatio),
    };
 
    // Guardar en memoria para que la pantalla de resultados pueda leerlo
    this.currentCalculation = calculation;
    return calculation;
  }
 
  /**
   * Devuelve el cálculo activo en memoria.
   * La pantalla de resultados lo usa para mostrar los datos.
   *
   * @returns El último CheeseCalculationModel calculado, o null si no hay ninguno.
   */
  getCurrentCalculation(): CheeseCalculationModel | null {
    return this.currentCalculation;
  }
 
  /**
   * Borra el cálculo activo de la memoria.
   * Se llama al iniciar un nuevo cálculo para evitar mostrar datos antiguos.
   */
  clearCalculation(): void {
    this.currentCalculation = null;
  }
 
  // ─── Métodos privados ─────────────────────────────────────────────────────
 
  /**
   * Redondea un valor numérico a 3 decimales.
   * Evita errores de punto flotante como 0.30000000000000004.
   *
   * @param value - Número a redondear.
   * @returns El número redondeado a 3 decimales.
   */
  private roundIngredient(value: number): number {
    return Number(value.toFixed(3));
  }
}