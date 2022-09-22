import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://localhost:5001',
});

export const login = async (formData) =>
  await HTTP.post('/users/signin', formData);

export const getPosts = async () => await HTTP.get('/posts');

export const logout = async () => {
  await HTTP.post('/logout');
};

export const signUp = async (formData) =>
  await HTTP.post('/users/signup', formData);
