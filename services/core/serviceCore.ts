import { useToast } from "vue-toastification";

const baseUrl: string =  'http://localhost:5220/api/';
const toast = useToast();

export function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {

    return $fetch<TResponse>(baseUrl + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {...params},
        async onRequestError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
        },
        async onResponseError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
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
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body,
        async onRequestError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
        },
        async onResponseError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
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
            'Content-Type': 'application/json'
        },
        params: {...params},
        async onRequestError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
        },
        async onResponseError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
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
            'Content-Type': 'application/json'
        },
        params: {...params},
        body: body,
        async onRequestError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
        },
        async onResponseError() {
            toast.error("Beklenmeyen bir hata meydana geldi");
        }
    }).then((response => {
        ResponseHandler(response)
        return response;
    }))
}

function ResponseHandler(response: any) {
    if (!response.isSuccess) {
        toast.warning(response.message)
    }
}