export default class Session {
  id: string
  created_at: string
  date: string
  time: string
  duration: number
  location: string
  type: string
  note: string | null
  shoes: string | null

  constructor(
    id: string,
    created_at: string,
    date: string,
    time: string,
    duration: number,
    location: string,
    type: string,
    note: string | null,
    shoes: string | null
  ) {
    this.id = id
    this.created_at = created_at
    this.date = date
    this.time = time
    this.duration = duration
    this.location = location
    this.type = type
    this.note = note
    this.shoes = shoes
  }
}
