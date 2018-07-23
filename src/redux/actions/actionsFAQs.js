import {store} from "../store";
import {create_faqs, list_faqs, remove_faqs, update_faqs} from "../../API/apiUrl";
import axios from "axios";
import swal from 'sweetalert'
import qs from 'qs'
export const FETCHED_LIST_FAQS = "FETCHED_LIST_FAQS"
export const FETCHED_FAQS_START = "FETCHED_FAQS_START"
export const FETCHED_FAQS_STOP = "FETCHED_FAQS_STOP"

export function fetchListFAQs() {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": list_faqs,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type : FETCHED_FAQS_START
        })
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type: FETCHED_LIST_FAQS,
                    payload : r.data
                })
                await dispatch({
                    type : FETCHED_FAQS_STOP
                })
            }).catch(async err=>{
                await swal({
                   title : 'Error',
                   text : 'Fetch error',
                   icon : 'error'
                })
            })
    }
}

export function changeCreateFAQs(form) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": create_faqs,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            },
            "data" : qs.stringify(form)
        }
        await axios(settings)
            .then(async r=>{
                await swal({
                    title : 'Success',
                    icon : 'success',
                    text : 'Create FAQs successful.'
                })
                await dispatch({
                    type: FETCHED_LIST_FAQS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Create FAQs fails.'
                })
            })
    }
}

export function changeUpdateFAQs(form,id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${update_faqs}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            },
            "data": qs.stringify(form)
        }
        await axios(settings)
            .then(async r=>{
                await swal({
                    title : 'Success',
                    icon : 'success',
                    text : 'Update FAQs successful.'
                })
                await dispatch({
                    type: FETCHED_LIST_FAQS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Update FAQs fails.'
                })
            })
    }
}

export function changeDeleteFAQs(id) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${remove_faqs}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            },
        }
        await axios(settings)
            .then(async r=>{
                await swal({
                    title : 'Success',
                    icon : 'success',
                    text : 'Delete FAQs successful.'
                })
                await dispatch({
                    type: FETCHED_LIST_FAQS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Delete FAQs fails.'
                })
            })
    }
}