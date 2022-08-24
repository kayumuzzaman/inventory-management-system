import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import productRouter from './routes/product.route'
import itemRouter from './routes/item.route'
import connectMongo from './configs/db.config'
import itemStatusRouter from './routes/item-status.route'
import itemStatusHistoryRouter from './routes/item-status-history.route'
import authRoutes from './routes/auth.route'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

dotenv.config({
  path: path.resolve(__dirname, '..', `${process.env.NODE_ENV}.env`)
})

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/product', productRouter)
app.use('/item', itemRouter)
app.use('/item-status', itemStatusRouter)
app.use('/item-status-history', itemStatusHistoryRouter)
app.use('/auth', authRoutes)

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

connectMongo()

export default app
