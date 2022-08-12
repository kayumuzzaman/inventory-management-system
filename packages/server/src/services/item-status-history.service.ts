import ItemStatusHistory from '../models/item-status-history.model'

export const getAllItemStatusHistoryService = async () => {
  try {
    const items = await ItemStatusHistory.find()
    const total = await ItemStatusHistory.count()

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

export const getItemStatusHistoryService = async (id: string) => {
  try {
    const item = await ItemStatusHistory.find({ itemId: id })

    if (!item) {
      return {
        error: true,
        statusCode: 404,
        errorMessage: 'Item not found'
      }
    }

    return {
      error: false,
      statusCode: 200,
      data: item
    }
  } catch (errors) {
    return {
      error: true,
      statusCode: 500,
      errors
    }
  }
}

export const deleteItemStatusHistoryService = async (id: string) => {
  try {
    const item = await ItemStatusHistory.findByIdAndDelete(id)
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
