export const UserActions={
    SET_USER : 'SET_USER',
    SET_UNCONFIRMED_USER: 'SET_UNCONFIRMED_USER'
}


export const setUser = (content) => {
    return {
    type: UserActions.SET_USER,
    payload: {
      content:{...content}
    }
}};

export const setUnconfirmedUserList = (content) => {
  return {
  type: UserActions.SET_UNCONFIRMED_USER,
  payload: content
}};