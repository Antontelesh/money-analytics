import aliases, { AliasesState } from './aliases.reducer'
import records, { RecordsState } from './records.reducer'
import filters, { FiltersState } from './filters.reducer'

export interface AppState {
  aliases: AliasesState,
  records: RecordsState,
  filters: FiltersState,
}

export default {
  aliases,
  records,
  filters,
}
