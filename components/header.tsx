import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start text-center text-mini text-black font-poppins">
      <div className="self-stretch flex flex-row py-[15px] px-[30px] items-center justify-between sm:flex-row sm:gap-[10px] sm:items-center sm:justify-between">
        <img
          className="relative w-[100px] h-[19.74px]"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-between sm:hidden">
          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[150px]">
            Services
          </div>
          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[150px]">
            Abouts us
          </div>
          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[150px]">
            Portfolio
          </div>
          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[150px]">
            Why Notum
          </div>
        </div>
        <div className="bg-gray flex flex-row pt-[14.329999923706055px] pb-[13.670000076293945px] pr-[26.01000213623047px] pl-[26px] items-start justify-start text-smi text-white border-[2px] border-solid border-gray">
          <b className="relative leading-[20px]">Let’s talk</b>
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-b-[0.7px] border-solid border-whitesmoke" />
    </div>
  );
};

export default Header;
