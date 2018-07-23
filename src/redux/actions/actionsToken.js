import qs from "qs";
import axios from "axios";
import swal from "sweetalert"
import {fetchAdminProfile} from "./profileActions";
import {post_admin_login} from "../../API/apiUrl";
export const LOGIN_ADMIN_ERR = 'LOGIN_ADMIN_ERR'
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'
export const DESTROY_TOKEN = 'DESTROY_TOKEN'

export function loginToAdmin(form){
    return Login(form)
}

//func
function Login(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": post_admin_login,
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": qs.stringify(form)
        }
        axios(settings)
            .then(async r => {
                await dispatch(fetchAdminProfile(r.data.access_token))
            }).catch(async err => {
                await swal({
                    title : "Error",
                    icon : 'error',
                    text : 'Login fails.',
                    button : 'Close'
                })
                await dispatch({
                    type: LOGIN_ADMIN_ERR,
                    payload : err
                })
            })
    }
}


