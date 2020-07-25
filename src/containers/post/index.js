import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '@blueprintjs/core'
import { Link, useHistory } from 'react-router-dom';
import { delete_post } from '../../actions/posts';

const post_by_id = post_id => post => post_id == post.id

const Post = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { post_id } = props.match.params;
  const post = useSelector(state => state.posts.data.find(post_by_id(post_id)));
  const handleDeletePost = () => {
    dispatch(delete_post(post.id))
    history.push('/');
  }

  const handleEditPost = () => {
    history.push(`/post/${post.id}/update`)
  }

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
          <Button onClick={handleEditPost} text='Edit' icon='edit'/>
        </div>
        <div className="post__action-button">
          <Button onClick={handleDeletePost} text='Delete' icon='delete' intent='Danger'/>
        </div>
      </div>
    </div>
  ): null
}

export default Post;
