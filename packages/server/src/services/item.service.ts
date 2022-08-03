import Items from '../models/item.model'

export const getAllItemservice = async () => {
  try {
    const item = await Items.find()
    const total = await Items.count()
    return {
      error: false,
      statusCode: 200,
      data: item,
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

export const getItemDetailsService = async (id: string) => {
  try {
    const item = await Items.findById(id)
    if (item) {
      return {
        error: false,
        statusCode: 201,
        data: item
      }
    }
    return {
      error: false,
      statusCode: 404,
      message: 'item not available'
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const insertItemservice = async (data: any) => {
  try {
    const item = await Items.create(data)
    return {
      error: false,
      statusCode: 201,
      data: item
    }
  } catch (errors: any) {
    return {
      error: true,
      statusCode: 500,
      message: 'Not able to create item',
      errors
    }
  }
}

export const updateItemservice = async (id: string, data: any) => {
  try {
    const item = await Items.findByIdAndUpdate(id, data, { new: true })
    if (item) {
      return {
        error: false,
        statusCode: 202,
        data: item
      }
    }
    return {
      error: true,
      statusCode: 404,
      message: 'item not found'
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const deleteItemservice = async (id: string) => {
  try {
    const item = await Items.findByIdAndDelete(id)

    if (item) {
      return {
        error: false,
        deleted: true,
        statusCode: 202,
        data: item
      }
    }
    return {
      error: true,
      statusCode: 404,
      message: 'item not found'
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}
