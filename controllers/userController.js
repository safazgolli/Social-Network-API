const { ObjectId } = require('mongoose').Types;
const { User, Thought}= require('../models');
const { Types } = require('mongoose');



module.exports = {
    // Get all users
getUsers(req, res) {
        User.find()
            .then((users) => {
               res.json(users);
            })
            .catch((err) =>res.status(500).json(err));
    },

    // Get a single user
getSingleUser(req, res) {
    User.findOne({ _id: Types.ObjectId(req.params.userId) })
    .populate("thoughts")
    .populate("friends")
    .select("-__v")
      .then ((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) =>res.status(500).json(err));
  },
// creat user
createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
// delet user
deleteUser(req, res) {
    User.findOneAndRemove({ _id: Types.ObjectId(req.params.userId) })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.findOneAndUpdate(
              { users: Types.ObjectId(req.params.usertId) },
              { $pull: { users: Types.ObjectId(req.params.userId) } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: 'User deleted, but no thought found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
// update user
updateUser(req, res){
    console.log(req);
    User.findOneAndUpdate(
        {_id: Types.ObjectId(req.params.userId) },
        {$set : req.body},
        { runValidators: true, new: true }
       
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });

  },
   // Add a freind 
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: Types.ObjectId(req.params.userId) },
      {$addToSet: {friends: Types.ObjectId(req.params.friendId)}},
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
// remove a frend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: Types.ObjectId(req.params.userId) },
      { $pull:  { friends: Types.ObjectId(req.params.friendId) } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

};

