import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productName: {
    required: true,
    type: String,
    max: 100
  },
  inStock: {
    required: true,
    type: Number
  },
  quantity: {
    required: true,
    type: Number
  },
  type: {
    required: true,
    type: String,
    max: 100
  }
})

export default mongoose.model('products', productSchema)
