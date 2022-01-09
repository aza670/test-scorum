const initialState = {
    loading: false,
    data: {},
    error: false
}

// eslint-disable-next-line default-param-last
export const cardsReducer = (state = initialState, action) =>{
    switch (action.type){
        case "FETCH_CARDS":
            return {...state, loading: true}
        case "FETCH_CARDS_SUCCESS":
            return {...state, loading: false, data: action.payload}
        case "FETCH_CARDS_FAILED":
            return {...state, loading: false, error: true}
        default:
            return state
    }
}