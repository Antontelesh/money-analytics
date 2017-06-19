import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CsvComponent } from './csv.component'
import { CsvParser } from './CsvParser.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CsvComponent,
  ],
  providers: [
    CsvParser,
  ],
  exports: [
    CsvComponent,
  ],
})
export class CsvModule { }
