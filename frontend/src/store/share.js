

import csrfFetch from "./csrf"

const ADD_SHARE = "ADD_SHARE";
const LOAD_SHARE = "LOAD_SHARE";
const RANDOM_SHARE = "RANDOM_SHARE";

export const addShare = (share) => ({
  type: ADD_SHARE,
  share,
});

export const loadShare = (share_id) => ({
  type: LOAD_SHARE,
  share_id,
});

export const randomShare = (share) => ({
  type: RANDOM_SHARE,
  share
});

export const getShare = (share_id) => async (dispatch) => {
  const response = await csrfFetch(`/api/shares/${share_id}`);
  if (response.ok) {
    const share = await response.json();
    dispatch(loadShare(share));
  }
};

export const getRandomShare = () => async (dispatch) => {
  const response = await csrfFetch(`/api/shares/random`);
    const share = await response.json();
    dispatch(randomShare(share));
  
};

export const createShare = (data) => async (dispatch) => {
  //need to handle default user in the back end in controller
  const response = await csrfFetch(`/api/shares`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const newShare = await response.json();
    dispatch(addShare(newShare));
  }
};

let initialState = {};

export default function shareReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_SHARE:
    case LOAD_SHARE: //coming in with share id from back end
      const newShare = { [action.share_id]: action.share }; //how do i have access to share when i'm not sending it back?
      return { ...newState, ...newShare };
    case RANDOM_SHARE:
      return {...action.share} ;
    default:
      return newState;
  }
}
