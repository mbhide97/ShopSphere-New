// import React from "react"; 

// import axios from 'axios'

// let api=axios.create({
//     baseURL:"http://localhost:5000/api",
//         // baseURL: "https://shopsphere-new-backend.onrender.com/api",

//     headers:{
//       "content-type":"application/json"
//     }
// })

// api.interceptors.request.use(
//     (config)=>{
//         let token=localStorage.getItem("token")

//         if(token){
//             config.headers.Authorization=`Bearer ${token}`
//         }

//         return config
//     },(error)=>{
//          return Promise.reject(error)
//     }
    
// )

// export default api;


import axios from "axios";

let api = axios.create({
    // baseURL: "https://shopsphere-new-backend.onrender.com/api",
    baseURL:"https://shopsphere-new-backend.onrender.com/api",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
