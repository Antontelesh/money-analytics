import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ChartsModule as NgChartsModule } from 'ng2-charts';
import 'chart.js'

import { PiechartComponent } from './piechart.component'

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
  ],
  declarations: [
    PiechartComponent,
  ],
  exports: [
    PiechartComponent,
  ],
})
export class ChartsModule { }
