const { Model, DataTypes } = require('sequelize');

class Users extends Model {
  static init(connection) {
    super.init(
        {
          user_name: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING,
          repeat_password: DataTypes.STRING
        },
        {
          sequelize: connection
        }
    );
  };
};

module.exports = Users;