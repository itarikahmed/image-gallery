// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// const Cart = () => {
//   return (
//     <div>
//       <Link href="photos/id">
//         <div
//           className=" h-[250px] w-[350px] border-2 rounded m-8 bg-slate-200 hover:bg-blue-200 transition
//     ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
//         >
//           <div className=" relative h-[250px] w-[350px] ">
//             <Image
//               src="https://images.unsplash.com/photo-1682685797898-6d7587974771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//               alt=""
//               fill={true}
//               className=" object-cover p-4 mx-auto"
//             />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://api.unsplash.com/search/photos?query=random&client_id=Fohj_i1nd-6ySubudqwNBDqY7SgcIH_a_5UCnNJ1Xp8"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const myData = await getData();

  return (
    <div className="mt-10 flex justify-center">
      <div className="">
        {myData.results.slice(0, 10).map((data) => {
          const { urls } = data;
          return (
            <Link href="photos/id">
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
    </div>
  );
}
