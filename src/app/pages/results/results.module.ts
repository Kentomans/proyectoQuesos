import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';
import { ResultsPage } from './results.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, ResultsPageRoutingModule,ReactiveFormsModule
],
  declarations: [ResultsPage],
})
export class ResultsPageModule {}



