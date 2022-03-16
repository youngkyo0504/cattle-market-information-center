import { ILink } from "../@types/index";
const BASEURL = "/cattle-market-information-center";
const links: ILink[] = [
  {
    name: "서비스소개",
    src: "/introduction",
  },
  {
    name: "우시장 정보",
    src: "markets",
  },
  {
    name: "출품우 정보",
    src: "/cattle",
  },
  {
    name: "자주 묻는 질문",
    src: "/faq",
  },
];

export default links;
