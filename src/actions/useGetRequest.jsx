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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isFetching, setIsFetching] = useState(true);

  const scrollHandler = (event) => {
    event.preventDefault();
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
        300 &&
      items.length < totalCount
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  useEffect(() => {
    console.log(`Fetching useEffect start working`);
    setErrorMessage(null);
    if (isFetching) {
      console.log(`fetching should started`);
      fetch(BASE_URL + CURATED + `page=${currentPage}&` + PER_PAGE, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY,
        },
      })
        .then((response) => {
          console.log(`Fetching successfully done`);
          if (!response.ok) {
            throw Error(response.statusText);
          }
          setIsLoading(true);
          return response.json();
        })
        .then((data) => {
          setTotalCount(data.total_results);
          setItems([...items, ...data.photos]);
          setCurrentPage((prevState) => prevState + 1);
          console.log(`Current Page after update`);
          console.log(currentPage);
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => {
          setIsFetching(false);
          setIsLoading(false);
        });
      return () => {
        console.log("Nothing found...");
      };
    }
  }, [isFetching]);
  return [isLoading, errorMessage, items];
}
