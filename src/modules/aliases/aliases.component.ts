import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from '../../reducers'

import { addAlias, updateAlias } from '../../actions/aliases.actions'

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.css']
})
export class AliasesComponent {

  aliases = this.store.select('aliases')

  constructor (private store: Store<AppState>) {}

  addAlias () {
    this.store.dispatch(addAlias())
  }

  changeAlias (index, alias) {
    this.store.dispatch(updateAlias(index, alias))
  }

  trackByIndex (index) {
    return index
  }

}
