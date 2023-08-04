const router = require('express').Router();
const { Goal } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
      const goalData = await Goal.create({
        ...req.body,
        user_id: req.session.user_id,
        
      });

      res.status(200).json(goalData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      console.log("PUT route");
      const blogData = await BlogPost.update(
        req.body,
        {
          where: {
            id: req.params.id,
          },
        }
  
      )
      return res.json(blogData)
  
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