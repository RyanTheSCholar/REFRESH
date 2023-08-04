const User = require('./user');
const Category = require('./category');
const Goal = require('./goal');

User.hasMany(Category, {
  foreignKey:'user_id',
  onDelete: 'SET NULL',
});

Category.belongsTo(User,{
  foreignKey:'user_id',
});
Category.hasMany(Goal, {
  foreignKey: 'goal_id',
  onDelete: 'SET NULL',
});
Goal.belongsTo(Category,{
  foreignKey: 'category_id',
});
//user has many goals THROUGH category?
User.hasMany(Goal, {
  foreignKey:'user_id',
  onDelete: 'SET NULL',
});

Goal.belongsTo(User,{
  foreignKey:'user_id',
});

module.exports = { User, Category, Goal};