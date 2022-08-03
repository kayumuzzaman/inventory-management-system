import {
  deleteItemservice,
  getAllItemservice,
  getItemDetailsService,
  insertItemservice,
  updateItemservice
} from '../services/item.service'

export const getAllItems = async (req: any, res: any) => {
  const response = await getAllItemservice()
  return res.status(response.statusCode).send(response)
}

export const getItemDetails = async (req: any, res: any) => {
  const { id } = req.params
  const response = await getItemDetailsService(id)
  return res.status(response.statusCode).send(response)
}

export const insertItems = async (req: any, res: any) => {
  const response = await insertItemservice(req.body)
  return res.status(response.statusCode).send(response)
}

export const updateItems = async (req: any, res: any) => {
  const { id } = req.params
  const response = await updateItemservice(id, req.body)
  return res.status(response.statusCode).send(response)
}

export const deleteItems = async (req: any, res: any) => {
  const { id } = req.params
  const response = await deleteItemservice(id)
  return res.status(response.statusCode).send(response)
}
