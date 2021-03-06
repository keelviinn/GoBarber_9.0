import Sequelize, { Model } from 'sequelize';

class File extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
               type: Sequelize.VIRTUAL,
               get() {
                  return `${process.env.APP_URL}/files/${this.path}`;
               },
            },
         },
         {
            sequelize,
         }
      );

      return this;
   }

   checkPassword(password) {
      return bcrypt.compare(password, this.password_hash);
   }
}

export default File;
