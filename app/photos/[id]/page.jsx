import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = ({ params }) => {
  return (
    <div className=" flex justify-center items-center mt-28 h-auto">
      <div className="flex w-1/2 h-96 border-2 border-gray-200 rounded-lg space-x-10 p-10 shadow-xl">
        <div>
          <Image src="" alt="" className=" w-52 h-72" />
        </div>
        <div className="text-black space-y-2">
          <h1>{params.id}</h1>
          <p className="font-bold text-xl m-1"> Title:</p>
          <p className="font-semibold text-xl m-1">IMDB rating: / 10</p>
          <p className="font-semibold text-xl m-1">Country:</p>
          <div className="pt-6">
            <Link
              href="/"
              className=" px-4 py-2 border-2 rounded bg-blue-500 text-white font-semibold"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
