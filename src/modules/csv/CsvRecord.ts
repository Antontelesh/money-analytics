export class CsvRecord {

  static CURRENCY = 'Валюта'
  static ACCOUNT = 'Счет'
  static AMOUNT = 'Сумма'
  static DATE = 'Дата'
  static ENTRY = 'Статья'

  constructor(private raw) {}

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
    return this.raw[CsvRecord.DATE]
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
