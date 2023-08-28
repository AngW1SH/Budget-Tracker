export const resetPassword = async (password: string, token: string) => {
  const result = await fetch("/api/user/resetpassword", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  }).then((response) => response.status);

  return result;
};
