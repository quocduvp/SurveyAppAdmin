import swal from 'sweetalert'
import axios from 'axios'
import { store } from '../store';
import { get_list_report_account } from '../../API/apiUrl';
const FETCH_REPORT_ACCOUNT = 'FETCH_REPORT_ACCOUNT'
const FETCH_START = 'FETCH_START'
const FETCH_STOP = 'FETCH_STOP'
const initialState = {
    lists : [],
    fetched : true
}

export const reportReducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case FETCH_REPORT_ACCOUNT:
            return{
                ...state, lists : actions.payload
            }
        case FETCH_START:
            return{
                ...state, fetched : true
            }
        case FETCH_STOP:
            return{
                ...state, fetched : false
            }
        default:
           return state
    }
}

export function fetchListReports(){
    return async dispatch=>{
        let settings = await {
            "async": true,
            "crossDomain": true,
            "url": get_list_report_account,
            "method": "GET",
            "headers": {
              "Authorization": `bearer ${store.getState().accessToken.accessToken}`
            }
        }
        await dispatch({
            type : FETCH_START
        })
        await axios(settings)
        .then(async r=>{
            await dispatch({
                type : FETCH_REPORT_ACCOUNT,
                payload : r.data
            })
            await dispatch({
                type : FETCH_STOP
            })
        }).catch(async err=>{
            await swal({
                title : 'Error',
                text : 'Fetch fails.',
                icon : 'error'
            })
        })
    }
}