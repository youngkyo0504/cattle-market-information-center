import React from "react";
// import QaBox from "../../components/QaBox/QaBox";
import QaImage from "../../assets/qa-images/qna@2x.png";

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
        <div className=" mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              어떤 정보들이 사용되나요?
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            각 농협의 우시장 출품우 정보, KPN, 축산물 이력제 (생년월일,
            농장경영자정보, 사육지 등), 축산물 품질 (등급, 도체중, 근내지방,
            육량지수 등) 정보와 환경적인 정보를 기반으로 한우의 잠재능력을
            분석합니다.
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              우시장 정보제공 기준은 어떻게 되나요?
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            각 지역별로 친자일치, KPN, 계대 등의 정보를 다양하게 제공하는
            우시장을 우선 선별하였습니다. 추후 전국 우시장으로 확대될
            예정입니다.
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              한국종축개량협회의 EPD 데이터를 사용하나요?:
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            아쉽게도 육종가와 혈통정보는 한종협의 지적재산권이므로 제공해드리지
            못합니다. 하지만 우시장에서 제공하는 KPN 정보 뿐 아니라 농가의
            송아지 사육환경, 과거 성적 등 이력제 정보로 보다 정확한 맞춤형
            빅데이터 분석이 이뤄지고 있으니 우릴 믿으셔도 좋아요!
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-28 md:first:mt-0">
          <div className="border-b border-gray-subtitle py-2 md:px-3">
            <h3 className="tracking-[-0.49px] text-gray-subtitle md:text-lg">
              KPN 분석 자료는 왜 제공하나요?
            </h3>
          </div>
          <div className="mt-5 text-[0.93rem] leading-normal tracking-[-0.46px] text-gray-info md:px-3 md:text-base">
            물론 저희의 AI 분석이 정확하다지만, 농가에게 더 많은 정보를
            제공하고자 함입니다. 평균적으로 KPN950 성적이 더 좋다고 하지만 우리
            집에서는 KPN1064가 더 잘 맞을 수도 있거든요! 정액 신청할 때
            사용하시면 두배로 좋아요!
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
