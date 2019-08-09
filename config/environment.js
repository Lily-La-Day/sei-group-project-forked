const port = process.env.PORT || 4000
<<<<<<< HEAD
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/project3'
=======
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/strangerthings'
>>>>>>> 53f7544f45d7826390f8fcd3fc4adad9644dd229
const secret = process.env.SECRET || 'secreto'

//FOR TESTING
// const port = process.env.PORT || 4000
// const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project3-${process.env.NODE_ENV || ''}`
// const secret = process.env.SECRET || 'secreto'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}
