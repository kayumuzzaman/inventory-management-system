import express from 'express'
import {
  deleteItems,
  deleteItemsByProductId,
  getAllItems,
  getItemDetails,
  getItemsBySearch,
  insertItems,
  updateItems
} from '../controllers/item.controller'

const router = express.Router()

router.get('/', getAllItems)
router.get('/:id', getItemDetails)
router.get('/:searchBy/:searchText', getItemsBySearch)
router.get('/:category/:searchText')
router.post('/add', insertItems)
router.put('/:id', updateItems)
router.delete('/:id', deleteItems)
router.delete('/product/:id', deleteItemsByProductId)

export default router
