export interface Status {
  _id?: string
  productId: string
  itemId: string
  employeeName: string
  employeeId: string
  receivedDate: Date
  returnedDate: Date
  description?: string
}
