import { useApi } from "@/composables/useApi";
import type { UsersRequest } from "../types";

const { request } = useApi();

export const getUsers = (query: string = '') => {
    const url = query ? `/users?${query}` : '/users';
    return request<UsersRequest>(url);
};

export const getSearchedUsers = (query: string) => {
    return request<UsersRequest>(`/users/search?${query}`);
};