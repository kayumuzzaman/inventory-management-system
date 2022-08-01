import express from 'express'
import {
  deleteProducts,
  getAllProducts,
  insertProducts,
  updateProducts
} from '../controllers/productController'

const router = express.Router()

router.get('/list', getAllProducts)
router.post('/add-product', insertProducts)
router.put('/update/:id', updateProducts)
router.delete('/delete/:id', deleteProducts)

export default router
