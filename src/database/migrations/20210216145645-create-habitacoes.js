'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('habitacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      situacao:{
        type:Sequelize.STRING,
        allowNull:true,
      }, 
      valor_aluguel:{
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      quantidade_dormitorios: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_salas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_copas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_cozinhas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_banheiros: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_areas_servicos: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantidade_garagens: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pintura: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      piso: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contra_piso: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cimentado: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      
      // timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('habitacoes');
  }
};
