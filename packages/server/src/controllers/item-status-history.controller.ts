import { verifyToken } from '../services/auth.service'
import {
  deleteItemStatusHistoryService,
  getAllItemStatusHistoryService,
  getItemStatusHistoryService
} from '../services/item-status-history.service'

export const getAllItemStatusHistory = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await getAllItemStatusHistoryService()
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const getItemStatusHitory = async (req: any, res: any) => {
  if (verifyToken(req)) {
    // using item-status id
    const { id } = req.params
    // using item-status id
    const response = await getItemStatusHistoryService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

// optional API for delete history
export const deleteItemStatusHistory = async (req: any, res: any) => {
  if (verifyToken(req)) {
    // using item-status id
    const { id } = req.params
    const response = await deleteItemStatusHistoryService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}
