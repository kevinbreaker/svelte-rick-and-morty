import axios, {
	type AxiosRequestHeaders,
	type AxiosResponse
} from 'axios';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Headers =  AxiosRequestHeaders | { Authorization: string }


interface FetchArguments {
	method?: Methods;
  headers?: Headers
	path?: string;
	params?: any;
	baseURL?: string;
	data?: JSON | Record<string, unknown>;
}

interface Interceptors {
  request?: any
  response?: {
    resolve?: (config: any) => PromiseConstructor['resolve']
    reject?: (config: any) => PromiseConstructor['reject']
  }
}

// function validateInterceptorsResponse(interceptors: Interceptors['response']) {
//   const resolve = interceptors?.resolve ?? (config) => Promise.resolve(config)

//   return {
//     resolve,
//     response: interceptors?.response ?? (config) => config,
//   }
// }

export function fetch<T = unknown>({
	method,
	baseURL = `${import.meta.env.VITE_APP_BASE_URL ?? ''}`,
	...params
}: FetchArguments, interceptors?: Interceptors): Promise<AxiosResponse<T>> {
	const axiosInstance = axios.create();

  if (interceptors?.request)
    axiosInstance.interceptors.request.use(interceptors.request)

  // if (Object.values(interceptors.response).length)
    // axiosInstance.interceptors.response.use(interceptors?.request ?? () => Promise., interceptors?.response)

	return axiosInstance({
		...params,
		method,
		baseURL,
		url: params.path
	});
}
