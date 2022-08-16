import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types
const itemStatusSchema = new mongoose.Schema(
  {
    itemId: ObjectId,
    productId: ObjectId,
    employeeName: String || null,
    employeeId: String || null,
    receivedDate: Date || null,
    returnedDate: Date || null,
    description: String || null
  },
  { timestamps: true }
)

export default mongoose.model('item-statuses', itemStatusSchema)
