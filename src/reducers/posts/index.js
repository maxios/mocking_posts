import {LIST_POSTS, DELETE_POST, UPDATE_POST} from '../../actions/posts'

const initialState = {
  data: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LIST_POSTS:
      return {
        ...state,
        data: payload
      }

    case DELETE_POST:
      return {
        ...state,
        data: state.data.filter(post => post.id !== payload.id)
      }

    case UPDATE_POST:
      return {
        ...state,
        data: state.data.map(post => post.id == payload.id ? {...post, ...payload} : post)
      }
    default:
      return state
  }
}
