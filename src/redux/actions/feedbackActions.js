import {store} from "../store";
import axios from "axios";
import swal from "sweetalert"
import {list_feeback_checked, list_feeback_unchecked, remove_feedback, update_check_feedback} from "../../API/apiUrl";
export const FETCH_FEEDBACK_STOP = "FETCH_FEEDBACK_STOP"
export const FETCH_FEEDBACK_START = "FETCH_FEEDBACK_START"
export const FETCH_FEEDBACK_CHECK = "FETCH_FEEDBACK_CHECK"
export const FETCH_FEEDBACK_UNCHECK = "FETCH_FEEDBACK_UNCHECK"

export function fetchListFeedbackChecked() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": list_feeback_checked,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type:  FETCH_FEEDBACK_START
        })
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type:  FETCH_FEEDBACK_CHECK,
                    payload : r.data
                })
                await dispatch({
                    type:  FETCH_FEEDBACK_STOP
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Fetch list error.'
                })
            })
    }
}
export function fetchListFeedbackUnChecked() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": list_feeback_unchecked,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type:  FETCH_FEEDBACK_UNCHECK,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Fetch list error.'
                })
            })
    }
}
export function viewFeedback(id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${update_check_feedback}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCH_FEEDBACK_CHECK,
                    payload : r.data
                })
                await dispatch(fetchListFeedbackUnChecked())
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'View feedback fails.'
                })
            })
    }
}
export function removeFeedback(id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${remove_feedback}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCH_FEEDBACK_CHECK,
                    payload : r.data
                })
                await dispatch(fetchListFeedbackUnChecked())
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'View feedback fails.'
                })
            })
    }
}