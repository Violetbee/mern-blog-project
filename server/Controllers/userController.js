import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs';
import path from 'path';

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber, email } = req.body;

    const userExists = await User.findOne({ email, username });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!req.file) res.status(400).json({ msg: 'The image is not exist' });

    const createdUser = await User.create({
      fullName,
      email,
      username,
      password: hashedPassword,
      phoneNumber,
      avatar:
        req.file.filename !== 'undefined'
          ? {
              data: req.file.filename,
              contentType: req.file.mimetype,
            }
          : {
              data: path.basename('../uploads/avatar.png'),
              contentType: path.extname('../uploads/avatar.png'),
            },
    });
    return res.status(201).send(createdUser);
  } catch (e) {
    console.log(e.message);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'User does not exist.' });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ msg: 'Wrong password' });
    if (req.session.user) {
      return res.status(200).json({ msg: 'You are already logged in' });
    } else {
      req.session.user = {
        user,
      };
      res.status(200).json(req.session.user);
    }
  } else res.send(401);
};

export const logout = async (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.status(201).json({ msg: 'Successfully logged out' });
  } else {
    res.status(400).json({ msg: 'You are already logged out' });
  }
};
