"use client";
import { useState, useEffect } from "react";

const useFetch = (API) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (API) => {
      setIsLoading();
      const res = await fetch(API, {
        cache: "no-store",
      });

      if (!res.ok) {
        setIsError(true);
      }

      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    console.log(API);
    getData(API);
  }, [API]);

  return { data, isLoading, isError };
};

export default useFetch;
