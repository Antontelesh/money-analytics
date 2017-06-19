import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AliasesComponent } from './aliases.component';
import { AliasComponent } from './alias.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AliasesComponent,
    AliasComponent,
  ],
  exports: [
    AliasesComponent,
  ],
})
export class AliasesModule { }
