import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAlias } from '../../interfaces/entities'

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.css']
})
export class AliasComponent {

  @Input() alias: IAlias

  @Output() onChange = new EventEmitter<IAlias>()

  onPropChange (prop, value) {
    const alias = { ...this.alias, [prop]: value }
    this.onChange.emit(alias)
  }

}
