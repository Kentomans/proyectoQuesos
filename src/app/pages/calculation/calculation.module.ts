import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CalculationPageRoutingModule } from './calculation-routing.module';
import { CalculationPage } from './calculation.page';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, CalculationPageRoutingModule],
  declarations: [CalculationPage],
})
export class CalculationPageModule {}
