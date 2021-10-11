const User = require("../models/user.model")



// register: (req, res) => {
//   User.create(req.body)
//     .then(user => {
//         res.json({ msg: "success!", user: user });
//     })
//     .catch(err => res.json(err));
// }

module.exports.register = (req, res) => {
    User.create(req.body)
      .then(user => {
          res.json({ msg: "success!", user: user });
      })
      .catch(err => res.json(err));
  }
  



