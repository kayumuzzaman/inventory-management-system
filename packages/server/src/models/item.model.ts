import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types
const itemSchema = new mongoose.Schema(
  {
    productId: ObjectId,
    itemName: {
      required: true,
      type: String,
      max: 500
    },
    description: {
      required: true,
      type: String,
      max: 10000
    },
    serialNo: {
      type: String,
      max: 500
    }
  },
  { timestamps: true }
)

export default mongoose.model('items', itemSchema)
