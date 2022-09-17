import mongoose from 'mongoose';

const PostModel = mongoose.Schema({
  authorId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  authorName: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  content: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  tags: {
    type: mongoose.SchemaTypes.String,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    default: new Date(),
  },
});

const Post = mongoose.model('post', PostModel);

export default Post;
