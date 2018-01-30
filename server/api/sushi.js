import { Router } from 'express'

const router = Router()

// Mock sushi
const sushi = [
  { name: 'とろ', price: 300 },
  { name: 'いか', price: 200 },
  { name: 'かっぱ巻き', price: 100 }
]

// Get all sushi
router.get('/sushi', function(req, res, next) {
  res.json(sushi)
})

export default router
