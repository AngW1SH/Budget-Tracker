type LoginUser = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export const loginUser = async (user: LoginUser) => {
  const result = await fetch("/api/user/login", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username, // also works with email instead of username
      password: user.password,
      rememberMe: user.rememberMe,
    }),
  }).then((response) => response.status);

  return result;
};
