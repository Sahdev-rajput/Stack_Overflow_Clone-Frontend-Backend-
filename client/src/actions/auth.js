import * as api from "../api"
import { setCurrentUser } from "./currentUser"

//The line import * as api from "../api" is an ES6 module import statement in JavaScript. It is used to import all exports from the module located at the relative path "../api" and store them in a single object called api.

//Here's what each part of the statement does:

//import: This keyword is used to import functionality from another module or file.

//*: The asterisk (*) is a wildcard that tells the import statement to import all exports from the target module.

//as api: This part of the statement gives a name to the object that contains all the exports from the "../api" module. In this case, it's named api, so you can access the exports from the api module through the api object.

//"../api": This is the relative path to the module that you want to import exports from. In this case, it's a module located one level up in the directory hierarchy with the name "api".

//After importing in this way, you can access the exports from the "../api" module by prefixing them with api.
export const signup=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        //storing in the REDUX
        navigate('/')
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

export const login=(authData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.logIn(authData)
        dispatch({type:'AUTH',data})
        navigate('/')
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}