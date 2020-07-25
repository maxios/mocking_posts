import axios from 'axios';

const LIST_POSTS = 'posts/list'

const list_posts = () => {
  return dispatch => {
    console.log('dispatch action')
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

export {LIST_POSTS}
export {list_posts}
