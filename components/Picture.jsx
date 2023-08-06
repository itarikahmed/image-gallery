import React from "react";
import Link from "next/link";
import Image from "next/image";

const Picture = async () => {
  const data = await getData();
  return (
    <div className="flex justify-center">
      <div>
        <Link href="photos/id">
          <div
            className=" h-[250px] w-[350px] border-2 rounded m-8 bg-slate-200 hover:bg-blue-200 transition 
          ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <div className=" relative h-[250px] w-[350px] ">
              <Image
                src="/assets/images/image1.jpg"
                alt=""
                fill={true}
                className=" object-cover p-4 mx-auto"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Picture;
