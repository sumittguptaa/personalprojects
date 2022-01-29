
import * as API from "../api/index"

export const adminsignin = (formdata,history)=> async(dispatch) =>{
  try {
      const {data} = await API.adminsignin(formdata)
      dispatch({type: "AUTH",payload:data})
      history.push('/')
   
  } catch (error) {
      console.log(error)
  }
}

export const adminsignup = (formdata,history)=> async(dispatch)=>{
    try {
        const {data} = await API.adminsignup(formdata)
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

export const getuser = ()=> async(dispatch)=>{
  try {
    const user = await API.getusers()
   dispatch({type:'GET_USERS',payload: user})
    console.log(user)
  } catch (error) {
   console.log(error) 
  }
}