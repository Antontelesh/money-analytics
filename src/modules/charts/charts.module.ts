import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ChartsModule as NgChartsModule } from 'ng2-charts';
import 'chart.js'

import { PiechartComponent } from './piechart.component'
import { LinechartComponent } from './linechart.component'
import { EntryLinechartComponent } from './entrylinechart.component'
import { WithdrawsByTimeComponent } from './withdraws-by-time.component'

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
  ],
  declarations: [
    PiechartComponent,
    LinechartComponent,
    EntryLinechartComponent,
    WithdrawsByTimeComponent,
  ],
  exports: [
    PiechartComponent,
    LinechartComponent,
    EntryLinechartComponent,
    WithdrawsByTimeComponent,
  ],
})
export class ChartsModule { }
