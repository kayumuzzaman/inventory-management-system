import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types
const itemStatusHistorySchema = new mongoose.Schema(
  {
    itemId: ObjectId,
    employeeName: String || null,
    receivedDate: String || null,
    returnedDate: String || null,
    description: String || null
  },
  { timestamps: true }
)

export default mongoose.model('item-status-histories', itemStatusHistorySchema)
