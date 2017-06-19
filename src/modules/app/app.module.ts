import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { NgModule } from '@angular/core';
import { AliasesModule } from '../aliases/aliases.module'
import { CsvModule } from '../csv/csv.module'
import { ChartsModule } from '../charts/charts.module'
import { FiltersModule } from '../filters/filters.module'
import reducers from '../../reducers'

import { AppComponent } from './app.component';

const instrumentOptions = () => ({
  monitor: useLogMonitor({ visible: false, position: 'right' }),
})

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    AliasesModule,
    CsvModule,
    ChartsModule,
    FiltersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
