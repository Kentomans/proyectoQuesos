import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
import { CalculationService } from '../../core/services/calculation.service';
 
/**
 * CalculationPage
 *
 * Pantalla donde el usuario ingresa los litros de leche.
 * Valida el formulario antes de delegar el cálculo al CalculationService.
 * Si el formulario es válido, navega automáticamente a la pantalla de resultados.
 */
@Component({
  selector: 'app-calculation-page',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss'],
  standalone: false,
})
export class CalculationPage {
 
  /**
   * Formulario reactivo con un solo campo: milkLiters.
   *
   * Validaciones aplicadas:
   *  - required : el campo no puede estar vacío.
   *  - min(0.01): el valor mínimo permitido es 0.01 litros.
   *
   * Se usa nonNullable para que el reset restaure el valor inicial (null)
   * en lugar de undefined, lo que facilita el chequeo de tipo.
   */
  readonly calculationForm = this.formBuilder.nonNullable.group({
    milkLiters: [null as number | null, [Validators.required, Validators.min(0.01)]],
  });
 
  /**
   * Indica si el usuario ya intentó enviar el formulario.
   * Se usa en el HTML para mostrar errores de validación incluso
   * si el campo no fue tocado manualmente.
   */
  submitted = false;
 
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly calculationService: CalculationService,
    private readonly router: Router,
  ) {}
 
  // ─── Accesores ────────────────────────────────────────────────────────────
 
  /** Acceso directo al control milkLiters para simplificar el template. */
  get milkLitersControl() {
    return this.calculationForm.controls.milkLiters;
  }
 
  // ─── Acciones ─────────────────────────────────────────────────────────────
 
  /**
   * Se ejecuta al enviar el formulario.
   *
   * Flujo:
   *  1. Marca el intento de envío para activar mensajes de error.
   *  2. Si el formulario es inválido, marca todos los campos como tocados y detiene.
   *  3. Si es válido, llama al servicio para calcular y navega a /results.
   */
  calculate(): void {
    this.submitted = true;
 
    // Detener si hay errores de validación o el campo está vacío
    if (this.calculationForm.invalid || this.milkLitersControl.value === null) {
      this.calculationForm.markAllAsTouched();
      return;
    }
 
    // Delegar el cálculo al servicio (nunca calcular directamente en el componente)
    this.calculationService.calculateIngredients(Number(this.milkLitersControl.value));
 
    // Navegar a resultados una vez que el cálculo quedó guardado en memoria
    this.router.navigateByUrl('/results');
  }
}
 