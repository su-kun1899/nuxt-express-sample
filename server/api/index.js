import { Router } from 'express'

import users from './users'
import sushi from './sushi'
import oniku from './oniku'

const router = Router()

// Add Routes
router.use(users)
router.use(sushi)
router.use(oniku)

export default router
