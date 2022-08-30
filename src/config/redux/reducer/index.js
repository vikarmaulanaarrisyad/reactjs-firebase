// Membuat default value State
const initialState = {
    popup: false,
    isLogin: false,
    isLoading: false,
    user: {}
  }
  
  // Reducer : Kumpulan aksi ut merubah store
  const reducer = (state=initialState, action) => {
    if(action.type === 'CHANGE_POPUP') {
      return {
        // Copy value dari state
        ...state,
        
        // Rubah bagian popup
        popup: action.value
      }
    }
   
    if(action.type === 'CHANGE_ISLOGIN') {
      return {
        // Copy value dari state
        ...state,
  
        // Rubah bagian popup
        isLogin: action.value
      }
    }

    if (action.type === 'CHANGE_USER') {
      return {
        ...state,
        user: action.value
      }
    }

    if (action.type === 'CHANGE_LOADING') {
      return {
        ...state,
        isLoading: action.value
      }
    }

    return state
  }

  export default reducer