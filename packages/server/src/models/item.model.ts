import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types
const itemSchema = new mongoose.Schema(
  {
    productId: ObjectId,
    productName: {
      required: true,
      type: String,
      max: 100
    },
    itemName: {
      required: true,
      type: String,
      max: 500
    },
    isAvailable: {
      required: true,
      type: Boolean
    },
    description: {
      required: true,
      type: String,
      max: 10000
    }
  },
  { timestamps: true }
)

export default mongoose.model('items', itemSchema)
