"use client";
import Photos from "./photos/page";
import Button from "@components/Button";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl text-center font-bold ">Picture List</h1>
      <Photos />
      <div className="mt-10 border-2 border-slate-600 rounded p-4 bg-slate-200">
        <Button />
      </div>
    </main>
  );
}
