import { Router } from 'express'

import users from './users'
import sushi from './sushi'

const router = Router()

// Add USERS Routes
router.use(users)

// Add Sushi Routes
router.use(sushi)

export default router
