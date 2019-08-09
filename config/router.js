const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')


//events index and create event
router.route('/events/')
  .get(events.index)
  .post(secureRoute, events.create)

//serches for events using tag as query
router.route('/searchevents/:query')
  .get(events.searchTags)

router.route('/events/:id/attending')
  .get(users.attendingUsers)

router.route('/events/:id')
  .get(events.show)
  .post(users.getEventCreator)
  .put(events.updateEvent)

router.route('/me')
  .get(secureRoute, users.getCurrentUser)

router.route('/searchusers/:query')
  .get(users.searchInterests)

router.route('/users/:id/privateMessages/:commentId')
  .post(secureRoute, users.readPrivateMessage)

router.route('/users/:id/privateMessages')
  .post(secureRoute, users.privateMessageCreateRoute)

router.route('/users/:id/')
  .post(users.getUserName)
  .put(users.updateProfile)
  .patch(users.updateAvatar)

router.route('/users/:id/accept')
  .post(secureRoute, users.acceptRequest)

router.route('/users/:id/privateMessages/:commentId')
  .put(secureRoute, users.deleteAcceptedRequest)

router.route('/users/:id/privateMessages/:commentId')
  .patch(secureRoute, users.readPrivateMessage)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/events/:id/comments/:commentId')
  .delete(secureRoute, events.commentDelete)

router.route('/users/:id/comments')
  .post(secureRoute, users.userCommentCreate)

router.route('/users/:id/comments/:commentId')
  .delete(secureRoute, users.userCommentDelete)

router.route('/users/:id/events')
  .get(users.showTheirEvents)

router.route('/myprofile')
  .get(secureRoute, users.showCurrentUser)

router.route('/login')
  .post(users.login)

router.route('/register')
  .post(users.register)

router.route('/myevents')
  .get(secureRoute, users.showCreatedEvents)

router.route('/users')
  .get(users.showUsers)

router.route('/users/:userid')
  .get(users.showUser)

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not Found' }))

module.exports = router
