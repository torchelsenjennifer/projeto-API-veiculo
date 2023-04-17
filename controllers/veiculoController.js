import { sequelize } from "../databases/conecta.js";
import { Op } from "sequelize"
import { Veiculo } from "../models/Veiculo.js";

export const veiculoIndex = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const veiculoCreate = async (req, res) => {
  const { modelo, marca, ano, preco, placa } = req.body;

  if (!modelo || !marca || !ano || !preco || !placa) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe modelo, marca, ano, placa e preco do Carro.",
    });
    return;
  }

  try {
    const veiculos = await Veiculo.create({
      modelo,
      marca,
      ano,
      preco,
      placa,
    });
    res.status(201).json(veiculos);
  } catch (error) {
    const name = error?.name;
    if (name == "SequelizeValidationError") {
      const errorMessages = error.errors.map((errorMessage) => {
        return {
          mensagem: errorMessage.message,
          atributo: errorMessage.path,
          valor: errorMessage.value,
        };
      });
      return res.status(400).json({ erros: errorMessages });
    }
    res.status(400).send(error);
  }
};

export const veiculoStatus = async (req, res) => {
  const valor = req.params.valor.toUpperCase()

  const anoAtual = new Date().getFullYear()
  let inicial
  let final

  if (valor == "NOVO") {
    inicial = anoAtual
    final = anoAtual
  } else if (valor == "SEMI-NOVO") {
    inicial = anoAtual - 2
    final = anoAtual - 1
  } else {
    inicial = 1000
    final = anoAtual - 3
  }

  try {
    const veiculos = await Veiculo.findAll({
      where: {
        ano: {
          [Op.between]: [inicial, final]
        }
      }
    });
    res.status(200).json(veiculos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const veiculoUpdate = async (req, res) => {
  const { id } = req.params;
  const { modelo, marca, ano, preco, placa } = req.body;

  if (!modelo || !marca || !ano|| !preco || !placa) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe modelo, marca, ano, preco e placa do veiculo.",
    });
    return;
  }

  try {
    const veiculo = await Veiculo.update(
      {
        modelo,
        marca,
        ano,
        preco,
        placa
      },
      {
        where: { id },
      }
    );
    res.status(200).json(veiculo);
  } catch (error) {const name = error?.name;
    if (name == "SequelizeValidationError") {
      const errorMessages = error.errors.map((errorMessage) => {
        return {
          mensagem: errorMessage.message,
          atributo: errorMessage.path,
          valor: errorMessage.value,
        };
      });
      return res.status(400).json({ erros: errorMessages });
    }
    res.status(400).send(error);
  }
};

export const veiculoDestroy = async (req, res) => {
  const { id } = req.params;
  try {
    const veiculo = await Veiculo.destroy({
      where: { id },
    });
    res.status(200).json(veiculo);
  } catch (error) {
    const name = error?.name;
    if (name == "SequelizeValidationError") {
      const errorMessages = error.errors.map((errorMessage) => {
        return {
          mensagem: errorMessage.message,
          atributo: errorMessage.path,
          valor: errorMessage.value,
        };
      });
      return res.status(400).json({ erros: errorMessages });
    }
    res.status(400).send(error);
  }
};

export const decresenteAno = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll({
      order: [["ano", "DESC"]],
    });

    res.status(200).json(veiculos);
  } catch (error) {
    res.status(400).send(error);
  }
};