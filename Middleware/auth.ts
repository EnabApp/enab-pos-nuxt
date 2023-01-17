export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();
  if (!auth.isAuthenticated && to.path === "/") {
    return navigateTo("/");
  } else if (auth.isAuthenticated && to.path === "/tables") {
    return navigateTo("/tables");
  }
});
