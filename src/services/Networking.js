import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

export const getUsers = () =>
  new Promise((resolve, reject) => {
    axios.get(base_url + 'users')
    .then(players => {
      if (!players) resolve([]);
      resolve(players.data);
    })
    .catch(() => {
      reject(`Error getting users, please try again later`);
    });
  });

export const getUserPosts = (userId) =>
  new Promise((resolve, reject) => {
    axios.get(base_url + `posts?userId=${userId}`)
    .then(posts => {
      if (!posts) resolve({});
      resolve(posts.data);
    })
    .catch(() => {
      reject(`Error getting posts for user id : ${userId}, please try again later`);
    });
  });

  export const getPostComments = (postId) =>
    new Promise((resolve, reject) => {
      axios.get(base_url + `comments?postId=${postId}`)
      .then(comments => {
        if (!comments) resolve({});
        resolve(comments.data);
      })
      .catch(() => {
        reject(`Error getting commets for post id : ${postId}, please try again later`);
      });
  });

  export const getUser = (userId) =>
    new Promise((resolve, reject) => {
      axios.get(base_url + `users/${userId}`)
      .then(user => {
        if (!user) resolve({});
        resolve(user.data);
      })
      .catch(() => {
        reject(`Error getting user with id : ${userId}, please try again later`);
      });
  });