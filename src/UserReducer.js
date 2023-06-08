import { createSlice } from "@reduxjs/toolkit";
import {UserList} from './Data';
const userSlice=createSlice({
    name:"users",
    initialState: {
      userList: UserList,
      filteredUsers: [],
    },
    reducers:{
addUser:(state,action)=>{
    console.log(action)
    state.userList.push(action.payload)
},
updateUser:(state,action)=>{
    console.log("update",action.payload)
const{id,name,phoneno,email,status,organizationname}=action.payload;
const uu=state.userList.find(user=>user.id==id);
if(uu){
    uu.name=name;
    uu.email=email;
    uu.status=status;
    uu.phoneno=phoneno;
    uu.organizationname=organizationname;
}
},
searchUsers: (state, action) => {
  const { username, phoneno, status } = action.payload;
  console.log("payload", action.payload);

  state.filteredUsers = [...state.userList];
  const filtered = state.filteredUsers.filter((user) => {
    if (username && user.name !== username) {
      return false;
    }
    if (phoneno && user.phoneno !== phoneno) {
      return false;
    }
    if (status) {
      if (status === 'Active' && user.status !== 'Active') {
        return false;
      }
      if (status === 'InActive' && user.status !== 'InActive') {
        return false;
      }
    }
    return true;
  });
  console.log("filter", state.filteredUsers);
  state.filteredUsers.splice(0, state.filteredUsers.length, ...filtered);
},
  

    }
})
export const {addUser,updateUser,searchUsers}=userSlice.actions;
export default userSlice.reducer;