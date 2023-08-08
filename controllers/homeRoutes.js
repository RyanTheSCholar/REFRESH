// "/"
const router = require('express').Router();
const { Category, Goal, User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/' async )

router.get('/profile', withAuth, async(req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id,{
      attributes: {exclude: ['password'] },
      include: [{model: Goal}],
    });
    const user = userData.get({plain: true});

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signup');
});

router.get('/:category?', async (req, res) => {
  try {
    if(req.params.category){
      const goalsData = await Category.findOne(req.params.category, {
        include: [
          {
            model: Goal
          },
        ],
      });
      const goals = goalsData.map((goals) => goals.get({plain: true}));
      res.render('all', {
        goals,
        logged_in: req.session.logged_in
      });
    }else{
      const goalsData = await Goal.findAll({
        include: [
          {
            model: User,//CHECK
          }
        ]
      });
      const goals = goalsData.map((goals) => goals.get({plain: true}));
      res.render('all', {
        goals,
        logged_in: req.session.logged_in
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
