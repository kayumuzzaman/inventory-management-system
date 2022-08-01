import mongoose from 'mongoose'
import Products from '../models/product'

export const getAllProductService: any = async (query: any) => {
  if (query._id) {
    try {
      query._id = new mongoose.mongo.ObjectId(query._id)
    } catch (error) {
      console.log('not able to generate mongoose id with content', query._id)
    }
  }

  try {
    let items = await Products.find(query)
    let total = await Products.count()

    return {
      error: false,
      statusCode: 200,
      data: items,
      total
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const insertProductService: any = async (data: any) => {
  try {
    console.log('dataaa', data)
    let item = await Products.create(data)
    if (item)
      return {
        error: false,
        item
      }
  } catch (error: any) {
    console.log('error', error)
    return {
      error: true,
      statusCode: 500,
      message: error?.errmsg || 'Not able to create item',
      errors: error?.errors
    }
  }
}

export const updateProductService: any = async (id: string, data: any) => {
  try {
    let item = await Products.findByIdAndUpdate(id, data, { new: true })
    return {
      error: false,
      statusCode: 202,
      item
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const deleteProductService: any = async (id: string) => {
  try {
    const item = await Products.findByIdAndDelete(id)
    console.log('delete', item)
    if (!item)
      return {
        error: true,
        statusCode: 404,
        message: 'item not found'
      }

    return {
      error: false,
      deleted: true,
      statusCode: 202,
      item
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}
