import { Link } from "react-router-dom";
const MainBanner = () => {
  return (
    <div
      style={{
        background:
          "transparent linear-gradient(0deg, #FFFFFF 0%, #EEEAE7 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="mx-auto animate-fade-in-up p-16 px-4 pt-32 font-spoqa sm:max-w-xl md:max-w-full md:px-24 md:pt-48 lg:max-w-7xl lg:px-2 ">
        <div className="mx-auto max-w-xl lg:max-w-6xl">
          <div className="flex flex-col  sm:text-center ">
            <div className="mb-12  max-w-xl text-center md:mx-auto lg:max-w-6xl">
              <h2 className="  font-spoqa text-3xl font-bold  -tracking-[0.118rem] text-blue md:mx-auto md:text-5xl md:text-[4rem] ">
                <p className={"p-2 "}>데이터를 통한</p>
                <p className="text-blue">합리적인 송아지 구매</p>
              </h2>
            </div>
            <div className="mx-auto flex">
              <Link to="/cattle">
                <span className="traking-[-0.75px] -deep-purple-accent-400 hover:-deep-purple-accent-700 focus:shadow-outline inline-flex  items-center justify-center rounded-4xl bg-blue  py-3 px-7 font-spoqa text-xl  font-bold -tracking-wide   text-white shadow-md transition duration-200 focus:outline-none md:py-4 md:px-9 md:text-2xl">
                  우시장 둘러보기
                </span>
              </Link>
            </div>
            <img
              className={"mx-auto mt-[4rem]  h-auto w-full  max-w-[50rem]"}
              src={"/cattle-market-information-center/cattle.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
