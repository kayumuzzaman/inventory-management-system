export class Product {
  public _id!: string
  public productName!: string
  public inStock!: string
  public quantity!: number
  public model!: string
  public type!: string
  constructor(
    _id: string,
    productName: string,
    inStock: string,
    quantity: number,
    model: string,
    type: string
  ) {
    this._id = _id
    this.productName = productName
    this.inStock = inStock
    this.quantity = quantity
    this.model = model
    this.type = type
  }
}
