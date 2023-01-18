export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth();
  // if (!auth.isAuthenticated || !auth.user) return navigateTo("/");

  if (!auth.isAuthenticated || (!auth.user && to.path === "/tables")) {
    return navigateTo("/");
  } else if (auth.isAuthenticated && to.path === "/") {
    return navigateTo("/tables");
  }
});
