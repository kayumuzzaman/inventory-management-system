import {
  deleteItemStatusService,
  getAllItemStatusService,
  getItemStatusService,
  insertItemStatusService,
  updateItemStatusService
} from '../services/item-status.service'

export const getAllItemStatus = async (req: any, res: any) => {
  const response = await getAllItemStatusService()
  return res.status(response.statusCode).send(response)
}

export const getItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  const response = await getItemStatusService(id)
  return res.status(response.statusCode).send(response)
}

export const insertItemStatus = async (req: any, res: any) => {
  const response = await insertItemStatusService(req.body)
  return res.status(response.statusCode).send(response)
}

export const updateItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  const response = await updateItemStatusService(id, req.body)
  return res.status(res.statusCode).send(response)
}

export const deleteItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  const response = await deleteItemStatusService(id)
  return res.status(response.statusCode).send(response)
}
