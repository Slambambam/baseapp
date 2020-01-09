export const getCsrfToken = () => sessionStorage.getItem('csrfToken') || undefined;
