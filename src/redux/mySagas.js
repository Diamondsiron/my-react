import { call, put, takeEvery, retry } from 'redux-saga/effects'

const UserService = {
    login(name) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(name==='1'){
                    resolve({name:'1'})
                } else {
                    reject('err')
                }
            }, 100)
        })
    }
}

function* loginHandle(action) {
    try {
        yield put({type:'requestLogin'})
        const res = yield call(UserService.login,action.name)
        yield put({type:'requestSuccess',res})
    } catch (error) {
        yield put({type:'requestFailure',error})
    }
}
//connet调取的props是login sage监听login 然后saga执行副作用调取reduecrs 把副作用的逻辑抽取出来 单一职责
function* mySaga() {
    yield takeEvery('login',loginHandle)
}

export default mySaga