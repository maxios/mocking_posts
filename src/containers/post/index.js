import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom';

const post_by_id = post_id => post => post_id == post.id

const Post = props => {
  const { post_id } = props.match.params;
  const post = useSelector(state => state.posts.data.find(post_by_id(post_id)));

  return post ? (
    <div className="post__container bp3-card .bp3-elevation-3">
      <div className="post__header">
        <div className="post__close-icon">
          <Link to='/'>
            <Icon icon="cross" />
          </Link>
        </div>
      </div>
      <h1> { post.title } </h1>
      <p> { post.body } </p>
      <div className="post__actions">
        <div className="post__action-button">
          <Button text='Edit' icon='edit'/>
        </div>
        <div className="post__action-button">
          <Button text='Delete' icon='delete' intent='Danger'/>
        </div>
      </div>
    </div>
  ): null
}

export default Post;
