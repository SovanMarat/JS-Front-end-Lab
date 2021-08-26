const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 символов и меньше 8').isLength({ min: 4, max: 8 }),
  ],
  controller.registartion,
);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;
