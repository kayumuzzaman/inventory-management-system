import {
  deleteItemStatusService,
  getAllItemStatusService,
  getItemStatusService,
  insertItemStatusService,
  updateItemStatusService
} from '../services/item-status.service'

export const getAllItemStatus = async (req: any, res: any) => {
  return res.status(200).send(await getAllItemStatusService())
}

export const getItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  return res.status(200).send(await getItemStatusService(id))
}

export const insertItemStatus = async (req: any, res: any) => {
  const response = await insertItemStatusService(req.body)
  if (response?.error) return res.status(409).send(response)
  return res.status(201).send(req.body)
}

export const updateItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  let response = await updateItemStatusService(id, req.body)
  return res.status(res.statusCode).send(response)
}

export const deleteItemStatus = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  let response = await deleteItemStatusService(id)
  return res.status(response.statusCode).send(response)
}
