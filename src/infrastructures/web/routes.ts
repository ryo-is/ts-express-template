import { Request, Response, NextFunction } from 'express'

const express = require('express')
const router = express.Router()

// indexRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('index')
// })
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('index')
  next()
})

export { router }
