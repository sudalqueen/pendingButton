import {PENDING, SUCCESS, FAILED} from '../actions/ActionTypes';
import {combineReducers} from 'redux';

const pendigButtonState = {
    isPending: false,
    isSuccess: false,
    isFailed: false,
    buttonMsg: "CLICK ME!"
}

const Pending = ()=>{
    return {...pendigButtonState, isPending: true, isSuccess: false, buttonMsg: "Loading..."}
}

const Succeed = (result, fn)=>{
    fn(result.message);
    return {...pendigButtonState, isPending: false, isSuccess: true, buttonMsg: "SUCCESS"};
}

const Failed = ()=>{
    return {...pendigButtonState, isPending: false, isSuccess: false, isFailed: true, buttonMsg: "FAILED!!"};
}

const pendingButton = (state = pendigButtonState, action)=>{
    switch(action.type){
        case PENDING:
            return Pending(action.payload.url, action.payload.fn);
        case SUCCESS:
            return Succeed(action.payload.result, action.payload.fn);
        case FAILED:
            return Failed();
        default:
            return state;
    }
}

const pendigButtonApp = combineReducers({
    pendingButton
});

export default pendigButtonApp;