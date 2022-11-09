const {Schema, model} = require('mongoose');
const thoughtSchema = require('./Thought');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new Schema(

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

        thoughts : [thoughtSchema],
        friends : {
            type : [this],
            default: undefined
        }
    },
    {
        toJSON: {
          getters: true,
        },
      }
);
const User = model ('user', userSchema);
module.exports = User;