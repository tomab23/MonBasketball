export default class Shoes {
  id: string
  created_at: string
  name: string
  brand: string
  size: number
  price: number
  date_buy: string
  color: string

  constructor(
    id: string,
    created_at: string,
    name: string,
    brand: string,
    size: number,
    price: number,
    date_buy: string,
    color: string
  ) {
    this.id = id
    this.created_at = created_at
    this.name = name
    this.brand = brand
    this.size = size
    this.price = price
    this.date_buy = date_buy
    this.color = color
  }
}
