export class Product {
  public name!: string
  public inStock!: string
  public quantity!: number
  public model!: string
  public type!: string
  constructor(
    name: string,
    inStock: string,
    quantity: number,
    model: string,
    type: string
  ) {
    this.name = name
    this.inStock = inStock
    this.quantity = quantity
    this.model = model
    this.type = type
  }
}
