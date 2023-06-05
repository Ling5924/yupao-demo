import myAxios from "../plugins/myAxios";
import {getCurrentUserState, setCurrentUserState} from "../states/user";
export const getCurrentUser=async ()=>{

    // const currentUser=getCurrentUserState()
    // if (currentUser){
    //     return currentUser
    // }else {
    //     router.replace('/user/login')
    // }
    const res = await myAxios.get('/user/current')
    if (res.code===0){
        setCurrentUserState(res.data);
        return res.data
    }
    return null

}