const express = require('express');
const data = require('../data.js');
const User  = require('../models/userModels.js')
const bcrypt = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler');

const { generateToken } = require('../utils.js');

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler (async (req, res)=>{
    const createdUser = await User.insertMany(data.users);
    res.send({createdUser});
}));

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            // isSeller: user.isSeller,
            token: generateToken(user),
          });
        //   return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

userRouter.post('/register',expressAsyncHandler(async(req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        // isSeller: user.isSeller,
        // token: generateToken(createdUser),
      });
    })
  );

userRouter.get('/:id',expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found' });
    }
})
);

module.exports = userRouter