import {store} from "../store";
import axios from "axios";
import swal from "sweetalert"
import qs from "qs"
import {get_List_classroom} from "../../API/apiUrl";
import {create_classroom} from "../../API/apiUrl";
import {delete_classroom} from "../../API/apiUrl";
import {update_classroom} from "../../API/apiUrl";

export const FETCH_LIST_CLASSROOM = 'FETCH_LIST_CLASSROOM'
export const FETCH_CLASSROOM_STOP = 'FETCH_CLASSROOM_STOP'
export const FETCH_CLASSROOM_START = 'FETCH_CLASSROOM_START'

export function fetchListClassroom() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": get_List_classroom,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCH_CLASSROOM_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCH_LIST_CLASSROOM,
                    payload: r.data
                })
                await dispatch({
                    type: FETCH_CLASSROOM_STOP
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Fetch list error.'
                })
            })
    }
}

export function changeCreateClassroom(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": create_classroom,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data": qs.stringify(form)
        }
        await dispatch({
            type: FETCH_CLASSROOM_START
        })
        await axios(settings)
            .then(async r => {
                await swal({
                    title: 'Success',
                    icon: 'success',
                    text: 'Create classroom successful.'
                })
                await dispatch({
                    type: FETCH_LIST_CLASSROOM,
                    payload: r.data
                })
                await dispatch({
                    type: FETCH_CLASSROOM_STOP
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Create classroom error.'
                })
            })
    }
}

export function changeDeleteClassroom(id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${delete_classroom}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await swal({
            title: 'Warning',
            icon: 'warning',
            text: 'Are you sure ?',
            buttons: true,
            dangerMode: true
        }).then(async value => {
            if (value) {
                await axios(settings)
                    .then(async r => {
                        await swal({
                            title: 'Success',
                            icon: 'success',
                            text: 'Delete classroom successful.'
                        })
                        await dispatch({
                            type: FETCH_LIST_CLASSROOM,
                            payload: r.data
                        })
                    }).catch(async err => {
                        await swal({
                            title: 'Error',
                            icon: 'error',
                            text: 'Delete classroom error.'
                        })
                    })
            }
        })

    }
}

export function changeUpdateClassroom(form,id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${update_classroom}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data": qs.stringify(form)
        }
        await dispatch({
            type: FETCH_CLASSROOM_START
        })
        await axios(settings)
            .then(async r => {
                await swal({
                    title: 'Success',
                    icon: 'success',
                    text: 'Update classroom successful.'
                })
                await dispatch({
                    type: FETCH_LIST_CLASSROOM,
                    payload: r.data
                })
                await dispatch({
                    type: FETCH_CLASSROOM_STOP
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: `Update classroom error.`
                })
            })
    }
}