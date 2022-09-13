import { Router } from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs';

const router = Router();

router.get('/', (req, res) => {
  res.send('this is users page');
});

router.post('/signup', async (req, res) => {
  try {
    const { fullName, password, phoneNumber, email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    return res.status(201).send(createdUser);
  } catch (e) {
    console.log(e);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User does not exist.' });
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect)
    return res.status(400).json({ msg: 'Wrong password' });
  return res.status(200).json(user, { msg: 'Authentication successful' });
});

export default router;
