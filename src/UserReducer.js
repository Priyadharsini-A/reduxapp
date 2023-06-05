import { createSlice } from "@reduxjs/toolkit";
import {UserList} from './Data';
const userSlice=createSlice({
    name:"users",
    initialState:UserList,
    reducers:{
addUser:(state,action)=>{
    console.log(action)
    state.push(action.payload)
},
updateUser:(state,action)=>{
const{id,name,phoneno,email,status,organizationname}=action.payload;
const uu=state.find(user=>user.id==id);
if(uu){
    uu.name=name;
    uu.email=email;
    uu.status=status;
    uu.phoneno=phoneno;
    uu.organizationname=organizationname;
}
}
    }
})
export const {addUser,updateUser}=userSlice.actions;
export default userSlice.reducer;