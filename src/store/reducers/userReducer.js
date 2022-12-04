import users from "../../database/users.json"

let initState = users;

const userReducer = (state = initState, action) => {
    switch(action.type){
        case "USER/ENTER":
            return [...state, action.value]
        case "USER/UPDATE":
            const index = state.findIndex(user => user.uName === action.curr)
            const newArray = [...state]
            newArray[index] = {...newArray[index], "fName": action.value.fName, "lName": action.value.lName, "email": action.value.email, "password": action.value.password, "passwordConfirm": action.value.passwordConfirm};
            console.log(newArray);
            return newArray;
        default:
            return state;
    }
}

export default userReducer;