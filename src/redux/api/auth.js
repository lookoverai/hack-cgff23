import {Request} from "./index.js";

export const getUserInfo = async () => await Request("POST","user/info");
