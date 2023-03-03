import Router from 'express'
import ControllerPostPokes from './Controllers/ControllerPostPokes.js'

const router = new Router()

router.post('/pokes',  ControllerPostPokes.postAll)

export default router
