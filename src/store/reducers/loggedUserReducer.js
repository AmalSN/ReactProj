let initState = "";

const loggedUserReducer = (state = initState, action) => {
    switch(action.type){
        case "USER/CURRENT":
            return action.value
        default:
            return state;
    }
}

export default loggedUserReducer;