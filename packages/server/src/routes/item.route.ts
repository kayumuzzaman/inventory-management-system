import express from 'express'
import {
  deleteItems,
  getAllItems,
  getItemDetails,
  insertItems,
  updateItems
} from '../controllers/item.controller'

const router = express.Router()

router.get('/list', getAllItems)
router.get('/details/:id', getItemDetails)
router.post('/add', insertItems)
router.put('/update/:id', updateItems)
router.delete('/delete/:id', deleteItems)

export default router
