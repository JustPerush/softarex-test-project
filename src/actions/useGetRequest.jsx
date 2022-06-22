import react from "react";
import { useState, useEffect } from "react";

const BASE_URL = "https://api.pexels.com/v1/";
const CURATED = "curated?";
const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";
const PAGE = "page=1";
const PER_PAGE = "per_page=3";

export function useGetRequest(BASE_URL, CURATED = "", PER_PAGE = "", API_KEY) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    setIsLoading(true);
    fetch(BASE_URL + CURATED + PER_PAGE, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        setIsLoading(true);
        return response.json();
      })
      .then((data) => {
        setItems(data.photos);
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
    return () => {
      console.log("Nothing found...");
    };
  }, []);
  return [isLoading, errorMessage, items];
}
