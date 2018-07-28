import {
    change_status_account,
    delete_account, get_details_account,
    get_list_account,
    get_list_account_deny,
    get_list_account_staff,
    get_list_account_student, reset_password_account
} from "../../API/apiUrl";
import axios from "axios";
import swal from "sweetalert";
import {store} from "../store";
import qs from 'qs'

export const FETCHED_ALL_USER_START = "FETCHED_ALL_USER_START"
export const FETCHED_ALL_USER_STOP = "FETCHED_ALL_USER_STOP"
export const FETCHED_ALL_USER = "FETCHED_ALL_USER"
export const FETCHED_DETAILS_USER = "FETCHED_DETAILS_USER"
export const CHANGE_PAGE_SIZE = "CHANGE_PAGE_SIZE"
export const NEXT_PAGES_USER = "NEXT_PAGES_USER"
export const PREVEUS_PAGES_USER = "PREVEUS_PAGES_USER"
export const FETCHED_USER_ERR = "FETCHED_USER_ERR"

export function fetchListAccount() {
    return getListAccounts(1, 10)
}

export function fetchListAccoutnDeny() {
    return getListAccountsDeny(1, 10)
}

export function fetchListAccoutnStaff() {
    return getListAccountsStaff(1, 10)
}

export function fetchListAccoutnStudent() {
    return getListAccountsStudent(1, 10)
}

//reset password for account
export function resetPasswordAccount(form, idAccount) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${reset_password_account}/${idAccount}`,
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
                    text: 'Reset password for account successful.'
                })
                await dispatch({
                    type: FETCHED_DETAILS_USER,
                    payload: r.data
                })
            }).catch(async err => {
                await swal({
                    title: 'Error',
                    icon: 'error',
                    text: 'Reset password for account fails.'
                })
            })
    }
}

export function nextPagesUser(role) {
    return async dispatch => {
        await dispatch({
            type: NEXT_PAGES_USER
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (role === 'deny')
            await dispatch(getListAccountsDeny(page, pageSize))
        else if (role === 'staff')
            await dispatch(getListAccountsStaff(page, pageSize))
        else if (role === 'student')
            await dispatch(getListAccountsStudent(page, pageSize))
        else
            await dispatch(getListAccounts(page, pageSize))
    }
}

export function preveusPagesUser(role) {
    return async dispatch => {
        await dispatch({
            type: PREVEUS_PAGES_USER
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (role === 'deny')
            await dispatch(getListAccountsDeny(page, pageSize))
        else if (role === 'staff')
            await dispatch(getListAccountsStaff(page, pageSize))
        else if (role === 'student')
            await dispatch(getListAccountsStudent(page, pageSize))
        else
            await dispatch(getListAccounts(page, pageSize))
    }
}

export function changePageSize(size, role) {
    return async dispatch => {
        await dispatch({
            type: CHANGE_PAGE_SIZE,
            payload: size
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (role === 'deny')
            await dispatch(getListAccountsDeny(page, pageSize))
        else if (role === 'staff')
            await dispatch(getListAccountsStaff(page, pageSize))
        else if (role === 'student')
            await dispatch(getListAccountsStudent(page, pageSize))
        else
            await dispatch(getListAccounts(page, pageSize))
    }
}

//delete acount
export function deleteAccount(id, currentPage) {
    return deleteAccounts(id, currentPage)
}

//get details accoount
export function getDetailsAccount(id) {
    return DetailsAccount(id)
}

//get status accoount
export function getStatusAccount(id) {
    return StatusAccount(id)
}


//func
function getListAccounts(page, page_size) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_account}?page=${page}&page_size=${page_size}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCHED_ALL_USER_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_ALL_USER,
                    payload: r.data
                })
                await dispatch({
                    type: FETCHED_ALL_USER_STOP
                })
            }).catch(async err => {
                await dispatch({
                    type: FETCHED_USER_ERR,
                    payload: err
                })
            })
    }
}

function getListAccountsDeny(page, page_size) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_account_deny}?page=${page}&page_size=${page_size}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCHED_ALL_USER_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_ALL_USER,
                    payload: r.data
                })
                await dispatch({
                    type: FETCHED_ALL_USER_STOP
                })
            }).catch(async err => {
                await dispatch({
                    type: FETCHED_USER_ERR,
                    payload: err
                })
            })
    }
}

function getListAccountsStaff(page, page_size) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_account_staff}?page=${page}&page_size=${page_size}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCHED_ALL_USER_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_ALL_USER,
                    payload: r.data
                })
                await dispatch({
                    type: FETCHED_ALL_USER_STOP
                })
            }).catch(async err => {
                await dispatch({
                    type: FETCHED_USER_ERR,
                    payload: err
                })
            })
    }
}

function getListAccountsStudent(page, page_size) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_account_student}?page=${page}&page_size=${page_size}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type: FETCHED_ALL_USER_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_ALL_USER,
                    payload: r.data
                })
                await dispatch({
                    type: FETCHED_ALL_USER_STOP
                })
            }).catch(async err => {
                await dispatch({
                    type: FETCHED_USER_ERR,
                    payload: err
                })
            })
    }
}

//delete account
function deleteAccounts(id, currentPage) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${delete_account}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await swal({
            icon: 'warning',
            title: 'Warning',
            text: 'Are you sure?',
            buttons: true,
            dangerMode: true,
        }).then(async v => {
            if (v) {
                await axios(settings)
                    .then(async r => {
                        await swal({
                            icon: 'success',
                            title: 'Success',
                            text: r.data.message
                        })
                        if (currentPage === 'deny')
                            await dispatch(fetchListAccoutnDeny())
                        else if (currentPage === 'staff')
                            await dispatch(fetchListAccoutnStaff())
                        else if (currentPage === 'student')
                            await dispatch(fetchListAccoutnStudent())
                        else
                            await dispatch(fetchListAccount())
                    }).catch(async err => {
                        await swal({
                            icon: 'error',
                            title: 'Error',
                            text: err.data.Message
                        })
                    })
            }
        })
    }
}

//get details accoount(
function DetailsAccount(id) {
    return async dispatch => {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `${get_details_account}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type: FETCHED_ALL_USER_START
        })
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_DETAILS_USER,
                    payload: r.data
                })
                await dispatch({
                    type: FETCHED_ALL_USER_STOP
                })
            }).catch(async err => {
                await swal({
                    text: err,
                    title: 'Error',
                    icon: 'error'
                })
            })
    }
}

//get details accoount(
function StatusAccount(id) {
    return async dispatch => {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `${change_status_account}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await axios(settings)
            .then(async r => {
                await dispatch({
                    type: FETCHED_DETAILS_USER,
                    payload: r.data
                })
            }).catch(async err => {
                await swal({
                    text: err.Message,
                    title: 'Error',
                    icon: 'error'
                })
            })
    }
}