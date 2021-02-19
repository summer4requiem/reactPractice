// DAL LEVEL
import * as axios from 'axios';
const NEWS_URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=9b6487bc6e49451aa9ab17e3076854e4`;

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': `63833407-6dd6-4311-aa68-fc403e60b1a9`
    }
});

export const NewsAPI = {
    getNews: () => {
        return axios.get(NEWS_URL);
    }
}

NewsAPI.getNews();

export const UsersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUser: (userId) => {
        return axiosInstance.post(`follow/${userId}`).then(response => {
            return response.data.resultCode === 0 ? response.data : ``;
        });
    },
    unFollowUser: (userId) => {
        return axiosInstance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode === 0 ? response.data : ``;
        });
    },
}

export const AuthAPI = {
    getAuth: () => {
        return axiosInstance.get(`auth/me`);
    },

    logIn: (email, password, rememberMe, captcha) => {
        let params = {
            email,
            password,
            rememberMe,
            captcha,
        }
        return axiosInstance.post(`auth/login`, params);
    },

    logOut: () => {
        return axiosInstance.delete(`auth/login`);
    }
}

export const ProfileAPI = {
    getProfile: (userId = 2) => {
        return axiosInstance.get(`profile/${userId}`);
    },
    getStatus: (userId) => {
        return axiosInstance.get(`profile/status/${userId}`);
    },
    updateStatus: (status) => {
        return axiosInstance.put(`profile/status/`, {
            status: status
        });
    }
}