import { Application } from 'express'
import { router } from './infrastructures/web/routes'

const express = require('express')
const port = process.env.PORT || 3000

const app: Application = express()

app.use('/', router)

app.set('port', port)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})
