// DAL LEVEL
import * as axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': `63833407-6dd6-4311-aa68-fc403e60b1a9`
    }
});

export const UsersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data);
    },
    followUser: (userId) => {
        return axiosInstance.post(`follow/${userId}`, {}).then(response => {
            return response.data.resultCode === 0 ? response.data : ``;
        });
    },
    unFollowUser: (userId) => {
        return axiosInstance.delete(`follow/${userId}`, {}).then(response => {
            return response.data.resultCode === 0 ? response.data : ``;
        });
    },
}

export const AuthAPI = {
    getAuth: () => {
        return axiosInstance.get(`auth/me`, {});
    }
}

export const ProfileAPI = {
    getProfile: (userId) => {
        return axiosInstance.get(`profile/${userId}`, {});
    }
}