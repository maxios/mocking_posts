import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@blueprintjs/core'
import { Link } from 'react-router-dom';

const post_by_id = post_id => post => post_id == post.id

const Post = props => {
  const { post_id } = props.match.params;
  const post = useSelector(state => state.posts.data.find(post_by_id(post_id)));

  return post ? (
    <div className="post__container bp3-card .bp3-elevation-3">
      <div className="post__header">
        <Link to='/'>
          <Icon icon="cross" />
        </Link>
      </div>
      <h1> {post.body} </h1>
    </div>
  ): null
}

export default Post;
