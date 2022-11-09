const { ObjectId } = require('mongoose').Types;
const { User, Thought}= require('../models');
const headCount = async () =>
  User.friends.aggregate()
    .count('friendCount')
    .then((numberOfFriends) => numberOfFriends);