import dotenv from 'dotenv'
import path from 'path'
import app from './app'
import http from 'http'

dotenv.config({
  path: path.resolve(__dirname, '..', `${process.env.NODE_ENV}.env`)
})

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(process.env.PORT)
server.on('error', onError)
server.on('listening', onListening)

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port
  console.log('Listening on ' + bind)
}

export default app
