const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userCommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const privateMessageSchema = new mongoose.Schema({
  text: { type: String },
  read: { type: Boolean, default: false },
  request: { type: Boolean, default: false },
  requestEvent: { type: mongoose.Schema.ObjectId },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  avatar: { type: String, default:
'https://i.pinimg.com/736x/97/09/dc/9709dc4b91379a7ccb4e0f609e7a0384--alpacas-funny-animals.jpg' },
  comments: [ userCommentSchema ],
  privateMessages: [ privateMessageSchema ],
  interests: { type: Array, default: ['baking', 'running', 'yoga', 'reading', 'cinema', 'politics'] },
  tags: { type: Array },
  events: { type: Array }

})

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)
