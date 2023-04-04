import * as Actions from "redux/constant/constants"
import { request } from "../request"


export const fetchUserInformation = (email) => (dispatch) => {
    return request(`User/GetUserByEmailId/${email}`, "GET", {})
        .then((response) => {
            dispatch({
                type: Actions.USER_INFO_SUCCESS,
                payload: response.Data
            })

            return Promise.resolve(response.Data)
        })
        .catch((error) => {
            dispatch({
                type: Actions.USER_INFO_FAIL,
                payload: error
            })
        })
}