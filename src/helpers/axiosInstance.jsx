import axios from "axios";
const axiosInstance = axios.create({
    baseURL : "https://pefachurch.pythonanywhere.com/api",
    headers : {
        //incase you have access token its here
    "Content-Type":"application/json"
    }
})

export default axiosInstance