import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import {list_posts} from './actions/posts'

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.data)

  useEffect(() => {
    dispatch(list_posts())
  }, [])

  return (
    <div className="posts__conainer">
      {
        posts.map(post => (
          <p>{post.title}</p>
        ))
      }
    </div>
  );
}

export default App;
