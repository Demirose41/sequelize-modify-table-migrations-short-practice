'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // Rename numPlayers to maxPlayers
    await queryInterface.renameColumn('Games', 'numPlayers', 'maxPlayers');

    // Remove estPlayTime column
    await queryInterface.removeColumn('Games', 'estPlayTime');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('Games', 'maxPlayers', 'numPlayers');

    await queryInterface.addColumn('Games', 'estPlayTime', Sequelize.INTEGER);
  }
};
