const router = require('express').Router();
const {User, Thought} = require('../../models');
module.exports = router;

// router.get("/", (res,req)=>{
//     User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(500).json(err));
// })
// we need 2 controllers for User and Thought
// hint: router.route('/').get(functionToGetUser()).post(funcToPost())
// 
const {
  getUsers,
//   getSingleUser,
//   createUser,
//   updateUser,
//   deleteUser,
} = require('../../controllers/userController.js');

// /api/users
// router.route('/').get(getUsers).post(createUser);
router.route('/').get(getUsers);

// /api/users/:userId
// router
//   .route('/:userId')
//   .get(getSingleUser)
//   .put(updateUser)
//   .delete(deleteUser);

module.exports = router;

