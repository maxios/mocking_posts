import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {list_posts} from '../../actions/posts';

const Home = props => {

  useEffect(() => {
    props.list_posts()
  }, [])

  return (
    <div className="posts__conainer">
      <div className="grid grid-pad">
      {
        props.posts.map(post => (
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

const mapStateToProps = state => ({
  posts: state.posts.data
})

const mapDispatchToProps = dispatch => ({
  list_posts: () => dispatch(list_posts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
