import * as express from 'express'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import { router as MainRouter } from '@tryst/routes/api'

const app = express()
app.use(cookieParser())
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ limit: '20mb', extended: false }))

//CORS config
const whitelist = ['http://localhost:4200']

const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    if (whitelist.indexOf(origin) === -1) {
      return callback(new Error(`CORS:: [${origin}] has been blocked by policy`), false)
    }
    return callback(null, true)
  }
}

app.use(cors(corsOptions))

//API ROUTES
app.use('/api', MainRouter)

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
