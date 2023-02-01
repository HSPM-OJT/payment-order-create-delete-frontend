import { getUserStatus,fetchUser,selectAllUser,getUserError } from "./userSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Profile from "./Profile";
function UserList(){
    const userStatus= useSelector(getUserStatus)
    const users = useSelector(selectAllUser)
    const error = useSelector(getUserError)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(userStatus=== 'idle'){
            dispatch(fetchUser())
        }
    },[userStatus,dispatch])
    let content;
        
    if(userStatus === 'Loading'){
        content = (<p>Loading....</p>)
    }
    if(userStatus === 'succeeded'){
        content = users.map(
            (user)=>(
                <Profile 
                    fname={users.fname}
                    lname={users.lname}
                    email={users.email}
                    phoneNumber={user.phoneNumber}
                />
            )
        );
    }
    if (userStatus === 'failed'){
        content = (<p>{error}</p>)
    }
    return content;
}
export default UserList;