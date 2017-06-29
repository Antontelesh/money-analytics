import { Component, Input, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core'
import { IRecord } from '../../interfaces/entities'
import { chain } from 'lodash'


@Component({
  selector: 'app-withdraws-by-time',
  templateUrl: './withdraws-by-time.component.html',
  styleUrls: ['./withdraws-by-time.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawsByTimeComponent implements OnInit, OnChanges {

  @Input() withdraws: IRecord[]
  @Input() startDate: string
  @Input() endDate: string

  currentEntry: string
  entries: string[]

  getEntries () {
    return chain(this.withdraws)
      .map(record => record.entry)
      .uniq()
      .value()
  }

  setEntry (entry) {
    this.currentEntry = entry
  }

  ngOnInit () {
    this.entries = this.getEntries()
    this.currentEntry = this.checkEntry(this.currentEntry)
  }

  ngOnChanges () {
    this.entries = this.getEntries()
    this.currentEntry = this.checkEntry(this.currentEntry)
  }

  checkEntry (entry) {
    const entries = this.entries
    if (entries.includes(entry)) {
      return entry
    } else {
      return entries[0]
    }
  }

}
