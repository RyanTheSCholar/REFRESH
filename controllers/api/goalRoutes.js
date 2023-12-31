const router = require('express').Router();
const { Goal, Category } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const category = await Category.findOne({
      where: {
        name: req.body.categoryName
      }
    });
    console.log(category);
    const goalData = await Goal.create({
      name:req.body.goalName,
      description: req.body.description,
      user_id: req.session.user_id,
      category_id: category.id,
    });

    res.status(200).json(goalData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    // console.log('PUT route');
    const goalData = await Goal.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }

    );
    res.status(200).json(goalData);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  // delete a goal by its `id` value
  try {
    const goalData = await Goal.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });
    if (!goalData) {
      res.status(404).json({ message: 'No goal found with this id!' });
      return;
    }
    res.status(200).json(goalData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;