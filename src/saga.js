import { takeEvery, put, call } from "redux-saga/effects";

function* fatchApi(action){
    try{
        const result = yield call(()=>{
            return fetch(action.payload.url).then(res => res.json())
        })
        console.log(action.payload.fn, action.payload.url); 
        yield put({type: "SUCCESS", payload:{result: result, fn: action.payload.fn}})
    }catch(error){
        console.error(error);
        yield put({type: "FAILED"})
    }
}

export default function* pendigBtnSaga(){
    yield takeEvery("PENDING", fatchApi)
}