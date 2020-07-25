import {LIST_POSTS} from '../../actions/posts'

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
    default:
      return state
  }
}
