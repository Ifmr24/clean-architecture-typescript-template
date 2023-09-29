import {Router} from 'express'
import {userRouter} from './User.route'

const registerRoutes = Router()

registerRoutes.use('/users', userRouter)

export {registerRoutes}

