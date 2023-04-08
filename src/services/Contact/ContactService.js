// Helpers
import axios from "../../helpers/axiosInstance";
import contactServiceConfig from "./ContactConfig";

// POST - auth/login
export async function writeExcel(payload) {
    try {
        let response = await axios.post(`/${contactServiceConfig.excelSheet}`, payload);
        return response;
    } catch (error) {
        throw Error(error);
    }
};
