import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers'
import { chain } from 'lodash'
import * as moment from 'moment'
import 'rxjs/add/operator/combineLatest'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allRecords$ = this.store.select<AppState['records']>('records')
  since$ = this.store.select('filters', 'date', 'since')
  until$ = this.store.select('filters', 'date', 'until')

  records$ = this.allRecords$.combineLatest(
    this.since$, this.until$,
    (records, since, until) => {
      return chain(records)
        .filter(r => moment(r.date) >= moment(since))
        .filter(r => moment(r.date) <= moment(until))
        .value()
    }
  )

  withdraws$ = this.records$.map(records => records.filter(r => r.amount < 0))

  constructor (private store: Store<AppState>) {}

}
