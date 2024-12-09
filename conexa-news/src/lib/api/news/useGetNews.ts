import { getNews } from "@/lib/services/News";
import { News } from "@/lib/services/News/types";

import { createQuery } from "react-query-kit";

export const useGetNews = createQuery({
  queryKey: [`/posts`],
  fetcher: (): Promise<News[]> => getNews().then((response) => response.data),
});
