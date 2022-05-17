import User from '../modals/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY);
  return token;
};

export const postSignUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await new User({ email, password });
    const user = await newUser.save();
    const token = await createToken(user._id);
    localStorage.setItem('user', token);
    console.log(token);
    res.json({ user, token });
  } catch (err) {
    res.send(err);
  }
};

export const postlogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  try {
    if (user) {
      const validatePassword = await bcrypt.compare(password, user.password);
      if (validatePassword) {
        res.json(user);
      } else {
        res.send('Password doesnt match');
      }
    } else {
      res.send('Email doesnt exits');
    }
  } catch (err) {
    res.send(err);
  }
};
