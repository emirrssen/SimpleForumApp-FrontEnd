import { useToast } from "vue-toastification";
import type { GenericDataResponse } from "./responseCore";
import type { Token } from "../auth/login/types";

const baseUrl: string =  'http://localhost:5220/api/';
const toast = useToast();
export const isLoginDialogVisible: Ref<boolean> = ref(false);

export async function Get<TResponse>(url: string, params?: {}): Promise<TResponse> {

    if (CheckTokenExpiration()) {
        await HandleTokenExpiration();
    }

    return HandleGet<TResponse>(url, params);
}

export async function Post<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {

    if (CheckTokenExpiration()) {
        await HandleTokenExpiration();
    }

    return HandlePost<TResponse>(url, params, body);
}

export async function Delete<TResponse>(url: string, params?: {}): Promise<TResponse> {

    if (CheckTokenExpiration()) {
        await HandleTokenExpiration();
    }

    return HandleDelete<TResponse>(url, params);
}

export async function Put<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
    
    if (CheckTokenExpiration()) {
        await HandleTokenExpiration();
    }

    return HandlePut<TResponse>(url, params, body);

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

async function HandleTokenExpiration(): Promise<void> {

    const now = new Date();

    const refreshTokenExpirationString = localStorage.getItem("refreshTokenExpirationDate");
    const refreshTokenExpirationDate = new Date(refreshTokenExpirationString || "");
    const refreshToken = localStorage.getItem("refreshToken")

    if (refreshTokenExpirationDate > now) {
        return await $fetch<GenericDataResponse<Token>>(baseUrl + "auth/login/with-refresh-token", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            params: { RefreshToken: refreshToken },
            async onRequestError(error) {
                ErrorResponseHandler(error);
            },
            async onResponseError(error) {
                ErrorResponseHandler(error);
            }
        }).then((response => {
            ResponseHandler(response);
            
            if (response.isSuccess && response.data) {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                localStorage.setItem("expirationDate", response.data.expirationDate);
                localStorage.setItem("refreshTokenExpirationDate", response.data.refreshTokenExpirationDate);
            }
        }))
    } else {
        if (localStorage.getItem("token")?.length === 0) {
            navigateTo("login")
        } else {
            await localStorage.removeItem("expirationDate");
            await localStorage.removeItem("refreshTokenExpirationDate");
            await localStorage.removeItem("token");
            toast.warning("Oturumunuzun süresi dolmuştur. Kaldığınız yerden devam edebilmek için lütfen tekrar oturum açınız.")
            isLoginDialogVisible.value = true;
        }
    }

    return Promise.resolve();
}

function CheckTokenExpiration(): boolean {

    const now = new Date();
    
    const accessTokenExpirationDateString = localStorage.getItem("expirationDate");

    if (!accessTokenExpirationDateString || (accessTokenExpirationDateString && accessTokenExpirationDateString.length === 0)) {
        return true;
    }

    const accessTokenExpirationDate = new Date(accessTokenExpirationDateString || "");

    return accessTokenExpirationDate < now;
}

function HandleGet<TResponse>(url: string, params?: {}): Promise<TResponse> {
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

function HandlePost<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
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

function HandlePut<TResponse>(url: string, params?: {}, body?: {}): Promise<TResponse> {
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

function HandleDelete<TResponse>(url: string, params?: {}): Promise<TResponse> {
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