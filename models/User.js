const {Schema, model, default: mongoose} = require('mongoose');
const thoughtSchema = require('./Thought');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new mongoose.Schema(

    {
        username : {
            type: String,
            required: true,
            trim : true,

        },

        email : {
            type: String,
        
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },

        thoughts : [{type: mongoose.Types.ObjectId, ref:'thought'}],
        friends: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    },
    {
        toJSON: {
            virtuals: true,
          getters: true,
        },
        id : false
      }
);
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
const User = model ('user', userSchema);
module.exports = User;