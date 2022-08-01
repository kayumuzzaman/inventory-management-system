import {
  deleteProductService,
  getAllProductService,
  insertProductService,
  updateProductService
} from '../services/productService'

export const getAllProducts: any = async (req: any, res: any) => {
  return res.status(200).send(await getAllProductService(req.query))
}

export const insertProducts: any = async (req: any, res: any) => {
  let response = await insertProductService(req.body)
  if (response?.error) return res.status(response.statusCode).send(response)
  return res.status(201).send(response)
}

export const updateProducts: any = async (req: any, res: any) => {
  const { id } = req.params
  let response = await updateProductService(id, req.body)
  return res.status(response.statusCode).send(response)
}

export const deleteProducts: any = async (req: any, res: any) => {
  const { id } = req.params
  let response = await deleteProductService(id)
  return res.status(response.statusCode).send(response)
}
