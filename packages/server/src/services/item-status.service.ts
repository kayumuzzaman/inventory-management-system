import ItemStatusHistory from '../models/item-status-history.model'
import ItemStatus from '../models/item-status.model'

export const getAllItemStatusService = async () => {
  try {
    const items = await ItemStatus.find()
    const total = await ItemStatus.count()

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

export const getItemStatusService = async (id: string) => {
  try {
    const item = await ItemStatus.findById(id)

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

export const insertItemStatusService = async (data: any) => {
  // TODO: if a item assigned to employee, update item status UNAVAILABLE in items collection, so that it won't show to assign again
  try {
    const checkItemIfExist = await ItemStatus.exists({ itemId: data.itemId })

    if (checkItemIfExist) {
      return {
        error: true,
        errorMessage: 'Item already exist',
        existItemId: data.itemId
      }
    }
    const itemAdded = await ItemStatus.create(data)
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

export const updateItemStatusService = async (id: string, data: any) => {
  // TODO: do check if item is changed, then make the item status available in items collection
  try {
    const oldItem = await ItemStatus.findById(id)

    if (oldItem) {
      const item = {
        itemId: oldItem.itemId,
        employeeName: oldItem.employeeName,
        receivedDate: oldItem.receivedDate,
        returnedDate: oldItem.returnedDate,
        description: oldItem.description
      }
      const historyItem = await ItemStatusHistory.create(item)
    }
    const deleteOldItem = await ItemStatus.findByIdAndDelete(id)
    const newItem = await ItemStatus.create(data)

    return {
      error: false,
      statusCode: 202,
      oldItem,
      newItem
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

export const deleteItemStatusService = async (id: string) => {
  // TODO: make the item status available in items collection
  try {
    const item = await ItemStatus.findByIdAndDelete(id)
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