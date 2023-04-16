import { sequelize } from '../databases/conecta.js';
// import { Op } from "sequelize"
import { Veiculo } from '../models/Veiculo.js'

export const veiculoIndex = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.status(200).json(veiculos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const veiculoCreate = async (req, res) => {
    const { modelo, marca, ano, preco, placa } = req.body
  
    if (!modelo || !marca || !ano || !preco || !placa) {
      res.status(400).json({ id: 0, msg: "Erro... Informe modelo, marca, ano, placa e preco do Carro." })
      return
    }
  
    try {
      const veiculos = await Veiculo.create({
        modelo, marca, ano, preco, placa
      });
      res.status(201).json(veiculos)
    } catch (error) {
      res.status(400).send(error)
    }
  }