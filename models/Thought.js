const {Schema, model, default: mongoose} = require('mongoose');


const thoughtSchema = new mongoose.Schema(
    {
        thoughtText :{
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get:()=>{
                let date = new Date ();
                return date.toLocaleString();
            }
          },
      username : [
        {
        type: mongoose.Types.ObjectId,
        ref: 'user'
        },
      ],
      reactions : [{type: mongoose.Types.ObjectId, ref : 'reaction'}],

    },
    {
    toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false
    }
);
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

