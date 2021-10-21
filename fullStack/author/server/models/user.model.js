const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
// UserSchema.plugin(uniqueValidator);


const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique:[true, "email must be unique"],
      validate: {

        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"

      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});
  

  UserSchema.plugin(uniqueValidator);
  // add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );



UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });


  UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

  




// UserSchema.pre("validate", function(next) {
//     var self = this;

//     User.findOne({email : this.email}, function(err, results) {
//         if(err) {
//             next(err);
//         } else if(results) {
//             console.log('results', results);
//             self.invalidate("email", "email must be unique");
//             next(new Error("email must be unique"));
//         } else {
//             next();
//         }
//     });
// });


  
const User = mongoose.model("User", UserSchema);
module.exports = User;