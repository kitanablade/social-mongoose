const router = require('express').Router();
module.exports = router;

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

///api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/thoughts/:thoughtId/reactions
//router.route("/:userId/friends").post(addFriend);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);


module.exports = router;

