const router = require('express').Router();
const {User, Thought} = require('../../models');
module.exports = router;

// router.get("/", (res,req)=>{
//     User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(500).json(err));
// })

router.get("/", async(res,req)=>{
    const response = await User.find();
    res.json(response);
})

