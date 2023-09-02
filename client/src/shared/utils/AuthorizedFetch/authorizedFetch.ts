import { router } from "@/app/main";

export const authorizedFetch = async (
  url: RequestInfo,
  noRedirect?: boolean,
  init?: RequestInit
) => {
  const result = await fetch(url, init);
  if (result.status == 401) {
    await fetch("/api/user/token");
    const result = await fetch(url, init);

    /*
    Technically kinda heavily breaks the Feature-Sliced Design flow, 
    importing from app to shared, but I felt like it would
    be too much of a bother to handle each 401 error 
    from the shared-level all the way to the app-level
    */
    if (noRedirect && result.status == 401) {
      router.push("/login");
    }
  }
  return result;
};
