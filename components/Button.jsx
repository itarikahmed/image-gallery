import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@components/useFetch";

const API = `https://api.unsplash.com/photos?&client_id=Fohj_i1nd-6ySubudqwNBDqY7SgcIH_a_5UCnNJ1Xp8`;

const RandomPhotoPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { data } = useFetch(API);

  const handleRandom = () => {
    return Math.floor(Math.random() * 10);
  };
  const handelClick = () => {
    const randomIndex = handleRandom();
    setSelectedIndex(randomIndex);
    location.href = `photos/${data[randomIndex].id}`;
  };

  return (
    <div className=" flex  flex-col justify-center ">
      <h1 className="text-center font-semibold text-lg text-slate-900">
        Random Photo
      </h1>

      {data.slice(0, 10).map((data, index) => {
        const { urls, id } = data;
        return (
          <div key={index} className="flex justify-center">
            {index === selectedIndex && (
              <div className="relative h-[250px] w-[350px]">
                <Image
                  src={urls.regular}
                  alt=""
                  layout="fill"
                  className="object-cover p-4 mx-auto"
                />
              </div>
            )}
          </div>
        );
      })}
      <div className="flex justify-center mt-5">
        <button
          className="p-2 bg-slate-400 font-medium border rounded"
          onClick={handelClick}
        >
          Choose one
        </button>
      </div>
    </div>
  );
};

export default RandomPhotoPage;
