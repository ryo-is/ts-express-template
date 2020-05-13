import { Request, Response, NextFunction } from 'express'

const express = require('express')
const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('index')
  next()
})

router.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('test')
  next()
})

export { router }
