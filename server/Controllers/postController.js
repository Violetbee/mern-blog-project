import { response } from 'express';
import mongoose from 'mongoose';
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

export const getPostsById = async (req, res) => {
  try {
    if (req.params.userid) {
      User.findById(req.params.userid, (err, user1) =>
        err ? response.status(400).json(err) : res.status(200).json(user1.posts)
      );
    }
  } catch (e) {
    res.status(400).json({ msg: e });
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
  if (req.body.postId) {
    Post.findByIdAndDelete(req.body.postId, (err) => {
      err ? res.json(err) : res.json('Post is deleted successfully');
    });
    User.posts.findByIdAndDelete(req.body.postId, (err) => {
      err ? res.json(err) : res.json('Post is deleted successfully');
    });
  }
};

export const handleLike = async (req, res) => {
  try {
    User.findById(req.session.user.user._id, (err, user) => {
      err
        ? res.json(err)
        : Post.findById(req.body.postId, (err, post) => {
            if (user.likedPosts.indexOf(req.body.postId) === -1) {
              user.likedPosts.push(post._id);
              post.likes++;
              user.save();
              post.save();
              res.status(200).json('okey');
            } else {
              const index = user.likedPosts.indexOf(req.body.postId);
              user.likedPosts.splice(index, 1);
              post.likes--;
              user.save();
              post.save();
              res.status(200).json('no');
            }
          });
    });
  } catch (e) {
    console.log(e);
  }
};
