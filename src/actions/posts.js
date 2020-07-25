import axios from 'axios';

const LIST_POSTS = 'posts/list'
const DELETE_POST = 'post/delete'

const list_posts = () => {
  return dispatch => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
      .then(res => {
        dispatch({
          type: LIST_POSTS,
          payload: res.data
        })
      })
  }
}

const delete_post = id => {
  return dispatch => {
    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`
    })
      .then(res => {
        dispatch({
          type: DELETE_POST,
          payload: res.data
        })
      })
  }
}

export {LIST_POSTS, DELETE_POST}
export {list_posts, delete_post}
