import { CattleMarketInfos, ICattleMarketInfo, MarketName } from "../@types";

//우시장마다 id를 저장하고 id마다 각 정보들을 적어서 넣는다.
// 계속 늘려나가면 됨

const cattleMarket: CattleMarketInfos = {
  gcch: {
    name: "거창축협",
    position: {
      latitude: 35.6333059,
      longitude: 127.899943,
    },
    "opening-date": "매주 화요일 큰소,송아지 격주로",
    phone: "611-82-00034",
    address: "거창군 남상면 무촌리 1773-1",
    url: "https://www.gcch.co.kr/",
  },
  ulc: {
    name: "울산축협",
    position: {
      latitude: 35.5872904,
      longitude: 129.1122642,
    },
    address: "울주군 상북면 지내리 540-2번지",
    "opening-date": "불규칙",
    url: "https://ulcf.nonghyup.com",
    phone: "052-274-1181",
  },
  // TODO 홍천부터 전화번호랑 다 입력해야됨
  hch: {
    name: "홍천축협",
    position: {
      latitude: 37.6947051,
      longitude: 127.8553996,
    },
    "opening-date": "매주 금요일",
    phone: "033-439-3400",
    url: "https://www.hchanwoo.com:461/main/",
    address: "강원도 홍천군 북방면 하화계길 11번길 48",
  },
  anseong: {
    name: "안성축협",
    position: {
      latitude: 36.9796624,
      longitude: 127.2914548,
    },
    address: "경기도 안성시 금광면 바우덕이로 551",
    "opening-date": "불규칙",
    phone: "031-8046-8000",
    url: "https://anseongch.nonghyup.com",
  },
  gamso: {
    name: "상주축협",
    position: {
      latitude: 36.3713315,
      longitude: 128.1561027,
    },
    address: "상주시 지천동 106-16",
    "opening-date": "매주 화요일",
    phone: "054-530-5100",
    url: "http://gamso.nonghyup.com",
  },
  gblc: {
    name: "고창부안축협",
    position: {
      latitude: 35.5459531,
      longitude: 126.7011382,
    },
    address: "고창군 흥덕면 부안로 442",
    "opening-date": "매주 월요일",
    phone: "063-560-3000",
    url: "http://gblc.nonghyup.com",
  },
  sjkj: {
    name: "세종공주축협",
    position: {
      latitude: 36.4960053,
      longitude: 127.1006087,
    },
    address: "충청남도 공주시 월미동 산63-1",
    "opening-date": "불규칙",
    phone: "041-852-4664",
    url: "http://sjkjch.nonghyup.com",
  },
  jd: {
    name: "제천단양축협",
    address: "제천시 명지동 산4-6",
    position: {
      latitude: 37.1163453,
      longitude: 128.2090308,
    },
    "opening-date": "2,4주차 화요일",
    phone: "043-646-7544",
    url: "http://jd.nonghyup.com",
  },

  jangseong: {
    name: "장성축협",
    position: {
      latitude: 35.290043,
      longitude: 126.769832,
    },
    address: "장성군 황룡면 월평리 168-5",
    "opening-date": "매주 목요일",
    phone: "061-393-6771 ~ 3",
    url: "http://jangseongch.nonghyup.com",
  },

  jeju: {
    name: "제주축협",
    position: {
      latitude: 33.3497668,
      longitude: 126.3055719,
    },
    address: "제주시 한림읍 한창로 금악리 103-3번지",
    "opening-date": "불규칙",
    phone: "064-756-4201",
    url: "http://jejuch.nonghyup.com",
  },
};
export default cattleMarket;
