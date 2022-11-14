import axiosConfig from "axios";

export const axiosClient = axiosConfig.create({
    baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
});
