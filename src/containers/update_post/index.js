import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Icon, Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom';
import { update_post } from '../../actions/posts';

const post_by_id = post_id => post => post_id == post.id

const UpdatePost = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { post_id } = props.match.params;
  const post = useSelector(state => state.posts.data.find(post_by_id(post_id)));
  const [title, changeTitle] = useState(post.title)
  const [body, changeBody] = useState(post.body)
  const handleTitleChange = e => {
    changeTitle(e.target.value);
  }

  const handleBodyChange = e => {
    changeBody(e.target.value);
  }

  const handleSave = () => {
    dispatch(update_post(post.id, {title, body}))
    history.goBack()
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
      <div className="bp3-form-group .modifier">
        <label className="bp3-label" htmlFor="form-group-input">
          Title
        </label>
        <div className="bp3-form-content">
          <div className="bp3-input-group .modifier">
            <input id="form-group-input" onChange={handleTitleChange} value={title} type="text" className="bp3-input" dir="auto" />
          </div>
        </div>
      </div>
      <div className="bp3-form-group .modifier">
        <label className="bp3-label" htmlFor="form-group-input">
          Body
        </label>
        <div className="bp3-form-content">
          <div className="bp3-input-group .modifier">
            <input id="form-group-input" onChange={handleBodyChange} value={body} type="text" className="bp3-input" dir="auto" />
          </div>
        </div>
      </div>
      <div className="post__actions">
        <div className="post__action-button">
          <Button onClick={handleSave} text='Save' icon='tick'/>
        </div>
      </div>
    </div>
  ): null
}

export default UpdatePost;
