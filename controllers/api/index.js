const router = require('express').Router();

const userRoutes = require('./userRoutes');
const goalRoutes= require('./goalRoutes');
const categoryRoutes= require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/goal', goalRoutes);
router.use('/category', categoryRoutes);

module.exports = router;