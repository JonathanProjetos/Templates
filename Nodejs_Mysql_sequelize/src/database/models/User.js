const User = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true, 
    },

    email:{
      type: DataTypes.STRING,
      allowNull: false
    },

    passwordHash:{
      type: DataTypes.STRING,
      allowNull: false
    },

  }, {
    timestamps: false
  });

  return User;
}

module.exports = User;