let initState = {
    "played": 0,
    "wins": 0,
    "losses": 0,
    "perc": 0
}

const ticReducer = (state = initState, action) => {
    let perc;
    switch(action.type){
        case 'TIC/WIN':
            perc = Math.round((state["wins"]+1)/(state["played"]+1)*100)
            return {...state, "played":state["played"]+1, "wins":state["wins"]+1, "perc":perc}
        case 'TIC/LOSS':
            perc = Math.round((state["wins"])/(state["played"]+1)*100)
            return {...state, "played":state["played"]+1, "losses":state["losses"]+1, "perc":perc}
        default:
            return state 
    }
}

export default ticReducer;