import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { HelpPageRoutingModule } from './help-routing.module';
import { HelpPage } from './help.page';

@NgModule({
  imports: [CommonModule, IonicModule, HelpPageRoutingModule],
  declarations: [HelpPage],
})
export class HelpPageModule {}
