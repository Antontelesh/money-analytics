import { Component, Input } from '@angular/core';
import { IRecord } from '../../interfaces/entities'
import { chain } from 'lodash'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  @Input() records: IRecord[]

  get data () {
    return chain(this.records)
      .groupBy('entry')
      .mapValues(records => this.totalAmount(records))
      .toPairs<number>()
      .sortBy(([label, amount]) => amount)
      .value()
  }

  get labels () {
    return this.data.map(([label]) => label)
  }

  get values () {
    return this.data.map(([label, value]) => value)
  }

  totalAmount (records) {
    return chain(records)
      .map(r => Math.abs(r.amount))
      .reduce((a, b) => a + b, 0)
      .value()
  }
}
