import { combineReducers } from "redux";

const TOGGLE_MODAL = 'TOGGLE_MODAL';
const ADD_MODAL = 'ADD_MODAL';

export const toggleModal = (id) =>({
  type: TOGGLE_MODAL,
  id
})
export const addModal = (id) =>({
  type: ADD_MODAL,
  id
})

// export const toggleModalVisibility = (id) => async dispatch => {

// }

// ui: {
//   modal : {
//     modal1 : {modal_id : id,
//     visible : false},
//     modal2 : {
//       modal_id : id,
//       visible : true,
//     }
//   }
// }

// const someOtherUiFeatureReducer = (state = {}, action)=>{
//   Object.freeze(state);
//   const newState = {...state};
//   switch (action.type){
//     case ADD_MODAL:
//       let result = modalsReducer(newState.modals, action);
//       return {...newState,
//       modals: result}
//     default:
//     return newState
//   }
// }

export const modalsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case TOGGLE_MODAL:
      newState[action.id].visible
        ? (newState[action.id].visible = false)
        : (newState[action.id].visible = true);
    return {...newState}
    default:
      return newState;
  }
};

export const preloadedModals = {
  ui: {
    modals: {
      1: {
        id: 1,
        visible: false,
      },
    },
  },
};

const uiReducer = combineReducers({
  modals: modalsReducer,
})

export default uiReducer;