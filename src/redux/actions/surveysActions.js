import Axios from "axios";
import {
    get_list_survey_publish,
    get_list_survey_unpublish,
    get_list_survey_text,
    get_list_survey_choice,
    get_list_survey_deleted,
    get_publish_survey,
    delete_survey,
    get_restore_survey,
    get_details_survey,
    update_survey,
    upload_thumb,
    create_new_survey
} from "../../API/apiUrl";
import {
    store
} from '../store'
import swal from 'sweetalert'
import qs from 'qs'
export const FETCHED_ALL_SURVEYS_START = "FETCHED_ALL_SURVEYS_START"
export const FETCHED_ALL_SURVEYS_STOP = "FETCHED_ALL_SURVEYS_STOP"
export const FETCHED_ALL_SURVEYS = "FETCHED_ALL_SURVEYS"
export const FETCHED_DETAILS_SURVEYS = "FETCHED_DETAILS_SURVEYS"
export const CHANGE_PAGE_SIZE = "CHANGE_PAGE_SIZE"
export const NEXT_PAGES_SURVEYS = "NEXT_PAGES_SURVEYS"
export const PREVEUS_PAGES_SURVEYS = "PREVEUS_PAGES_SURVEYS"
export const FETCHED_SURVEYS_ERR = "FETCHED_SURVEYS_ERR"
export const CHANGE_TITLE_SURVEY = 'CHANGE_TITLE_SURVEY'
export const CHANGE_DESCRIPTION_SURVEY = 'CHANGE_DESCRIPTION_SURVEY'
export const CHANGE_DATE_START_SURVEY = 'CHANGE_DATE_START_SURVEY'
//fetchlish
export function fetchListSurveysPublish() {
    return getListSurveysPublish(1, 10)
}
export function fetchListSurveysUnpublish() {
    return getListSurveysUnpublish(1, 10)
}
export function fetchListSurveysDeleted() {
    return getListSurveysDeleted(1, 10)
}
export function fetchListSurveysText() {
    return getListSurveysText(1, 10)
}
export function fetchListSurveysChoice() {
    return getListSurveysChoice(1, 10)
}
//end

//panigation page
export function nextPagesSurveys(surveyType) {
    return async dispatch => {
        await dispatch({
            type: NEXT_PAGES_SURVEYS
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (surveyType === 'text')
            await dispatch(getListSurveysText(page, pageSize))
        else if (surveyType === 'choice')
            await dispatch(getListSurveysChoice(page, pageSize))
        else if (surveyType === 'unpublish')
            await dispatch(getListSurveysUnpublish(page, pageSize))
        else if (surveyType === 'deleted')
            await dispatch(getListSurveysDeleted(page, pageSize))
        else
            await dispatch(getListSurveysPublish(page, pageSize))
    }
}

export function preveusPagesSurveys(surveyType) {
    return async dispatch => {
        await dispatch({
            type: PREVEUS_PAGES_SURVEYS
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (surveyType === 'text')
            await dispatch(getListSurveysText(page, pageSize))
        else if (surveyType === 'choice')
            await dispatch(getListSurveysChoice(page, pageSize))
        else if (surveyType === 'unpublish')
            await dispatch(getListSurveysUnpublish(page, pageSize))
        else if (surveyType === 'deleted')
            await dispatch(getListSurveysDeleted(page, pageSize))
        else
            await dispatch(getListSurveysPublish(page, pageSize))
    }
}

export function changePageSize(size, surveyType) {
    return async dispatch => {
        await dispatch({
            type: CHANGE_PAGE_SIZE,
            payload: size
        })
        let page = await store.getState().accounts.page
        let pageSize = await store.getState().accounts.pageSize
        if (surveyType === 'text')
            await dispatch(getListSurveysText(page, pageSize))
        else if (surveyType === 'choice')
            await dispatch(getListSurveysChoice(page, pageSize))
        else if (surveyType === 'unpublish')
            await dispatch(getListSurveysUnpublish(page, pageSize))
        else if (surveyType === 'deleted')
            await dispatch(getListSurveysDeleted(page, pageSize))
        else
            await dispatch(getListSurveysPublish(page, pageSize))
    }
}
//

//publish/unpublish survey
export function changePublishSurveys(id) {
    return publishSurveys(id)
}
//delete survey
export function changeDeleteSurveys(id, surveyType) {
    return deletedSurveys(id,surveyType)
}
//restore survey
export function changeRestoreSurveys(id) {
    return restoreSurveys(id)
}

//fetch detais survey
export function fetchDetailsSurvey(id) {
    return getDetailsSurvey(id)
}


//form begin
export function changeTitleSurvey(title) {
    return {
        type : CHANGE_TITLE_SURVEY,
        payload : title
    }
}
export function changeDescriptionSurvey(description) {
    return {
        type : CHANGE_DESCRIPTION_SURVEY,
        payload : description
    }
}
export function changeDateStartSurvey(date_start) {
    return {
        type : CHANGE_DATE_START_SURVEY,
        payload : date_start
    }
}

export function updateSurvey(id) {
    return UpdateSuveys(id)
}
//form end

//
//survey publish
function getListSurveysPublish(page, pageSize) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_survey_publish}?page=${page}&page_size=${pageSize}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        })
        await Axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            })
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_SURVEYS_ERR,
                payload : err
            })
            await swal({
                title : 'Error',
                icon : 'error',
                text : err,
                buttons : 'Close'
            })
        })
    }
}

