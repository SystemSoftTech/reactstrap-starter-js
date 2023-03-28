import { ActionType } from "@store/constant"

const user = localStorage.getItem("currentUser")

const initialState = user
  ? { isLoggedIn: true, token: user }
  : { isLoggedIn: false, token: "" }

const authReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token
      }
    case ActionType.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null
      }
    case ActionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null
      }
    default:
      return state
  }
}

export default authReducer
