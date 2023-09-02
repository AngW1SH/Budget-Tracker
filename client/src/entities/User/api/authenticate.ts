import { authorizedFetch } from "@/shared/utils";
import { IUser } from "../types/types";

export const authenticate = async () => {
  const result: IUser | null = await authorizedFetch(
    "/api/user/authenticate",
    true
  ).then((data) => {
    return data.status == 200 ? data.json() : null;
  });

  return result;
};
