import { auth , register, login } from '../../firebase'

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
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
    )
}

// membuat function ut menghandel login , dan proses asyn
export const loginUserAPI = (data) => (dispatch) => {

    // Membuat Promise
    return new Promise((resolve,reject) => {
        // melakukan dispatch ut merubah type dan value sebelum mengirimkan API
        dispatch({type: 'CHANGE_LOADING', value: true})
    
        login(auth,data.email, data.password)
        .then(res => {
            // Membuat variabale menampung dataUser dari firebase
            const dataUser = {
                email: res.user.email,
                uid : res.user.uid,
                emailVerified: res.user.emailVerified,
            }

            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            // Menangkap value dari response firebase
            dispatch({type: 'CHANGE_USER', value: dataUser})
            resolve(true)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value: false})
            reject(false)
        })
    })
}