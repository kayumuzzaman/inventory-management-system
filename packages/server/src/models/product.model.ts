import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
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
    model: {
      type: String || null
    },
    type: {
      required: true,
      type: String,
      max: 100
    }
  },
  { timestamps: true }
)

export default mongoose.model('products', productSchema)
