import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CalculationService } from '../../core/services/calculation.service';

@Component({
  selector: 'app-calculation-page',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss'],
  standalone: false,
})
export class CalculationPage {
  readonly calculationForm = this.formBuilder.nonNullable.group({
    milkLiters: [null as number | null, [Validators.required, Validators.min(0.01)]],
  });

  submitted = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly calculationService: CalculationService,
    private readonly router: Router,
  ) {}

  get milkLitersControl() {
    return this.calculationForm.controls.milkLiters;
  }

  calculate(): void {
    this.submitted = true;

    if (this.calculationForm.invalid || this.milkLitersControl.value === null) {
      this.calculationForm.markAllAsTouched();
      return;
    }

    this.calculationService.calculateIngredients(Number(this.milkLitersControl.value));
    this.router.navigateByUrl('/results');
  }
}
