import * as moment from 'moment'
import { chain } from 'lodash'

export class CsvRecord {

  static CURRENCY = 'Валюта'
  static ACCOUNT = 'Счет'
  static AMOUNT = 'Сумма'
  static DATE = 'Дата'
  static ENTRY = 'Статья'

  constructor(private raw) {}

  get isValid () {
    return chain([
      CsvRecord.CURRENCY,
      CsvRecord.ACCOUNT,
      CsvRecord.AMOUNT,
      CsvRecord.DATE,
      CsvRecord.ENTRY,
    ])
    .map(prop => this.raw[prop])
    .every(value => !!value)
    .value()
  }

  get currency () {
    return this.raw[CsvRecord.CURRENCY]
  }

  get account () {
    return this.raw[CsvRecord.ACCOUNT]
  }

  get amount () {
    const value = this.raw[CsvRecord.AMOUNT]
    return value ? parseFloat(value) : 0
  }

  get date () {
    return moment(this.raw[CsvRecord.DATE], 'YYYY.MM.DD', true).format('YYYY-MM-DD')
  }

  get entry () {
    return this.raw[CsvRecord.ENTRY]
  }

  get result () {
    return {
      currency: this.currency,
      account: this.account,
      amount: this.amount,
      date: this.date,
      entry: this.entry,
    }
  }

}
