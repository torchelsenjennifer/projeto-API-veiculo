import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Veiculo = sequelize.define('Carro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
    allowNull: false,
    //valida para que o ano seja inteiro, 4 digitos e menor que o ano atual
    validate: {
      isInt: true,
//      len: [4, 4],
      len: { 
        args: [4,4],
        msg: "Ano deve possuir 4 digitos"
      },  
      max: {
        args: new Date().getFullYear(),
        msg: "Ano não pode ser maior que o ano atual"
      }  
    }
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
  tableName : 'veiculosAPI'
});