import { verifyToken } from '../services/auth.service'
import {
  deleteItemStatusService,
  getAllItemStatusService,
  getItemStatusService,
  insertItemStatusService,
  updateItemStatusService
} from '../services/item-status.service'

export const getAllItemStatus = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await getAllItemStatusService()
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const getItemStatus = async (req: any, res: any) => {
  if (verifyToken(req)) {
    // using item-status id
    const { id } = req.params
    const response = await getItemStatusService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const insertItemStatus = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await insertItemStatusService(req.body)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const updateItemStatus = async (req: any, res: any) => {
  if (verifyToken(req)) {
    // using item-status id
    const { id } = req.params
    const response = await updateItemStatusService(id, req.body)
    return res.status(res.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const deleteItemStatus = async (req: any, res: any) => {
  if (verifyToken(req)) {
    // using item-status id
    const { id } = req.params
    const response = await deleteItemStatusService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}
