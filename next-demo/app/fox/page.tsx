"use client";
import Image from "next/image";
import fox from "@/app/foxy.png";

export default function Page() {
  return (
    <div className="p-6 text-center">
      <div className="mt-6 flex justify-center">
        <Image
          src={fox}
          alt="Fox"
          width={300}
          height={300}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}