import React from "react";
// import QaBox from "../../components/QaBox/QaBox";
import QaImage from "../../assets/qa-images/qna@2x.png";
import { faqList } from "../../datas";

const FaqPage = () => {
  return (
    <section className="mx-auto mt-24 mb-20 flex min-h-[65vh] max-w-9xl flex-col p-4 sm:mb-36 md:mt-48 md:flex-row md:justify-between">
      <div className=" flex flex-col justify-between">
        <div>
          <h1 className="flex flex-col text-3xl font-bold tracking-[-0.73px] text-blue md:flex-row">
            자주 묻는
            <p>질문</p>
          </h1>
          <p className="mt-1 hidden tracking-[-0.39px] text-gray-info md:block">
            FAQ
          </p>
        </div>
        <img
          className="hidden max-w-[19rem] md:block"
          src={QaImage}
          alt="qa-img"
        />
      </div>

      <div className="flex w-full max-w-xl flex-col">
        {faqList.map((item) => (
          <div className=" mt-16 flex flex-col md:mt-28 md:first:mt-0">
            <div className="border-b border-gray-subtitle py-2 md:px-3">
              <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
                {item.title}
              </h3>
            </div>
            <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
              {item.des}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
