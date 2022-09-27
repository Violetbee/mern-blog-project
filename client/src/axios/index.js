import axios from 'axios';

const HTTP = axios.create({
  baseURL: '/api',
});

export const login = async (formData) =>
  await HTTP.post('/users/signin', formData);

export const getPosts = async () => await HTTP.get('/posts');

export const sendPost = async (formData) =>
  await HTTP.post('/posts/create', formData);

export const logout = async () => {
  await HTTP.post('/users/logout');
};

export const signUp = async (formData) =>
  await HTTP.post('/users/signup', formData);

export const likePost = async (formData) =>
  await HTTP.post('/posts/like', formData);
