module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
         'users', // tabela que quer adicionar coluna
         'avatar_id', // nome da coluna
         {
            type: Sequelize.INTEGER,
            references: { model: 'files', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
         }
      );
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('user', 'avatar_id');
   },
};
