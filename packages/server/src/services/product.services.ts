import mongoose from 'mongoose'
import Products from '../models/product.model'

export const getAllProductService = async (query: any) => {
  if (query._id) {
    try {
      query._id = new mongoose.mongo.ObjectId(query._id)
    } catch (error) {
      console.log('not able to generate mongoose id with content', query._id)
    }
  }

  try {
    const products = await Products.find(query)
    const total = await Products.count()

    return {
      error: false,
      statusCode: 200,
      data: products,
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

export const getProductDetailsService = async (id: string) => {
  try {
    const product = await Products.findById(id)
    if (product) {
      return {
        error: false,
        product
      }
    }
    return {
      error: true,
      errorMessage: 'Product not found.'
    }
  } catch (errors: any) {
    console.log('error on getting product details', errors)
    return {
      error: true,
      statusCode: 404,
      errors
    }
  }
}

export const insertProductService = async (data: any) => {
  try {
    const product = await Products.create(data)
    if (product) {
      return {
        error: false,
        product
      }
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

export const updateProductService = async (id: string, data: any) => {
  try {
    const product = await Products.findByIdAndUpdate(id, data, { new: true })
    return {
      error: false,
      statusCode: 202,
      product
    }
  } catch (errors) {
    console.log('error', errors)
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const deleteProductService = async (id: string) => {
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
