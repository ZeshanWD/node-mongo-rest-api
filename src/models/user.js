const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { isValidEmail } = require('../helpers');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  }
});

UserSchema.statics.signup = signup;
UserSchema.statics.sendConfirmationEmail = sendConfirmationEmail;

mongoose.model('user', UserSchema, 'users');


// static methods
function signup(userInfo) {
  if (!userInfo.email || !isValidEmail(userInfo.email)) throw new Error('email is invalid');
  if (!userInfo.password) throw new Error(new Error('password is required'));
  if (!userInfo.firstName) throw new Error('firstName is required');
  if (!userInfo.lastName) throw new Error('lastName is required');

  return this.findOne({ email: userInfo.email })
    .then(user => {
      if (user) throw new Error('user already exists');
  
      const newUser = {
        email: userInfo.email,
        password: bcrypt.hashSync(userInfo.password, 9),
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      };
    
      return this.create(newUser);
    })
    .then(userCreated => this.sendConfirmationEmail(userCreated))
    .then(user => user)
}

function sendConfirmationEmail(user) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  return transporter.sendMail({
    from: process.env.MAIL_ADMIN_ADDRESS,
    to: user.email,
    subject: "Please confirm your email",
    html: "<b>Confirm Your Email!</b>",
  }).then(() => user)
}