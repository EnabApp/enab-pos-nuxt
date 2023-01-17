export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();
  const token = useCookie("access_token");
  if (!token.value) return navigateTo("/");
});
