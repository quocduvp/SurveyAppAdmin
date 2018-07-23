import {store} from "../store";
import {
    create_answer_choice,
    create_question, delete_answer_choice,
    delete_question, update_answer_choice,
    update_question
} from "../../API/apiUrl";
import qs from 'qs';
import axios from "axios";
import {
    FETCHED_DETAILS_SURVEYS,
} from "./surveysActions";
import swal from 'sweetalert'

export function createQuestion(form) {
    return CreateQues(form);
}

export function updateQuestion(form,id) {
    return UpdateQues(form,id);
}

export function deleteQuestion(id) {
    return DeleteQues(id);
}

//
function CreateQues(form) {
    return async dispatch => {
        const settings = await {
            "url": `${create_question}`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data" : qs.stringify(form)
        };
        await axios(settings).then(async r=>{
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            });
        }).catch(async err=>{
            await swal({
                title : "Error",
                icon : "error",
                text : "Create fails."
            })
        })
    }
}

function UpdateQues(form,id) {
    return async dispatch => {
        const settings = await {
            "url": `${update_question}/${id}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data" : qs.stringify(form)
        };
        await axios(settings).then(async r=>{
            await swal({
                title : 'Success',
                icon : 'success',
                text : 'Update question successful.'
            })
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            });
        }).catch(async err=>{
            await swal({
                title : "Error",
                icon : "error",
                text : "Update fails."
            })
        })
    }
}

function DeleteQues(id) {
    return async dispatch => {
        const settings = await {
            "url": `${delete_question}/${id}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await axios(settings).then(async r=>{
            await swal({
                title : 'Success',
                icon : 'success',
                text : 'Delete question successful.'
            })
            await dispatch({
                type : FETCHED_DETAILS_SURVEYS,
                payload : r.data
            });
        }).catch(async err=>{
            await swal({
                title : "Error",
                icon : "error",
                text : "Delete fails."
            })
        })
    }
}

//func answer
export function CreateAnswer(form,idQuestion) {
    return async dispatch => {
        const settings = await {
            "url": `${create_answer_choice}/${idQuestion}/choice`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data" : qs.stringify(form)
        };
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCHED_DETAILS_SURVEYS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Create answer fails.'
                })
            })
    }
}
export function DeleteAnswer(idQuestion, idAnswer) {
    return async dispatch => {
        const settings = await {
            "url": `${delete_answer_choice}/${idQuestion}/choice/${idAnswer}`,
            "method": "DELETE",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCHED_DETAILS_SURVEYS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Delete answer fails.'
                })
            })
    }
}
export function UpdateAnswer(form,idQuestion, idAnswer) {
    return async dispatch => {
        const settings = await {
            "url": `${update_answer_choice}/${idQuestion}/choice/${idAnswer}`,
            "method": "PUT",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data" : qs.stringify(form)
        };
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCHED_DETAILS_SURVEYS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Update answer fails.'
                })
            })
    }
}

//func answer text (default)
export function createQuestionText(form) {
    return async dispatch => {
        const settings = await {
            "url": `${create_question}`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            },
            "data" : qs.stringify(form)
        };
        await axios(settings).then(async r=>{
           await dispatch(CreateAnswerText(r.data.questions.id))
        }).catch(async err=>{
            await swal({
                title : "Error",
                icon : "error",
                text : "Create fails."
            })
        })
    }
}
function CreateAnswerText(idQuestion) {
    return async dispatch => {
        const settings = await {
            "url": `${create_answer_choice}/${idQuestion}/text`,
            "method": "POST",
            "headers": {
                "Authorization": `bearer ${store.getState().accessToken.accessToken}`,
            }
        };
        await axios(settings)
            .then(async r=>{
                await dispatch({
                    type : FETCHED_DETAILS_SURVEYS,
                    payload : r.data
                })
            }).catch(async err=>{
                await swal({
                    title : 'Error',
                    icon : 'error',
                    text : 'Create answer fails.'
                })
            })
    }
}