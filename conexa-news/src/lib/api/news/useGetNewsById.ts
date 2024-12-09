import { getNewsById } from "@/lib/services/News";
import { News } from "@/lib/services/News/types";

import { createQuery } from "react-query-kit";

type Variables = { id: string };

export const useGetNewsById = createQuery({
  queryKey: [`/posts/id`],
  fetcher: (variables: Variables): Promise<News> =>
    getNewsById(variables.id).then((response) => response.data),
});
