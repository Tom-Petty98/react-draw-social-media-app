

const Comment = sequelize.define('Comment', {
  body: { type: DataTypes.STRING }
  }, {
  tableName: 'comments',
  timestamps: false
  }
  );
  User.hasMany(Comment, { foreignKey: 'user_id' });