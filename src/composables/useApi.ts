// src/composables/useApi.ts
import api from '@/services/api';
import type { AxiosRequestConfig } from 'axios';

export function useApi() {
  async function request<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await api.get<T>(url, config);
    return response.data;
  }

  return { request };
}
