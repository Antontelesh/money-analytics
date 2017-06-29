import { parse } from 'csv'
import { Injectable } from '@angular/core'
import { IRecord } from '../../interfaces/entities'
import { CsvRecord } from './CsvRecord'
import { chain } from 'lodash'

@Injectable()
export class CsvParser {

  parse (file: File): Promise<IRecord[]> {
    return this.readFile(file)
      .then(csv => this.parseCsv(csv))
      .then(records => this.parseRecords(records))
  }

  private readFile (file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = (e) => {
        resolve(e.target['result'])
      }
      reader.onerror = (e) => {
        reject(e)
      }
      reader.readAsText(file)
    })
  }

  private parseCsv (csv: string): Promise<IRecord[]> {
    const params = {
      delimiter: '\t',
      columns: true,
    }
    return new Promise((resolve, reject) => {
      parse(csv, params, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  private parseRecords (records: any[]): IRecord[] {
    return chain(records)
      .map(record => new CsvRecord(record))
      .filter(record => record.isValid)
      .map(record => record.result)
      .value()
  }


}
