import {UserType} from "../models/user";

let currentUserState:UserType

const setCurrentUserState=(user:UserType)=>{
    currentUserState=user;
}
const getCurrentUserState=():UserType=>{
    return currentUserState;
}

export {
    getCurrentUserState,
    setCurrentUserState
}