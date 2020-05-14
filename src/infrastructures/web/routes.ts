import { Request, Response, NextFunction, Router } from 'express'

const express = require('express')
const router: Router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('index')
  next()
})

router.get('/test', (req: Request, res: Response, next: NextFunction) => {
  res.send('test')
  next()
})

export { router }
