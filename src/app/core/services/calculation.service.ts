import { Injectable } from '@angular/core';

import { CheeseCalculationModel } from '../models/cheese-calculation.model';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private readonly saltRatio = 0.02;
  private readonly rennetRatio = 0.005;
  private currentCalculation: CheeseCalculationModel | null = null;

  calculateIngredients(milkLiters: number): CheeseCalculationModel {
    if (!Number.isFinite(milkLiters) || milkLiters <= 0) {
      throw new Error('Los litros de leche deben ser un numero mayor a 0.');
    }

    const calculation: CheeseCalculationModel = {
      milkLiters,
      salt: this.roundIngredient(milkLiters * this.saltRatio),
      rennet: this.roundIngredient(milkLiters * this.rennetRatio),
    };

    this.currentCalculation = calculation;
    return calculation;
  }

  getCurrentCalculation(): CheeseCalculationModel | null {
    return this.currentCalculation;
  }

  clearCalculation(): void {
    this.currentCalculation = null;
  }

  private roundIngredient(value: number): number {
    return Number(value.toFixed(3));
  }
}
