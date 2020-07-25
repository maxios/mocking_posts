import axios from 'axios';

const LIST_POSTS = 'posts/list'
const DELETE_POST = 'post/delete'
const UPDATE_POST = 'post/update'

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

const update_post = (id, data) => {
  return dispatch => {
    axios({
      method: 'put',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      data
    })
      .then(res => {
        dispatch({
          type: UPDATE_POST,
          payload: res.data
        })
      })
  }
}

export {LIST_POSTS, DELETE_POST, UPDATE_POST}
export {list_posts, delete_post, update_post}
