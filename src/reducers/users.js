const users = (state = {status: undefined, list: []}, action) => {
  switch(action.type){
      case 'FETCH_USERS':
          return Object.assign({}, state, {status: 'fetching'})
      case 'FETCH_USERS_SUCCESS':
          return Object.assign({}, state, {status: 'success', list: action.item})
      default:
          return state;
  }
}

export default users;