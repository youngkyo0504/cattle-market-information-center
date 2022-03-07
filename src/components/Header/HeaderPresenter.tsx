import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ILink } from "../../@types/index";
import Logo from "../../assets/woo-logo.png";
import MobileNav from "../MobileNav/MobileNav";

interface HeaderProps {
  links: ILink[];
}

const Header = ({ links }: HeaderProps) => {
  const [isShowMobileNav, setIsShowMobileNav] = useState<Boolean>(false);
  const toggleMobileNav = useCallback(() => {
    setIsShowMobileNav((isShowMobileNav) => !isShowMobileNav);
  }, []);
  return (
    <nav
      id="header"
      className="absolute top-0 left-0  right-0 z-30 mx-auto w-full bg-transparent px-4 font-spoqa  lg:max-w-9xl "
    >
      <div className="mx-auto  mt-0 flex w-full flex-wrap items-center justify-between pt-8 md:pt-11  ">
        <div className=" ">
          <Link
            className="text-gray-800 flex items-center font-bold tracking-wide no-underline hover:no-underline "
            to="/"
          >
            <img className="h-8 md:h-[42px]" src={Logo} alt="" />
          </Link>
        </div>
        <label
          onClick={toggleMobileNav}
          htmlFor="menu-toggle"
          className=" block cursor-pointer md:hidden"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        {isShowMobileNav ? (
          <MobileNav links={links} toggleMobileNav={toggleMobileNav} />
        ) : null}
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="order-3 hidden w-full md:flex md:w-auto md:items-center "
          id="menu"
        >
          <nav>
            <ul className="h-8  justify-between pt-4 text-base text-gray-nav md:flex md:pt-0">
              {links.map((link) => (
                <li className="inline-block px-4 text-[0.95rem] no-underline   transition-all ease-in  last:pr-content  hover:font-bold hover:text-black hover:decoration-2">
                  <Link className="" to={link.src ? link.src : ""}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="group relative">
                <button className="flex flex-row items-center px-4 text-[0.95rem] no-underline   transition-all ease-in last:px-content group-hover:font-bold group-hover:text-black">
                  <span>KPN 분석</span>
                  <span className="pl-1 text-[0.2rem] text-blue">▼</span>
                </button>
                <div className="absolute top-full right-content z-10 hidden w-48 min-w-full translate-y-0 animate-fade-in-up rounded-lg  bg-white    shadow-md  transition-all duration-500 ease-in-out group-hover:block  ">
                  <div className=" text-md rounded-md bg-white px-2   pt-2 pb-2 ">
                    <ul className="text-sm">
                      <a
                        target={"#"}
                        href="/cattle-market-information-center/iframe/kpn-family-tree.html"
                      >
                        <li className="rounded-md px-4 py-2 hover:bg-[#F1F2F4]">
                          KPN 족보
                        </li>
                      </a>
                      <Link to={"/kpn/kpn1"}>
                        <li className="rounded-md px-4 py-2 hover:bg-[#F1F2F4]">
                          KPN 분석
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
