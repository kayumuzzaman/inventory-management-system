import { verifyToken } from '../services/auth.service'
import {
  deleteProductService,
  getAllProductService,
  getProductDetailsService,
  insertProductService,
  updateProductService
} from '../services/product.service'

export const getAllProducts = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await getAllProductService()
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const getProductDetails = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await getProductDetailsService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const insertProducts = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const response = await insertProductService(req.body)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const updateProducts = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await updateProductService(id, req.body)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}

export const deleteProducts = async (req: any, res: any) => {
  if (verifyToken(req)) {
    const { id } = req.params
    const response = await deleteProductService(id)
    return res.status(response.statusCode).send(response)
  }
  return res.status(401).send('Invalid token')
}
