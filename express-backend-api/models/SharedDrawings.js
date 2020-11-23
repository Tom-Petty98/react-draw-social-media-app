
module.exports = (sequelize, Sequelize) => {
  const SharedDrawings = sequelize.define('sharedDrawings', {
    drawing_id: { type:Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    picture: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    // likes_id: {type: DataTypes.INTEGER, references: {
    //   model: Likes, key: 'likes_id'}},
    date_posted: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    // user_id:{type: DataTypes.INTEGER, references: {
    //   model: Users, key: 'user_id'}},
    // comments_id: {type: DataTypes.INTEGER, references: {
    //   model: Comments, key: 'comments_id'}}
    },
    {
    tableName: 'SharedDrawings',
    timestamps: false
    });
    return SharedDrawings
  }