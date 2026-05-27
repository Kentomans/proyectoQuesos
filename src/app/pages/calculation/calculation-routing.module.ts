import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculationPage } from './calculation.page';

const routes: Routes = [
  {
    path: '',
    component: CalculationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculationPageRoutingModule {}
