import type { NextPage } from "next";

const Hero: NextPage = () => {
  return (
    <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[36px] max-w-[1200px] text-left text-mid text-dimgray font-poppins md:flex-col md:gap-[36px] md:items-start md:justify-center sm:flex-1 sm:flex-col sm:items-center sm:justify-start">
      <div className="flex flex-col items-start justify-start gap-[12px] min-w-[400px] md:self-stretch md:w-auto md:items-center md:justify-start sm:self-stretch sm:w-auto sm:items-center sm:justify-start">
        <b className="self-stretch relative leading-[27.99px] text-blueviolet md:text-center">
          Web and Mobile apps
        </b>
        <b className="self-stretch relative text-37xl tracking-[-1.4px] leading-[63.95px] text-black md:text-center">
          <p className="m-0">{`Your Trusted `}</p>
          <p className="m-0">Software Partners</p>
        </b>
        <div className="relative text-base leading-[27.99px] font-medium flex items-center w-[500px] max-w-[500px] md:text-center sm:self-stretch sm:w-auto">
          Team of 40+ developers, Strapi experts, crafting exceptional mobile
          and web apps. We're transparent, communicative, and committed to
          long-term partnerships.
        </div>
        <div className="w-[349px] flex flex-col py-4 px-0 box-border items-start justify-start gap-[12px] text-mini md:self-stretch md:w-auto md:flex-col md:items-center md:justify-start">
          <div className="self-stretch flex flex-row py-0 pr-[113px] pl-9 items-start justify-start relative md:w-auto md:[align-self:unset] md:flex-row md:items-center md:justify-start">
            <img
              className="flex-1 absolute my-0 mx-[!important] top-[2px] left-[0px] max-w-full overflow-hidden h-6 z-[0]"
              alt=""
              src="/svg.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start z-[1] md:w-auto md:[align-self:unset]">
              <div className="flex-1 relative leading-[24px] font-medium md:text-center md:flex-1">
                Speed up product delivery
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row py-0 pr-[113px] pl-9 items-start justify-start relative md:w-auto md:[align-self:unset]">
            <img
              className="flex-1 absolute my-0 mx-[!important] top-[2px] left-[0px] max-w-full overflow-hidden h-6 z-[0]"
              alt=""
              src="/svg.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-start z-[1] md:items-center md:justify-start">
              <div className="flex-1 relative leading-[24px] font-medium">
                Speed up product delivery
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[15px] text-smi text-white md:self-stretch md:w-auto">
          <div className="bg-gray box-border flex flex-row pt-[14.329999923706055px] pb-[13.670000076293945px] pr-[26.01000213623047px] pl-[26px] items-start justify-start min-w-[140px] border-[2px] border-solid border-gray md:items-center md:justify-center">
            <b className="relative leading-[20px]">Let’s talk</b>
          </div>
          <div className="box-border w-[150px] flex flex-row pt-[14.329999923706055px] pb-[13.670000076293945px] pr-[28.849998474121094px] pl-[26px] items-start justify-start min-w-[150px] text-black border-[2px] border-solid border-gray md:items-center md:justify-center">
            <b className="relative leading-[20px]">Why NOTUM</b>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-end md:flex-[unset] md:self-stretch sm:w-full sm:flex-col sm:flex-[unset] sm:self-stretch">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover sm:max-w-[90%]"
          alt=""
          src="/group-3-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Hero;
