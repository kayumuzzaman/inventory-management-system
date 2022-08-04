import mongoose from 'mongoose'

mongoose.Promise = Promise

const connectMongo = async () => {
  const connectionuri = `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
  const connection = await mongoose.connect(connectionuri)
  if (connection) {
    console.log('database connected')
  } else {
    console.log('database connection successful')
  }
}

export default connectMongo
