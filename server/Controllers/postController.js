import Post from '../Models/postModel.js';
import User from '../Models/userModel.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    const reversedPosts = posts.reverse();
    res.status(200).json(reversedPosts);

    res.on('close', () => {
      console.log('client dropped me');
    });
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};

export const newPost = async (req, res) => {
  try {
    const { title, content, tags, authorId, authorName, username } = req.body;
    await Post.create(
      {
        authorId,
        authorName,
        username,
        title,
        content,
        tags,
      },
      (err, post) => {
        if (err) res.status(400).json({ msg: err.message });
        User.findById(req.session.user.user._id, (err, user) => {
          if (err) {
            res.status(400).json({ msg: 'AuthorId is not correct' });
          } else {
            user.posts.push(post);
            user.save();
            res.json(post);
          }
        });
      }
    );
  } catch (e) {
    res.status(404).json({ msg: e.message });
  }
};

export const deletePosts = async (req, res) => {
  if (req.body.userId === req.body.authorId) {
    if (req.body.postId) {
      Post.findByIdAndDelete(req.body.postId, (err) => {
        err ? res.json(err) : res.json('Post is deleted successfully');
      });
      User.posts.findByIdAndDelete(req.body.postId, (err) => {
        err ? res.json(err) : res.json('Post is deleted successfully');
      });
    }
    if (req.body.userId) {
      Post.deleteMany({ authorId: req.body.userId }, (err) => {
        err ? res.json(err) : res.json('Posts are deleted successfully');
      });
      User.posts.deleteMany({ authorId: req.body.userId }, (err) => {
        err ? res.json(err) : res.json('Posts are deleted successfully');
      });
    }
  }
};
