import { getUsers } from "@/lib/services";
import { User } from "@/lib/services/Users/types";

import { createQuery } from "react-query-kit";

export const useGetUsers = createQuery({
  queryKey: [`/users`],
  fetcher: (): Promise<User[]> => getUsers().then((response) => response.data),
});
