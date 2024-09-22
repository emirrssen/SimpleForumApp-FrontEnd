import { useToast } from "vue-toastification";
import { useLayoutStore } from "~/stores/layout";

const baseUrl: string =  'http://localhost:5220/api/';
const toast = useToast();

export function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {



    return $fetch<TResponse>(baseUrl + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        params: {...params},
        async onRequestError(error) {
            ErrorResponseHandler(error);
        },
        async onResponseError(error) {
            ErrorResponseHandler(error);
        }
    }).then((response => {
        ResponseHandler(response)
        return response;
    }))
}

export function Post<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {

    return $fetch<TResponse>(baseUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        params: {...params},
        body: body,
        async onRequestError(error) {
            ErrorResponseHandler(error);
        },
        async onResponseError(error) {
            ErrorResponseHandler(error);
        }
    }).then((response => {
        ResponseHandler(response)
        return response;
    }))
}

export function Delete<TResponse>(url: string, params?: {}): Promise<TResponse> {

    return $fetch<TResponse>(baseUrl + url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        params: {...params},
        async onRequestError(error) {
            ErrorResponseHandler(error);
        },
        async onResponseError(error) {
            ErrorResponseHandler(error);
        }
    }).then((response => {
        ResponseHandler(response)
        return response;
    }))
}

export function Put<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
    
    return $fetch<TResponse>(baseUrl + url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        params: {...params},
        body: body,
        async onRequestError(error) {
            ErrorResponseHandler(error);
        },
        async onResponseError(error) {
            ErrorResponseHandler(error);
        }
    }).then((response => {
        ResponseHandler(response)
        return response;
    }))
}

function ResponseHandler(response: any) {
    if (!response.isSuccess && response.code === 3) {
        toast.warning(response.message)
    }

    if (!response.isSuccess && response.code === 2) {
        toast.error(response.message);
    }
}

function ErrorResponseHandler(error: any) {
    if (error.response && error.response.status === 401) {
        toast.error("Bu işlem için yetkiniz bulunmamaktadır")
        return;
    }

    if (error.response && error.response.status === 503) {
        toast.warning("Bu servis geçici bir süreliğine devre dışı bırakılmıştır")
        return;
    }

    if (error.response && error.response.status === 404) {
        toast.error("Bu servis artık kullanılmamaktadır")
        return;
    }

    toast.error("Beklenmeyen bir hata meydana geldi");
}