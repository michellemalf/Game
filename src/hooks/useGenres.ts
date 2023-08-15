import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";


export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('/genres')


export default useGenres;


//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);

//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((response) => {
//         setIsLoading(false);
//         setGenres(response.data.results);
//       })
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         setError(error.message);
//         setIsLoading(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };