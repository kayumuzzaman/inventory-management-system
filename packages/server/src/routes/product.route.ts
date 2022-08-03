import express from 'express'
import {
  deleteProducts,
  getAllProducts,
  getProductDetails,
  insertProducts,
  updateProducts
} from '../controllers/product.controller'

const router = express.Router()

router.get('/list', getAllProducts)
router.get('/details/:id', getProductDetails)
router.post('/add-product', insertProducts)
router.put('/update/:id', updateProducts)
router.delete('/delete/:id', deleteProducts)

export default router
