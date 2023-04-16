import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Veiculo = sequelize.define('Carro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  modelo: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(30),
    allowNull: false,
    //setando a marca para que ela seja inserida e convertida em letras maisculas
    set(value) {
      this.setDataValue('marca', value.toUpperCase())
    } 
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preco: {
    type: DataTypes.REAL,
    allowNull: false
  },
  placa:{
    type: DataTypes.STRING(12),
    allowNull: false
  }
}, {
  tableName : 'veiculos'
});