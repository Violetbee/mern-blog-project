import mongoose from 'mongoose';

const CommentModel = mongoose.Schema({
  authorId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  content: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  postId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', CommentModel);
export default Comment;
