import axios from "axios";
import swal from "sweetalert"
import {createHashHistory} from 'history'
import {get_admin_profile, reset_password_admin} from "../../API/apiUrl";
import {RECEIVE_TOKEN} from "./actionsToken";
import {store} from "../store";
import qs from 'qs'
export const FETCH_ADMIN_PROFILE = 'FETCH_ADMIN_PROFILE'
export const FETCH_ADMIN_PROFILE_ERR = 'FETCH_ADMIN_PROFILE_ERR'
export const CHECK_ADMIN = 'CHECK_ADMIN'
const hist = createHashHistory()
export function fetchAdminProfile(token) {
    return fetchAdmin(token)
}

//func
function fetchAdmin(token) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": get_admin_profile,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${token}`,
            }
        }
        await axios(settings)
            .then(async r=>{
                if(r.data.role_id === 0){
                    await dispatch({
                        type : RECEIVE_TOKEN,
                        payload : token
                    })
                    await dispatch({
                        type : CHECK_ADMIN
                    })
                    await dispatch({
                        type : FETCH_ADMIN_PROFILE,
                        payload : r.data
                    })
                    await sessionStorage.setItem('token', token)
                    hist.push('/')
                }else {
                    await sessionStorage.clear()
                    hist.push('/login')
                }
            }).catch(async err=>{
                await dispatch({
                    type: FETCH_ADMIN_PROFILE_ERR,
                    payload: err
                })
                await swal({
                    title : "Error",
                    icon : 'error',
                    text : 'Account unauthentication.',
                    button : 'Close'
                })
            })
    }
}

//
export function resetAccountAdmin(form) {
    return async dispatch => {
        var settings = await {
            "async": true,
            "crossDomain": true,
            "url": reset_password_admin,
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,

            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r=>{
                await sessionStorage.removeItem('token')
                await swal({
                    title: 'Success',
                    icon : 'success',
                    text : 'Reset password successful.'
                })
                window.location.href = '/login'
            }).catch(async err=>{
                await swal({
                    title: 'Error',
                    icon : 'error',
                    text : 'Reset password fails.'
                })
            })
    }
}

