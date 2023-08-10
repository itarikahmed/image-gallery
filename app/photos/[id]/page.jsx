"use client";
import React from "react";
import Image from "next/image";
import useFetch from "@components/useFetch";

const page = ({ params }) => {
  const id = params.id;
  const { data, isLoading, isError } = useFetch(
    `https://api.unsplash.com/photos/${id}?&client_id=Fohj_i1nd-6ySubudqwNBDqY7SgcIH_a_5UCnNJ1Xp8`
  );
  if (isLoading) {
    return <div className="text-center justify-center">Loading...</div>;
  }
  if (isError) {
    return <p>Error: {isError.message}</p>;
  }

  const { urls, user } = data;
  return (
    <div>
      <div className="flex items-center justify-evenly my-10 flex-col md:flex-row">
        <div className="w-2/3">
          {/* <div className=" relative h-[50px] w-[50px] ">
            <Image
              src={urer?.profile_image?.medium}
              alt=""
              fill={true}
              className=" object-cover p-4 mx-auto"
            />
          </div> */}
          <h1 className="font-bold text-2xl"> Author Name: {user?.name}</h1>
          <p className="max-w-2xl my-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            necessitatibus, in adipisci blanditiis harum quasi. Labore eos
            molestias eaque ipsam vitae. Iure rerum earum sequi, magnam corporis
            asperiores adipisci praesentium suscipit cumque animi accusantium
            inventore necessitatibus nam eligendi quibusdam modi dolore aliquam
            repudiandae! Illo, ratione sit. Libero similique aut delectus.
          </p>
        </div>
        <div className=" relative h-[400px] w-[400px]  border-2">
          <Image
            alt=""
            src={urls?.regular}
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
