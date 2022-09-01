import csrfFetch from "./csrf";

const RECEIVE_CURRENT_USER = 'users/RECEIVE_CURRENT_USER'
const REMOVE_CURRENT_USER = 'users/REMOVE_CURRENT_USER'

export const receiveCurrentUser = user =>({
  type: RECEIVE_CURRENT_USER,
  user
})

export const removeCurrentUser = (user) => ({
  type: REMOVE_CURRENT_USER,
  user
});


export const loginUser =  (user) => async (dispatch) => {
   let res = await csrfFetch('/api/session',{
    method: 'POST',
    body: JSON.stringify(user)
   }).then((res) => res.json()).then((res) => dispatch(receiveCurrentUser(res)))
   .catch((err) => alert(err));
}
const currentUser = sessionStorage.getItem('currentUser')
let initialState;
if (currentUser){
  initialState = {user: JSON.parse(currentUser)}
} else{
  initialState = { user: null}
}

export const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = { ...state }
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return {...newState,...action.user}
    case REMOVE_CURRENT_USER:
    newState = {user: null}
    return newState
    default:
      return newState;
  }
}

// session reducer is only one slice of state 