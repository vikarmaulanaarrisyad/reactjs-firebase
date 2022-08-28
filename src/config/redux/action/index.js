import { auth , register } from '../../firebase'

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({
            type: 'CHANGE_USER', 
            value: 'Vikar Maulana Arrisyad'
        })
    }, 2000);
}

// membuat function ut menghandel register , dan proses asyn
export const registerUserAPI = (data) => (dispatch) => {
    // melakukan dispatch ut merubah type dan value sebelum mengirimkan API
    dispatch({type: 'CHANGE_LOADING', value: true})

    return (
        register(auth,data.email, data.password)
        .then(res => {
            console.log('response: ', res)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode , errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
    )
}