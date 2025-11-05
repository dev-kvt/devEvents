'use client'
import Image from "next/image";

const Explorebtn = () => {
  return (
    <a
      href="#events"
      id="explore-btn"
      className="mt-7 mx-auto flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      Explore Events
      <Image src="/icons/arrow-down.svg" alt="arrow-svg" width={24} height={24} />
    </a>
  );
};

export default Explorebtn;
