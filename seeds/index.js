/* eslint-disable no-unused-vars */
const sequelize = require('../config/connection');
const { User} = require('../models');
const { Goal } = require('../models');
const {Category} = require('../models');

const userData = require('./userData.json');
const goalData = require('./goalData.json');
const categoryData= require('./categoryData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // eslint-disable-next-line no-unused-vars
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const goal = await Goal.bulkCreate(goalData, {
    individualHooks: true,
    returning: true,
  });




  process.exit(0);
};

seedDatabase();