import express from 'express'
import {
  deleteItemStatus,
  getAllItemStatus,
  getItemStatus,
  insertItemStatus,
  updateItemStatus
} from '../controllers/item-status.controller'

const router = express.Router()

router.get('/', getAllItemStatus)
router.get('/:id', getItemStatus)
router.post('/add', insertItemStatus)
router.put('/:id', updateItemStatus)
router.delete('/:id', deleteItemStatus)

export default router
