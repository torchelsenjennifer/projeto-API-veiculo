import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Carro = sequelize.define('Carro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  clube: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  posicao: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  salario: {
    type: DataTypes.REAL,
    allowNull: false
  },
  nacionalidade:{
    type: DataTypes.STRING(20),
    defaultValue: 'Brasileira',
    allowNull: false
  }
}, {
  tableName : 'jogadores'
});