const userUpdate = (value,currUser) => {
    return {
        type: "USER/UPDATE",
        value: value,
        curr: currUser
    }
}

export default userUpdate;