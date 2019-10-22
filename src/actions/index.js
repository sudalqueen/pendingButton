import { PENDING, SUCCESS } from './ActionTypes';

export function Pending(url, fn){
    return{
        type: PENDING,
        payload: {url, fn}
    };
}

export function Succeed(result, fn){
    return{
        type: SUCCESS,
        payload: {result, fn}
    };
}