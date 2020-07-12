import {UserActions} from "../reducers/actions/UserActions"

const initialStore ={
    User:{}
}

const UserReducer = (state = initialStore, action) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return {...state, User:action.payload?.contactPerson}
        default:
          return state
      }
  };

export default UserReducer;