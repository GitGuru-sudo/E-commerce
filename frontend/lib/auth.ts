export interface AuthUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

const TOKEN_KEY = 'ecom_token';
const USER_KEY = 'ecom_user';

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => typeof window === 'undefined' ? '' : localStorage.getItem(TOKEN_KEY) || '';
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const setUser = (user: AuthUser) => localStorage.setItem(USER_KEY, JSON.stringify(user));
export const getUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(USER_KEY);
  return value ? JSON.parse(value) : null;
};
export const removeUser = () => localStorage.removeItem(USER_KEY);
