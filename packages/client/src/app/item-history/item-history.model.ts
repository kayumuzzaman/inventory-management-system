export class ItemHistory {
  public _id!: string
  public itemId!: string
  public employeeId!: string
  public receivedDate!: Date
  public returnedDate!: Date
  public description!: string
  constructor(
    _id: string,
    itemId: string,
    employeeId: string,
    receivedDate: Date,
    returnedDate: Date,
    description: string
  ) {
    this._id = _id
    this.itemId = itemId
    this.employeeId = employeeId
    this.receivedDate = receivedDate
    this.returnedDate = returnedDate
    this.description = description
  }
}
