import { useApi } from "@/composables/useApi";
import type { User, UsersRequest } from "../types";

const { request } = useApi();

export const getUsers = (query: string = '') => {
    const url = query ? `/users?${query}` : '/users';
    return request<UsersRequest>(url);
};

export const getSearchedUsers = (query: string) => request<UsersRequest>(`/users/search?${query}`);

export const deleteUserData = (id: number) => request(`/users/${id}`, { method: "DELETE" });

export const addNewUser = (data: Partial<User>) => request('/users/add', { method: "POST", data });

export const editUserData = (userId: number, data: User) => request(`/users/${userId}`, { method: "PUT", data });