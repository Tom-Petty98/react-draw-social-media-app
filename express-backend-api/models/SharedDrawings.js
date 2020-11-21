const { DataTypes } = require("sequelize/types");


const SharedDrawings = sequelize.define('SharedDrawings', {
  drawing_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING },
  picture: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  // likes_id: {type: DataTypes.INTEGER, references: {
  //   model: Likes, key: 'likes_id'}},
  date_posted: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  // user_id:{type: DataTypes.INTEGER, references: {
  //   model: Users, key: 'user_id'}},
  // comments_id: {type: DataTypes.INTEGER, references: {
  //   model: Comments, key: 'comments_id'}}
  },
  {
  tableName: 'SharedDrawings',
  timestamps: false
  }
  );
