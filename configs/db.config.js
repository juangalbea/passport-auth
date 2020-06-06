const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/passport-login', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });