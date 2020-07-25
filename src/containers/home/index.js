import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {list_posts} from '../../actions/posts';
import { Button } from '@blueprintjs/core'

const Home = props => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.data);

  useEffect(() => {
    dispatch(list_posts())
  }, [])

  return (
    <div className="posts__conainer">
      <div className="grid grid-pad">
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`}>
            <div className="posts__card bp3-card bp3-elevation-3 col-1-5">
              <p>{post.title}</p>
            </div>
          </Link>
        ))
      }
      </div>
    </div>
  );
}

export default Home;
