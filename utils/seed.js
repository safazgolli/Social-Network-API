const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
   

    users.push({
      username,
      email,
      
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved videos, for each thought we need to generate a thought response and insert the thought reaction
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
