export default class Enjury {
  id: string
  created_at: string
  title: string
  date_start: string
  date_end: string | null
  note: string | null

  constructor(
    id: string,
    created_at: string,
    title: string,
    date_start: string,
    date_end: string | null,
    note: string | null
  ) {
    this.id = id
    this.created_at = created_at
    this.title = title
    this.date_start = date_start
    this.date_end = date_end
    this.note = note
  }
}
