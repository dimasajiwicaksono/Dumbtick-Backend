'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'categories',
        //     key: 'id'
        // },
        // onUpdate: 'cascade',
        // onDelete: 'cascade',
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      urlMaps: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // references: {
      //     model: 'users',
      //     key: 'id',
      //   },
      // onUpdate: 'cascade',
      // onDelete: 'cascade',

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};

// 20191228073459-create-events