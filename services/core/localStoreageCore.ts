export async function GetToken(): Promise<string | null> {
    return await localStorage.getItem("token");
}

export async function SetToken(token: string) {
    await localStorage.setItem("token", token);
}