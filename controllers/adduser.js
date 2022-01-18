const UserSchema = require("../models/user");
const Event = require("../models/event");
const bcrypt = require('bcryptjs');

exports.mainPageGet = (req, res) => {
  const username = req.session.username;
  res.render("mainPage", { name: username });

}



exports.create = async (req, res) => {
  const { firstName, lastName, email, password, datepicker } = req.body;
  let user = await UserSchema.findOne({ email })

  if (user) {
    return res.redirect('../index.html')
  }

  const hashedPsw = await bcrypt.hash(password, 12);

  user = new UserSchema({
    firstName,
    lastName,
    email,
    password: hashedPsw,
    datepicker
  });

  user
    .save()
    .then((item) => {
      res.redirect('../index.html');
    })
    .catch((err) => {
      res.status(400).send("Unable to save user to database");
    });
};

exports.list = (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) console.log(err);

    res.json(users);
  });
};

exports.addevent = (req, res) => {
  var myData = new Event(req.body);

  myData
    .save()
    .then((item) => {
      res.send("Event saved to database");
      //console.log(item);
    })
    .catch((err) => {
      res.status(400).send("Unable to save event to database");
    });
};

exports.eventslist = (req, res) => {
  Event.find({}).exec((err, events) => {
    if (err) console.log(err);

    res.json(events);
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSchema.findOne({ email })

  if (!user) {
    return res.redirect('../index.html')
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.redirect('../index.html')
  }
 
  req.session.username = user.email;
    req.session.isAuth = true;
  res.redirect('../mainPage')
}