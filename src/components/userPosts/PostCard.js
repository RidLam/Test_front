import * as React from 'react';

const PostCard = ({
  post,
  openDetailModal
}) => {
  return (
    <div className="post_card" onClick={() => openDetailModal(post)}>
      <div className="post_title">
        <h3>{post.title}</h3>
      </div>
      <div className="post_body">
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostCard;