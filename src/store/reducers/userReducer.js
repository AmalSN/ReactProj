import users from "../../database/users.json"

let initState = users;

const userReducer = (state = initState, action) => {
    switch(action.type){
        case "USER/ENTER":
            return [...state, action.value]
        default:
            return state;
    }
}

export default userReducer;