// let createOrder=async(orderdata)=>{
//     let response=await API.post('/orders',orderdata)
//     return response.data
// }

// export default createOrder;


// import api from "../api/axios";

let createOrder = async (orderdata) => {
    try {
        let response = await api.post("/orders", orderdata);
        return response.data;
    } catch (error) {
        console.log("Create Order Error:", error.response?.data || error.message);
        throw error;
    }
};

export default createOrder;
