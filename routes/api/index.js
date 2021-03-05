const router = require('express').Router();

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;