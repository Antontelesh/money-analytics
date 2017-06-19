import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from '../../reducers'
import { CsvParser } from './CsvParser.service'
import { receiveRecords } from '../../actions/csv.actions'

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css'],
})
export class CsvComponent {

  isDragging = false

  constructor (
    private store: Store<AppState>,
    private parser: CsvParser
  ) {}

  onDragenter () {
    this.isDragging = true
  }

  onDragleave () {
    this.isDragging = false
  }

  onDragover (event) {
    event.preventDefault()
  }

  onDragend (event) {
    this.isDragging = false
  }

  onDrop (event) {
    event.preventDefault()
    this.isDragging = false
    const file = event.dataTransfer.files.item(0)
    this.parser.parse(file)
      .then(
        records => this.receiveRecords(records),
        error => {}
      )
  }

  receiveRecords (records) {
    this.store.dispatch(receiveRecords(records))
  }


}
