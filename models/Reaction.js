const {Schema, model, default: mongoose} = require('mongoose');

const reactionSchema= new mongoose.Schema (

   {
    reactionId:{
        type: mongoose.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280,
    },
    username:{
        type: String,
        required: true,
       
    },
    createdAt :{
        type: Date,
        default: Date.now(),
        get:()=>{
            let date = new Date ();
            return date.toLocaleString();
        }
    },

   } ,
   {
    toJSON: {
      getters: true,
    },
   id: false
  }
);
const Reaction = model ('reaction', reactionSchema);
module.exports = Reaction;