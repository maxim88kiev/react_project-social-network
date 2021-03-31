import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e57fee85-fdc2-49ab-8efe-26f668ccf4b9"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId){
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`/follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {

    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updatesStatus(status){
        return instance.put(`profile/status`, {status: status});
    }

};

export const authAPI = {
    me(){
        instance.get(`/auth/me`)
    }
};