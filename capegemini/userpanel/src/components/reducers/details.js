

const detailsReducer = (state={details: null},action)=>{
    switch(action.type){
        case "GET_USERS": 
        return {...state, details: action.payload}
        default: 
        return state
    }
}

export default detailsReducer