import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IRecord } from '../../interfaces/entities'
import { chain, last } from 'lodash'
import * as Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const sum = (a, b) => a + b

@Component({
  selector: 'app-entry-linechart',
  templateUrl: './entrylinechart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryLinechartComponent {

  @Input() records: IRecord[]
  @Input() entry: string
  @Input() startDate: string
  @Input() endDate: string

  getData () {
    return [
      {
        data: this.accumulate(),
        label: this.entry,
      },
    ]
  }

  accumulate () {
    return chain(this.getDays())
      .map(date => this.getAmountOfDay(date))
      .reduce((acc: number[], amount) => {
        const total: number = last(acc) || 0
        return acc.concat(total + Math.abs(amount))
      }, [])
      .value()
  }

  getDays () {
    return Array.from(moment.range(moment(this.startDate), moment(this.endDate)).by('days'))
      .map(m => m.format('YYYY-MM-DD'))
  }

  getRecordsOfDay (date) {
    return chain(this.getRecords())
      .filter(e => moment(date).isSame(e.date, 'day'))
      .value()
  }

  getAmountOfDay (date) {
    return this.getRecordsOfDay(date)
      .reduce((acc, record) => acc + record.amount, 0)
  }

  getRecords () {
    return chain(this.records)
      .filter({ entry: this.entry })
      .value()
  }

}
