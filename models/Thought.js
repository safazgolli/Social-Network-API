const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText :{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
          },
      username : [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
        },
      ],
      raections : [reactionSchema],

    },
    {
    toJSON: {
        virtuals: true,
      },
      id: false,
    }
);
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

