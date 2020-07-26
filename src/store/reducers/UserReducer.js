import {UserActions} from "../reducers/actions/UserActions"

const initialStore ={
    User:{}
}

const UserReducer = (state = initialStore, action) => {
    switch (action.type) {
        case UserActions.SET_USER:
            console.log('action.payload==',action.payload)
            return {...state, User:action.payload}
        case UserActions.SET_UNCONFIRMED_USER:
            console.log('action.payload==',action.payload)
            return {...state, unconfirmedusers:action.payload}
        default:
          return state
      }
  };

export default UserReducer;