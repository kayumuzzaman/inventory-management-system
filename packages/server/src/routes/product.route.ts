import express from 'express'
import {
  deleteProducts,
  getAllProducts,
  getProductDetails,
  insertProducts,
  updateProducts
} from '../controllers/product.controller'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProductDetails)
router.post('/add', insertProducts)
router.put('/:id', updateProducts)
router.delete('/:id', deleteProducts)

export default router
