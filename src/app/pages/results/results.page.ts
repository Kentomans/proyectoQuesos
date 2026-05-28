import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { CheeseCalculationModel } from '../../core/models/cheese-calculation.model';
import { CalculationService } from '../../core/services/calculation.service';
 
/**
 * ResultsPage
 *
 * Pantalla que muestra los resultados del cálculo: litros de leche,
 * sal (kg) y cuajo (L). Los datos vienen del CalculationService,
 * que los mantiene en memoria desde la pantalla anterior.
 *
 * Si el usuario llega directo a /results sin haber calculado antes
 * (por ejemplo recargando la página), se le redirige a /calculation.
 *
 * No existe botón de guardar: los resultados son temporales por diseño.
 */
@Component({
  selector: 'app-results-page',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: false,
})
export class ResultsPage implements OnInit {
 
  /**
   * Resultado del cálculo activo.
   * Se carga desde el servicio al iniciar la pantalla.
   * Es null si no hay cálculo disponible (se redirige en ese caso).
   */
  calculation: CheeseCalculationModel | null = null;
 
  constructor(
    private readonly calculationService: CalculationService,
    private readonly router: Router,
  ) {}
 
  // ─── Ciclo de vida ────────────────────────────────────────────────────────
 
  /**
   * Al iniciar la pantalla, intenta recuperar el cálculo activo del servicio.
   * Si no hay ninguno (null), redirige a /calculation para evitar
   * mostrar una pantalla vacía o con datos incorrectos.
   */
  ngOnInit(): void {
    this.calculation = this.calculationService.getCurrentCalculation();
 
    if (!this.calculation) {
      // No hay cálculo en memoria: el usuario no pasó por la pantalla de cálculo
      this.router.navigateByUrl('/calculation');
    }
  }
 
  // ─── Acciones ─────────────────────────────────────────────────────────────
 
  /**
   * Limpia el cálculo activo en el servicio y regresa a /calculation.
   * Garantiza que la pantalla de resultados no muestre datos de una sesión anterior.
   */
  newCalculation(): void {
    this.calculationService.clearCalculation();
    this.router.navigateByUrl('/calculation');
  }
}
 