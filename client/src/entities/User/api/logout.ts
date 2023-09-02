export const logoutUser = async () => {
  const result = await fetch("/api/user/unauthorize").then(
    (data) => data.status
  );

  return result;
};
