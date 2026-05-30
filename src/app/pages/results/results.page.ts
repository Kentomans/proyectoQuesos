import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CheeseCalculationModel } from '../../core/models/cheese-calculation.model';
import { CalculationService } from '../../core/services/calculation.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: false,
})
export class ResultsPage implements OnInit {
  calculation: CheeseCalculationModel | null = null;

  constructor(
    private readonly calculationService: CalculationService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.calculation = this.calculationService.getCurrentCalculation();

    if (!this.calculation) {
      this.router.navigateByUrl('/calculation');
    }
  }

  newCalculation(): void {
    this.calculationService.clearCalculation();
    this.router.navigateByUrl('/calculation');
  }
}
