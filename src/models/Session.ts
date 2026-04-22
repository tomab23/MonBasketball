export default class Session {
  id: number
  date: string
  time: string
  duration: number
  location: string
  type: string
  note: string

  constructor(
    id: number,
    date: string,
    time: string,
    duration: number,
    location: string,
    type: string,
    note: string
  ) {
    this.id = id
    this.date = date
    this.time = time
    this.duration = duration
    this.location = location
    this.type = type
    this.note = note
  }
}