//survey unpublish
function getListSurveysUnpublish(page, pageSize) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_survey_unpublish}?page=${page}&page_size=${pageSize}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        })
        await Axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            })
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_SURVEYS_ERR,
                payload : err
            })
            await swal({
                title : 'Error',
                icon : 'error',
                text : err,
                buttons : 'Close'
            })
        })
    }
}

//survey text
function getListSurveysText(page, pageSize) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_survey_text}?page=${page}&page_size=${pageSize}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        })
        await Axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            })
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_SURVEYS_ERR,
                payload : err
            })
            await swal({
                title : 'Error',
                icon : 'error',
                text : err,
                buttons : 'Close'
            })
        })
    }
}

//survey choice
function getListSurveysChoice(page, pageSize) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_survey_choice}?page=${page}&page_size=${pageSize}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        })
        await Axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            })
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_SURVEYS_ERR,
                payload : err
            })
            await swal({
                title : 'Error',
                icon : 'error',
                text : err,
                buttons : 'Close'
            })
        })
    }
}

//survey deleted
function getListSurveysDeleted(page, pageSize) {
    return async dispatch => {
        const settings = await {
            "async": true,
            "crossDomain": true,
            "url": `${get_list_survey_deleted}?page=${page}&page_size=${pageSize}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        }
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        })
        await Axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            });
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            });
        }).catch(async err=>{
            await dispatch({
                type : FETCHED_SURVEYS_ERR,
                payload : err
            });
            await swal({
                title : 'Error',
                icon : 'error',
                text : err,
                buttons : 'Close'
            })
        })
    }
}

//publish/unpublish surveys
function publishSurveys(id) {
    return async dispatch => {
        const settings = await {
            "url": `${get_publish_survey}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await Axios(settings).then(async r=>{
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            })
        }).catch(async err=>{
            await swal({
                title :'Error',
                icon : 'error',
                text : "Publish/unpublish fails."
            })
        })
    }
}
//delete surveys
function deletedSurveys(id, surveyType) {
    return async dispatch => {
        const settings = await {
            "url": `${delete_survey}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await swal({
            title : 'Warning',
            icon : 'warning',
            text : 'Are you sure ?',
            buttons: true,
            dangerMode: true
        }).then(async value => {
            if(value){
                await Axios(settings).then(async r=>{
                    await swal({
                        title :'Success',
                        icon : 'success',
                        text : r.data
                    });
                    if(surveyType === 'unpublish'){
                        await dispatch(getListSurveysUnpublish(1,10))
                    }else if(surveyType === 'text'){
                        await dispatch(getListSurveysText(1,10))
                    }else if(surveyType === 'choice'){
                        await dispatch(getListSurveysChoice(1,10))
                    }else {
                        await dispatch(getListSurveysPublish(1,10))
                    }
                }).catch(async err=>{
                    await swal({
                        title :'Error',
                        icon : 'error',
                        text : err
                    })
                })
            }
        })

    }
}
//restore survey
function restoreSurveys(id){
    return async dispatch => {
        const settings = await {
            "url": `${get_restore_survey}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        });
        await Axios(settings).then(async r=> {
            await dispatch({
                type : FETCHED_ALL_SURVEYS,
                payload : r.data
            });
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(err=>{
            swal({
                title : 'Error',
                icon : 'error',
                text : err.Message
            })
        })
    }
}

export function UploadThumbSurveys(form,id) {
    return async dispatch => {
        const settings = await {
            "url": `${upload_thumb}/${id}`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "mimeType": "multipart/form-data",
            "data": form
        };
        await Axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCHED_DETAILS_SURVEYS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Upload thumb fails.'
                })
            })
    }
}

//get Details survey
export function getDetailsSurvey(id) {
    return async dispatch => {
        const settings = await {
            "url": `${get_details_survey}/${id}`,
            "method": "GET",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await dispatch({
            type : FETCHED_ALL_SURVEYS_START
        });
        await Axios(settings).then(async r=>{
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            });
            await dispatch({
                type : FETCHED_ALL_SURVEYS_STOP
            })
        }).catch(err=>{
            swal({
                title : 'Error',
                icon : 'error',
                text : err.Message
            }).then(v=>{
                window.history.back()
            })
        })
    }
}

//update survey
function UpdateSuveys(id) {
    return async dispatch => {
        const settings = await {
            "url": `${update_survey}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data": qs.stringify({
                "title": store.getState().surveys.details.title,
                "description": store.getState().surveys.details.description,
                "date_start": store.getState().surveys.details.date_start
            })
        };
        await Axios(settings).then(async r=>{
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                icon : 'error',
                text : 'Edit survey error.'
            })
        })
    }
}

//create survey
export function  CreateNewSurveys(form) {
    return async dispatch => {
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": create_new_survey,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            "data": qs.stringify(form)
        }
        await Axios(settings)
            .then(async r=>{
                await swal({
                    title : 'Success',
                    icon : 'success',
                    text : 'Create surveys successful.'
                })
                await dispatch(fetchListSurveysUnpublish())
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Create surveys fails.'
                })
        })
    }
}