import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    productName: {
      required: true,
      type: String,
      max: 100
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
