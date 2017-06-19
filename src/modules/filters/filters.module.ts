import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DateFilterComponent } from './datefilter.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DateFilterComponent,
  ],
  exports: [
    DateFilterComponent,
  ],
})
export class FiltersModule { }
