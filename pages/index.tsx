import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";

const Desktop1: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex flex-row py-[45px] px-[30px] items-center justify-center sm:self-stretch sm:w-auto sm:items-center sm:justify-start sm:pl-0 sm:pr-0 sm:box-border">
        <Hero />
      </div>
    </div>
  );
};

export default Desktop1;
