import { Router } from "express"
import { veiculoIndex, veiculoCreate, veiculoStatus, veiculoUpdate, veiculoDestroy, decresenteAno } from "./controllers/veiculoController.js"

const router = Router()

router.get('/veiculos', veiculoIndex)
      .post('/veiculos', veiculoCreate)
      .get('/veiculos/:valor', veiculoStatus)
      // em valor pode ser passado NOVO, SEMI-NOVO OU ANTES DE 2022
      .put('/veiculos/:id', veiculoUpdate)
      .delete('/veiculos/exclusao/:id', veiculoDestroy)
      .get('/veiculos/decresente/ano', decresenteAno)

export default router