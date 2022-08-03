import Products from '../models/product.model'

export const getAllProductService = async () => {
  try {
    const product = await Products.find()
    const total = await Products.count()
    return {
      error: false,
      statusCode: 200,
      data: product,
      total
    }
  } catch (errors) {
    console.log(errors)
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
        data: product
      }
    }
    return {
      error: false,
      statusCode: 404,
      message: 'Product not available'
    }
  } catch (errors) {
    console.log(errors)
    return {
      error: true,
      statusCode: 500,
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
        statusCode: 201,
        data: product
      }
    }
    return {
      error: true,
      statusCode: 500,
      message: 'Not able to create item'
    }
  } catch (errors: any) {
    console.log(errors)
    return {
      error: true,
      statusCode: 500,
      message: 'Not able to create item',
      errors
    }
  }
}

export const updateProductService = async (id: string, data: any) => {
  try {
    const product = await Products.findByIdAndUpdate(id, data, { new: true })
    if (product) {
      return {
        error: false,
        statusCode: 202,
        data: product
      }
    }
    return {
      error: true,
      statusCode: 404,
      message: 'product not found'
    }
  } catch (errors) {
    console.log(errors)
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const deleteProductService = async (id: string) => {
  try {
    const product = await Products.findByIdAndDelete(id)

    if (product) {
      return {
        error: false,
        deleted: true,
        statusCode: 202,
        data: product
      }
    }
    return {
      error: true,
      statusCode: 404,
      message: 'product not found'
    }
  } catch (errors) {
    console.log(errors)
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}
