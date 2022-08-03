import express from 'express'
import {
  deleteItemStatusHistory,
  getAllItemStatusHistory,
  getItemStatusHitory
} from '../controllers/item-status-history.controller'

const router = express.Router()

router.get('/', getAllItemStatusHistory)
router.get('/:id', getItemStatusHitory)
router.delete('/:id', deleteItemStatusHistory)

export default router
