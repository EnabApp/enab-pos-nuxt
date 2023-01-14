import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    getters: {
        isAuthenticated: (state) => !!useCookie('access_token').value,
        getUser: (state) => state.user,
        isManager: (state) => state.user?.role === 1,
        isCashier: (state) => state.user?.role === 2,
        isWaiter: (state) => state.user?.role === 3,
        isChef: (state) => state.user?.role === 4,
    },
    actions: {
        async signIn(email: string, password: string) {
            const tokenCookie = useCookie('access_token');
            const baseURL = useRuntimeConfig().public.BASE_URL;

            const { data, pending, error, refresh } = await useFetch(`${baseURL}/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            })
            if (error.value) {
                return false
            }
            tokenCookie.value = data?.value.access_token

            return true
        },

        signOut() {
            const tokenCookie = useCookie('access_token');
            tokenCookie.value = ''
        },

        async fetchUser() {
            const baseURL = useRuntimeConfig().public.BASE_URL;

            const tokenCookie = useCookie('access_token');
            const response: any = await $fetch(`${baseURL}/api/auth/user`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${tokenCookie.value}`,
                },
            })
            this.user = response
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot));
}
