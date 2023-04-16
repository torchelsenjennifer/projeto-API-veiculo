import { Router } from "express"
import { veiculoIndex, veiculoCreate } from "./controllers/veiculoController.js"

const router = Router()

router.get('/veiculos', veiculoIndex)
.post('/veiculos', veiculoCreate)

export default router