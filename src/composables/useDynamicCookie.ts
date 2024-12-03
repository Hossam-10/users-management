import { useCookies } from "@vueuse/integrations/useCookies";

export function useDynamicCookie<T>(cookieName: string) {
  const { get, set, remove } = useCookies([`${cookieName}`]);

  const getCookie = () => get<T>(cookieName);
  const setCookie = (val: Maybe<T>) => set(cookieName, val, { path: "/" });
  const removeCookie = () => remove(cookieName);

  return { getCookie, setCookie, removeCookie };
}
