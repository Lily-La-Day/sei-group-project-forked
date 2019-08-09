const mongoose = require('mongoose')

const eventCommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
})

function setLngLat(v){
  if (v === 'Barking & Dagenham')
    return '0.1337 51.545'
  else if (v === 'Barnet')
    return '0.1337 51.545'
  else if (v === 'Bexley')
    return '0.1511 51.433'
  else if (v === 'Brent')
    return '-0.266 51.55'
  else if (v === 'Bromley')
    return '0.0556 51.455'
  else if (v === 'Camden')
    return '-0.164 51.546'
  else if (v === 'City of London')
    return '-0.100 51.433'
  else if (v === 'Croydon')
    return '0.1511 51.3833'
  else if (v === 'Ealing')
    return '-0.316 51.3833'
  else if (v === 'Enfield')
    return '-0.066 51.6667'
  else if (v === 'Greenwich')
    return '-0.018 51.4779'
  else if (v === 'Hackney')
    return '-0.050 51.5555'
  else if (v === 'Hammersmith & Fulham')
    return '-0.317 51.5000'
  else if (v === 'Haringey')
    return '-0.083 51.5833'
  else if (v === 'Harrow')
    return '-0.316 51.5833'
  else if (v === 'Havering')
    return '0.1861 51.6156'
  else if (v === 'Hillingdon')
    return '-0.453 51.5329'
  else if (v === 'Hounslow')
    return '-0.350 51.4667'
  else if (v === 'Islington')
    return '-0.103 51.5362'
  else if (v === 'Kensington & Chelsea')
    return '-0.206 51.4951'
  else if (v === 'Kingston upon Thames')
    return '-0.283 51.4167'
  else if (v === 'Lambeth')
    return '-0.117 51.5000'
  else if (v === 'Lewisham')
    return '-0.016 51.4500'
  else if (v === 'Merton')
    return '-0.198 51.4131'
  else if (v === 'Newham')
    return '-2.449 51.8038'
  else if (v === 'Redbridge')
    return '-1.467 50.9167'
  else if (v === 'Richmond upon Thames')
    return '-0.283 51.4555'
  else if (v === 'Southwark')
    return '-0.083 51.5555'
  else if (v === 'Sutton')
    return '-0.201 51.3535'
  else if (v === 'Tower Hamlets')
    return '-0.017 51.5355'
  else if (v === 'Waltham Forest')
    return '-0.033 51.6555'
  else if (v === 'Wandsworth')
    return '-0.200 51.4555'
  else if (v === 'Westminster')
    return '-0.117 51.5555'

  else return '-0.117 51.5555'
}

function setImage(v){
  if (v === 'sport')
    return '/assets/sport.jpg'
  else if (v === 'learning')
    return '/assets/learning.jpg'
  else if (v === 'community')
    return '/assets/community.jpg'
  else if (v === 'food')
    return '/assets/food-and-drink.jpg'
  else if (v === 'health')
    return '/assets/health-and-wellness.jpg'
  else if (v === 'entertainment')
    return '/assets/entertainment.jpg'
  else if (v === 'nature')
    return '/assets/nature-and-outdoors.jpg'
  else if (v === 'art')
    return '/assets/art-and-culture.jpg'

  else return '/assets/social.jpg'
}

const attendeeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  accepted: { type: Boolean, default: false }
})
const eventSchema = new mongoose.Schema({
  eventType: { type: String, required: true, default: 'event' },
  eventName: { type: String, required: true },
  date: { type: Date, required: true },
  fixed: { type: Boolean },
  location: { type: String, set: setLngLat, default: '-0.117 51.5555' },
  locationString: { type: String },
  description: { type: String },
  schedule: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  tickets: { type: String },
  ticketLink: { type: String },
  eventLink: { type: String },
  preparation: { type: String },
  cost: { type: Number, default: 0 },
  catered: { type: String },
  provided: { type: String },
  whatToBring: { type: String },
  maxSize: { type: Number },
  minSize: { type: Number },
  idealGroupSize: { type: Number },
  privateInfo: { type: String },
  partyImage: { type: String, set: setImage, default: '/assets/entertainment.jpg' },
  tags: { type: Array },
  skillLevel: { type: String },
  comments: [ eventCommentSchema ],
  likes: [ likeSchema ],
  attendees: [ attendeeSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

//to be added in the future.
eventSchema
  .virtual('likeCount')
  .get(function() {
    return this.likes.length
  })

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Event', eventSchema)
