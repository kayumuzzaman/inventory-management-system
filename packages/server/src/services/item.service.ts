import { Types } from 'mongoose'
import itemStatusModel from '../models/item-status.model'
import Items from '../models/item.model'
import productModel from '../models/product.model'
import { getItemStatusService } from './item-status.service'

enum SearchBy {
  PRODUCT_ID = 'product-id',
  ITEM_NAME = 'item-name',
  EMPLOYEE_ID = 'employee-id',
  SERIAL_NO = 'serial-no'
}

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

export const getItemsBySearchService = async (
  searchBy: string,
  searchText: string
) => {
  // get all the products
  const products = await productModel.find()
  let productIdToName: { [key: string]: string } = {}
  products.forEach((product) => {
    productIdToName = {
      ...productIdToName,
      [product._id.toString()]: product.productName
    }
  })

  if (searchBy === SearchBy.PRODUCT_ID) {
    const items = await Items.find({ productId: searchText }).lean()
    const itemsWithProductName: any = []
    items.forEach((item) => {
      if (item.productId?.toString()) {
        const newItem = {
          ...item,
          productName: productIdToName[item.productId.toString()]
        }
        itemsWithProductName.push(newItem)
      }
    })
    if (items) {
      return {
        error: false,
        statusCode: 200,
        data: itemsWithProductName
      }
    }
  } else if (searchBy === SearchBy.ITEM_NAME) {
    const regex = new RegExp(searchText, 'i')
    const items = await Items.find({ itemName: { $regex: regex } }).lean()
    const itemsWithProductName: any = []
    items.forEach((item) => {
      if (item.productId?.toString()) {
        const newItem = {
          ...item,
          productName: productIdToName[item.productId.toString()]
        }
        itemsWithProductName.push(newItem)
      }
    })
    if (items) {
      return {
        error: false,
        statusCode: 200,
        data: itemsWithProductName
      }
    }
  } else if (searchBy === SearchBy.SERIAL_NO) {
    const items = await Items.find({ serialNo: searchText }).lean()
    const itemsWithProductName: any = []
    items.forEach((item) => {
      if (item.productId?.toString()) {
        const newItem = {
          ...item,
          productName: productIdToName[item.productId.toString()]
        }
        itemsWithProductName.push(newItem)
      }
    })
    if (items) {
      return {
        error: false,
        statusCode: 200,
        data: itemsWithProductName
      }
    }
  } else if (searchBy === SearchBy.EMPLOYEE_ID) {
    const itemStatuses = await itemStatusModel
      .find({ employeeId: searchText })
      .lean()
    const itemIDs = itemStatuses.map((status) => status.itemId)
    const items = await Items.find().where('_id').in(itemIDs).lean()
    const itemsWithProductName: any = []
    items.forEach((item) => {
      if (item.productId?.toString()) {
        const newItem = {
          ...item,
          productName: productIdToName[item.productId.toString()]
        }
        itemsWithProductName.push(newItem)
      }
    })
    if (items) {
      return {
        error: false,
        statusCode: 200,
        data: itemsWithProductName
      }
    }
  }
  return {
    error: false,
    statusCode: 404,
    messages: 'No items found'
  }
}

export const getItemDetailsService = async (id: string) => {
  try {
    const item = await Items.findById(id).lean()
    let itemWithProduct: {
      [key: string]: Types.ObjectId | string | undefined
    } = { ...item }
    if (item?.productId) {
      const product = await productModel.findById(item.productId)
      if (product?.productName) {
        itemWithProduct = {
          ...itemWithProduct,
          productName: product.productName
        }
      }
    }
    const status = (await getItemStatusService(id)).data

    if (item) {
      return {
        error: false,
        statusCode: 201,
        data: { item: itemWithProduct, status }
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

export const deleteItemsByProductIdService = async (id: string) => {
  try {
    const item = await Items.deleteMany({ productId: id })

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
