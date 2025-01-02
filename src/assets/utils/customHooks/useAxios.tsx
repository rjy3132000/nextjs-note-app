import { useState, useCallback } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export function useApi<T>(token?: string, formData?: FormData) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const apiWithToken = axios.create({
    baseURL: 'https://nextjs-note-app-backend.onrender.com',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'token': `${token}` })
    },
  });

  const request = useCallback(async (method: HttpMethod, url: string, body?: any) => {
    setState({ data: null, error: null, isLoading: true });

    try {
      let response: AxiosResponse<T>;

      switch (method) {
        case 'GET':
          response = await apiWithToken.get<T>(url);
          break;
        case 'POST':
          response = await apiWithToken.post<T>(url, body);
          break;
        case 'PUT':
          response = await apiWithToken.put<T>(url, body);
          break;
        case 'DELETE':
          response = await apiWithToken.delete<T>(url);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setState({ data: response.data, error: null, isLoading: false });
    } catch (error) {
      const axiosError = error as AxiosError;
      setState({ 
        data: null, 
        error: new Error(axiosError.response?.data?.message || axiosError.message), 
        isLoading: false 
      });
    }
  }, [apiWithToken]);

  const get = useCallback((url: string) => request('GET', url), [request]);
  const post = useCallback((url: string, body: any) => request('POST', url, body), [request]);
  const put = useCallback((url: string, body: any) => request('PUT', url, body), [request]);
  const del = useCallback((url: string) => request('DELETE', url), [request]);

  return { ...state, get, post, put, del };
}

