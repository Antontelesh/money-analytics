import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../reducers'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/combineLatest'
import { chain, mapValues, keys, values, toPairs, sortBy, map } from 'lodash'
import * as moment from 'moment'

const sum = (a, b) => a + b

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit, OnDestroy {

  subscription: Subscription
  since: string
  until: string

  records$ = this.store.select('records')
  filters$ = this.store.select<AppState['filters']>('filters')

  data$ = this.records$.combineLatest(this.filters$)
    .map(([records, filters]) => records)
    .map(records => {
      return chain(records)
        .filter(record => record.amount <= 0)
        .filter(record => moment(record.date) >= moment(this.since))
        .filter(record => moment(record.date) <= moment(this.until))
        .filter(record => !!record.entry)
        .groupBy('entry')
        .mapValues(r => this.totalAmount(r))
        .toPairs()
        .sortBy(([ label, amount ]) => amount)
        .value()
    })
    // .map(records => this.getGrouped(records))
    // .map(recordsByEntry => mapValues(recordsByEntry, records => this.totalAmount(records)))
    // .map(amounts => toPairs(amounts))
    // .map(amounts => sortBy(amounts, ([ label, amount ]) => amount))

  labels$ = this.data$.map(data => map(data, pair => pair[0]))
  values$ = this.data$.map(data => map(data, pair => pair[1]))
  isEmpty$ = this.values$.map(values => !values.length)

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.subscription = this.filters$.subscribe(filters => {
      this.since = filters.date.since
      this.until = filters.date.until
    })
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  getGrouped (records) {
    return chain(records)
      .filter(record => record.amount <= 0)
      .filter(record => moment(record.date) >= moment(this.since))
      .filter(record => moment(record.date) <= moment(this.until))
      .filter(record => !!record.entry)
      .groupBy('entry')
      .value()
  }

  totalAmount (records) {
    return chain(records)
      .map(record => record.amount * -1)
      .reduce(sum)
  }

}
