export const authorizedFetch = async (url: RequestInfo, init?: RequestInit) => {
  const result = await fetch(url, init);
  if (result.status == 401) {
    await fetch("/api/user/token");
    return await fetch(url, init);
  }
  return result;
};
