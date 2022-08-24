import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
      max: 100
    },
    lastName: {
      required: true,
      type: String,
      max: 100
    },
    email: {
      required: true,
      type: String,
      max: 100,
      unique: true
    },
    password: {
      type: String,
      max: 500,
      required: true
    },
    userType: {
      type: String,
      required: true,
      max: 100
    }
  },
  { timestamps: true }
)

export default mongoose.model('user', userSchema)
