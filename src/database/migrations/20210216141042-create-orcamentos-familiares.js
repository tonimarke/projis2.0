'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orcamentos_familiares', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      alimentacao:{
        type:Sequelize.DECIMAL,
        allowNull:true,
      }, 
      transporte:{
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      agua: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      luz: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      telefone: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      internet: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      aluguel: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      convenio_medico: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      medicamentos: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      educacao: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      higiene: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      financiamento: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      outros: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      // timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orcamentos_familiares');
  }
};
