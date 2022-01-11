import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { getUser, getUserPosts } from '../../services/Networking';
import '../../styles/Posts.css';

const PostCard = lazy(() => import('./PostCard'));
const PostDetailModal = lazy(() => import('./PostDetailModal'));
const AddPostModal = lazy(() => import('../addPost/AddPostModal'));

const UserPosts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(async () => {
    const userId = params.id;
    const posts = await getUserPosts(userId);
    const user = await getUser(userId);
    if (posts.length) {
      setPosts(posts);
    }
    setUser(user);
  }, []);

  const openDetailModal = (post) => {
    setOpenModal(true);
    setSelectedPost(post);
  };

  const closeDetailModal = () => {
    setOpenModal(false);
  }

  const closeAddPostModal = () => {
    setOpenAddModal(false);
  }

  const createPost = async (post) => {
    const postToCreate = post;
    postToCreate.userId = user.id;
    postToCreate.id = posts.length + 200;
    posts.push(postToCreate);
    setPosts(posts);
    closeAddPostModal()
  }

  return (
    <>
      <div className="post_header_info">
        <h3>{`${user.name} posts:`}</h3>
        <Button
          variant="contained"
          size="small"
          onClick={() => setOpenAddModal(true)}
        >
          Add new post
        </Button>
      </div>
      <div className="post_row">
        {
          posts && posts.length > 0 &&
          posts.map(post => {
            return(
              <div
                className="post_column"
                key={post.id}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <PostCard
                    post={post}
                    openDetailModal={openDetailModal}
                  />
                </Suspense>
              </div>
            )
          })
        }
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetailModal
          openModal={openModal}
          post={selectedPost}
          closeModel={closeDetailModal}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AddPostModal
          openModal={openAddModal}
          closeModel={closeAddPostModal}
          createPost={createPost}
        />
      </Suspense>
    </>
  );
};

export default UserPosts;