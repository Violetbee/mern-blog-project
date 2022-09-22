import mongoose from 'mongoose';

const UserModel = mongoose.Schema({
  fullName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  phoneNumber: {
    type: mongoose.SchemaTypes.String,
  },
  userType: {
    type: mongoose.SchemaTypes.String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
  avatar: {
    data: mongoose.SchemaTypes.String,
    contentType: mongoose.SchemaTypes.String,
  },
  posts: {
    type: mongoose.SchemaTypes.Array,
  },
  comments: {
    type: mongoose.SchemaTypes.Array,
  },
});

const User = mongoose.model('User', UserModel);
export default User;
