import { Request, Response } from 'express'

const express = require('express')
const indexRouter = express.Router()

// indexRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('index')
// })
indexRouter.get('/', (req: Request, res: Response) => {
  res.send('index')
})

export { indexRouter }
