'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro:{
        type:Sequelize.STRING,
        allowNull:false,
      }, 
      numero:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
};
