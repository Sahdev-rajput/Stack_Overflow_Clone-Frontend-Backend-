import axios from "axios"

const API=axios.create({baseURL: "http://localhost:5000"})

// You create an Axios instance with a base URL of "http://localhost:5000".

// An interceptor is added to the Axios instance using API.interceptors.request.use(). Interceptors allow you to intercept and modify requests before they are sent.

// Inside the interceptor function, it checks if there is an item with the key 'Profile' in the local storage. If such an item exists, it means that a user is logged in, and their authentication token is stored in the 'Profile' key in local storage.

// If a user is logged in (i.e., 'Profile' is present in local storage), it adds an "Authorization" header to the request. This header contains the user's token retrieved from the 'Profile' item in local storage, and it's prefixed with "Bearer". This is a common way to authenticate requests on the server side using a token-based authentication system.

// Finally, the interceptor function returns the modified request, which allows the request to proceed with the added authorization header.

// It's worth noting that this code assumes that you have a user profile with a token stored in local storage, and it uses that token to authenticate API requests. If there's no 'Profile' in local storage, no authorization header will be added to the request. Additionally, you might want to include error handling for cases where the token is invalid or expired.
API.interceptors.request.use((req)=>{
if(localStorage.getItem('Profile'))
{
    req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
}
//console.log(req);
return req;
})
// s used to import the Axios library in a JavaScript or Node.js environment. 
//Axios is a popular and widely used library for making HTTP requests, such as GET, POST, PUT, DELETE, etc., from your JavaScript or Node.js applications.
// It simplifies the process of sending and receiving data from a server or API.

export const logIn=(authData)=>API.post('/user/login',authData);
export const signUp=(authData)=>API.post('/user/signup',authData);

export const postQuestion=(questionData)=>API.post("/questions/Ask",questionData);
export const getAllQuestions=()=>API.get("/questions/get");
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`questions/vote/${id}`,{value,userId});

export const postAnswer=(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{id,answerId,noOfAnswers});


export const fetchAllUsers=()=>API.get("/user/getAllUsers");


export const updateProfile=(id,updateData)=>API.patch(`/user/update/${id}`,updateData);
// export const loginHistory=(HistoryData)=>API.post("/user/history",HistoryData);
// export const getHistory=()=>API.get("/user/history/get");