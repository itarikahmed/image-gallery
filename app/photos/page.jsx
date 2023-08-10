"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useFetch from "@components/useFetch";

const imagesPerPage = 3;

const Photos = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const API = `https://api.unsplash.com/photos?page=${currentPage}&per_page=${imagesPerPage}&client_id=Fohj_i1nd-6ySubudqwNBDqY7SgcIH_a_5UCnNJ1Xp8`;

  const { data, isLoading, isError } = useFetch(API);
  if (isLoading) {
    return <div className="text-center justify-center">Loading...</div>;
  }
  if (isError) {
    return <p> Error: {isError.message}</p>;
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <div className="mt-10">
      <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
        {data.slice(0, 10).map((data) => {
          const { urls, id } = data;
          return (
            <Link href={`photos/${id}`} key={id}>
              <div
                className=" h-[250px] w-[350px] border-2 rounded m-8 bg-slate-200 hover:bg-blue-200 transition 
ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
              >
                <div className=" relative h-[250px] w-[350px] ">
                  <Image
                    src={urls.regular}
                    alt=""
                    fill={true}
                    className=" object-cover p-4 mx-auto"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 gap-8 flex justify-center items-center">
        <button
          className="p-2 rounded bg-slate-400 border font-medium"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="font-medium">Page {currentPage}</span>
        <button
          className="p-2 rounded bg-slate-400 border font-medium"
          disabled={currentPage === 4}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Photos;
