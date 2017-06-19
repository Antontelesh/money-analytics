import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../reducers'
import { datefilter } from '../../actions/filters.actions'
import { Subscription } from 'rxjs/Subscription'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.css'],
})
export class DateFilterComponent implements OnInit, OnDestroy {

  filter$ = this.store.select<{ since: string, until: string } >('filters', 'date')
  since$ = this.filter$.map(filter => filter.since)
  until$ = this.filter$.map(filter => filter.until)
  filter: any
  subscription: Subscription

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.subscription = this.filter$
      .subscribe(filter => {
        this.filter = filter
      })
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  change (prop, value) {
    this.store.dispatch(datefilter({ ...this.filter, [prop]: value }))
  }


}
