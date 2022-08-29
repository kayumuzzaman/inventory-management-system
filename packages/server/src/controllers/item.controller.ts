import { verifyToken } from '../services/auth.service'
import {
  deleteItemsByProductIdService,
  deleteItemservice,
  getAllItemservice,
  getItemDetailsService,
  getItemsBySearchService,
  insertItemservice,
  updateItemservice
} from '../services/item.service'

export const getAllItems = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await getAllItemservice()
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const getItemsBySearch = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { searchBy, searchText } = req.params
    const response = await getItemsBySearchService(searchBy, searchText)
    console.log('search', response)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const getItemDetails = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await getItemDetailsService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const insertItems = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await insertItemservice(req.body)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const updateItems = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await updateItemservice(id, req.body)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const deleteItems = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await deleteItemservice(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const deleteItemsByProductId = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params

    const response = await deleteItemsByProductIdService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}
