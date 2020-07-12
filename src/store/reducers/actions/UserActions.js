export const UserActions={
    SET_USER : 'SET_USER'
}


export const setUser = (content) => {
    return {
    type: UserActions.SET_USER,
    payload: {
      content:{...content}
    }
}};