const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      dateFormat(timestamp);
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
{
  toJSON: {
    getters: true,
  },
  id: false,
});
const Thought = model('Thought', thoughtSchema);

Thought.create(
  {
    thoughtText: "just thinking about stuff",
    username: "p@diddy.com",
  },
  (err) => (err ? console.log(err) : console.log("Created new document"))
);


module.exports = Thought;

