import {create_faculty, delete_faculty, get_List_faculty, update_faculty} from "../../API/apiUrl";
import {store} from "../store";
import axios from "axios";
import swal from "sweetalert"
import qs from "qs"

export const FETCH_LIST_FACULTY = 'FETCH_LIST_FACULTY'
export const FETCH_FACULTY_STOP = 'FETCH_FACULTY_STOP'
export const FETCH_FACULTY_START = 'FETCH_FACULTY_START'

export function fetchListFaculty() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": get_List_faculty,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCH_FACULTY_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCH_LIST_FACULTY,
                    payload: r.data
                })
                await dispatch({
                    type: FETCH_FACULTY_STOP
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

export function changeCreateFaculty(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": create_faculty,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r => {
                await swal({
                    title: 'Success',
                    icon: 'success',
                    text: 'Create faculty successful.'
                })
                await dispatch({
                    type: FETCH_LIST_FACULTY,
                    payload: r.data
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Create faculty error.'
                })
            })
    }
}

export function changeDeleteFaculty(id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${delete_faculty}/${id}`,
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
                            text: 'Delete faculty successful.'
                        })
                        await dispatch({
                            type: FETCH_LIST_FACULTY,
                            payload: r.data
                        })
                    }).catch(async err => {
                        await swal({
                            title: 'Error',
                            icon: 'error',
                            text: 'Delete faculty error.'
                        })
                    })
            }
        })

    }
}

export function changeUpdateFaculty(form,id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${update_faculty}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r => {
                await swal({
                    title: 'Success',
                    icon: 'success',
                    text: 'Update faculty successful.'
                })
                await dispatch({
                    type: FETCH_LIST_FACULTY,
                    payload: r.data
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Update faculty error.'
                })
            })
    }
}