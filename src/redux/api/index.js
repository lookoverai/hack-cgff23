import axios from "axios";
const BASE_URI = 'http://localhost:5000';


export const Request = async(method="GET", path, data=null) => {
    try {
        let response = await axios({
            method: method,
            url: `${BASE_URI}/${path}`,
            data
        })

        return await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
