export const forgotPassword = async (email: string) => {
  const result = await fetch("/api/user/forgotpassword", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((response) => response.status);

  return result;
};
