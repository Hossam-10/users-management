// src/composables/useApi.ts
import api from '@/services/api';
import type { AxiosRequestConfig } from 'axios';

// Define a generic type for the API response
type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

export function useApi() {
  async function request<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await api.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  return { request };
}
