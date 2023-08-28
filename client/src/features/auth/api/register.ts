type RegisterUser = {
  email: string;
  username: string;
  password: string;
};

export const registerUser = async (user: RegisterUser) => {
  const result = await fetch("/api/user/register", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: user.email,
      username: user.username,
      password: user.password,
    }),
  }).then((response) => response.status);

  return result;
};
