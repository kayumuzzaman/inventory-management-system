import express from 'express'
import {
  deleteItems,
  getAllItems,
  getItemDetails,
  insertItems,
  updateItems
} from '../controllers/item.controller'

const router = express.Router()

router.get('/', getAllItems)
router.get('/:id', getItemDetails)
router.post('/add', insertItems)
router.put('/:id', updateItems)
router.delete('/:id', deleteItems)

export default router
