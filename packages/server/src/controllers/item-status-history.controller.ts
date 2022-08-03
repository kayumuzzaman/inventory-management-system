import {
  deleteItemStatusHistoryService,
  getAllItemStatusHistoryService,
  getItemStatusHistoryService
} from '../services/item-status-history.service'

export const getAllItemStatusHistory = async (req: any, res: any) => {
  return res.status(200).send(await getAllItemStatusHistoryService())
}

export const getItemStatusHitory = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  return res.status(200).send(await getItemStatusHistoryService(id))
}

// optional API for delete history
export const deleteItemStatusHistory = async (req: any, res: any) => {
  // using item-status id
  const { id } = req.params
  let response = await deleteItemStatusHistoryService(id)
  return res.status(response.statusCode).send(response)
}
