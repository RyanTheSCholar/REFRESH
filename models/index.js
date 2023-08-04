const User = require('./user');
const Category = require('./category');
const Goal = require('./goal');

//USER TO CATEGORY
User.hasMany(Category, {
  foreignKey:'user_id',
  onDelete: 'SET NULL',
});
Category.belongsTo(User,{
  foreignKey:'user_id',
});

//CATEGORY TO GOAL
Category.hasMany(Goal, {
  foreignKey: 'goal_id',
  onDelete: 'SET NULL',
});
Goal.belongsTo(Category,{
  foreignKey: 'category_id',
});

//USER TO GOAL
User.hasMany(Goal, {
  foreignKey:'user_id',
  onDelete: 'SET NULL',
});
Goal.belongsTo(User,{
  foreignKey:'user_id',
});

module.exports = { User, Category, Goal};