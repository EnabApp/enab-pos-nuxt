export const useApi = async (path: string, method = 'GET', body: any = null) => {
    const access_token = useCookie('access_token').value
    const baseURL = useRuntimeConfig().public.BASE_URL
    const { data, pending, error, refresh } = await useAsyncData(
        path,
        () => $fetch(`${baseURL}/api/${path}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            body: body ? JSON.stringify(body) : null,
        })
    )
    return { data, pending, error, refresh }
}
