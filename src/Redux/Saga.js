import {all, put, takeLatest } from 'redux-saga/effects'

const loginRequest= function*({payload}){
    try {
        if( payload.email !== '5' || payload.password !== '5')  {
            throw new Error("Email hoặc mật khẩu không đúng.")
        } else{
            yield put({type: 'LOGIN_SUCCESS'})   
        }
    } catch(error){
        yield put({type: 'LOGIN_FAILURE', payload: error.message})
    }
}
function* loginSaga() {
    yield takeLatest('LOGIN_REQUEST',loginRequest)
}
export default function* rootSaga() {
    yield all([
        loginSaga(),
    ]);
}