var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
  }
  mongoose.connect('mongodb+srv://admin:Whcs+1985@cluster0-g3slt.gcp.mongodb.net/mabdd?retryWrites=true&w=majority', 
      options,         
      function(err) {
       console.log(err);
      }
  );

  var userSchema = mongoose.Schema({
    batch: { type: mongoose.Schema.Types.ObjectId, ref: 'batch' },
    first_name : String,
    last_name : String,
    status : String,
    online : Boolean,
    avatar : String
})


var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;