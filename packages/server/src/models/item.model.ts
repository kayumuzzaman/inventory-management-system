import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  productId: {
    required: true,
    type: String,
    max: 100
  },
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
})

export default mongoose.model('items', itemSchema)
