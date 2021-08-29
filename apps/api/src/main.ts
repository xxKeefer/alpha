import * as express from 'express'
import { router as MainRouter } from '@tryst/routes/api'
const app = express()

//API ROUTES
app.use('/api', MainRouter)

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
