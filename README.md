# Social-Network-API

## Description 📝:

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. The seed data is created using Insomnia.

To see how the API works using Insomnia, see the walk-through demonstration videos here:

https://drive.google.com/file/d/1TGOLOjWSgHGQJPacwjzkxIwm1B_mGRw_/view


## Features:

* GIVEN a social network API
* If I enter the command to invoke the application, my server is started and the Mongoose models are synced to the MongoDB database.
* If I open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON.
* If I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete users and thoughts in my database.
* If I test API POST and DELETE routes in Insomnia, I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.


## Technologies :

```
- JavaScript
- Express.js
- Node.js
- MongoDB
- Mongoose
- Insomnia
```

## Installation 🔧

- Download or clone repository to use this application on local machine.
- Node.js and MongoDB is required to run the application
- To install necessary dependencies, navigate to the root directory and run the following command: npm i

## Tests:

Insomnia is used to test REST API calls. 

On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database.

### USER:

```
- Create a new user: POST /api/users

- Get all users: GET /api/users

- Get a single user by its id: GET /api/users/:userId

- Update a user by its id: PUT /api/users/:userId

- Delete a user by its id: DELETE /api/user/:userId
```

### FRIEND:
```
- Add a new friend to a user's friend list: POST /api/users/:userid/friends/:friendId

- Delete a friend from a user's friend list: DELETE /api/users/:userid/friends/:friendId
```
### THOUGHT:
```
- Create a new thought: POST /api/thoughts/

- Get all thoughts: GET /api/thoughts/

- Get a single thought by its id: GET /api/thoughts/:thoughtId

- Update a thought by its id: PUT /api/thoughts/:thoughtId

- Delete a thought by its id: DELETE /api/thoughts/:thoughtId
```
### REACTION:
```
- Create a reaction: POST /api/thoughts/:thoughtId/reactions

- Delete a reaction by the reactionId: DEL /api/thoughts/:thoughtId/reactions/:reactionId
```


