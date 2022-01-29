
import * as API from "../api/index"

export const usersignin = (formdata,history)=> async(dispatch) =>{
  try {
      const {data} = await API.usersignin(formdata)
      dispatch({type: "AUTH",payload:data})
      history.push('/')
   
  } catch (error) {
      console.log(error)
  }
}

export const usersignup = (formdata,history)=> async(dispatch)=>{
    try {
        const {data} = await API.usersignup(formdata)
        console.log(data)
      dispatch({type: "AUTH",payload: data})
        history.push('/')
    } catch (error) {
     console.log(error)   
    }
}
export const logout = ()=> async(dispatch)=>{
  try {
    dispatch({type:"LOGOUT"})

  } catch (error) {
    console.log(error)
  }
}

// export const getuser = ()=> async(dispatch)=>{
//   try {
//     const user = await API.getusers()
//    dispatch({type:'GET_USERS',payload: user})
//     console.log(user)
//   } catch (error) {
//    console.log(error) 
//   }
// }