import { Link } from "react-router-dom";
import { ILink } from "../../@types";
import { ReactComponent as XIcon } from "../../assets/x.svg";
import useToggleScroll from "../../hooks/useToggleScroll";
interface MobileNavProps {
  links: ILink[];
  toggleMobileNav: () => void;
}
const MobileNav = ({ links, toggleMobileNav }: MobileNavProps) => {
  const { setBodyOverflow } = useToggleScroll();
  return (
    <>
      <div
        onClick={toggleMobileNav}
        className=" absolute inset-0 h-screen bg-black/20"
      ></div>
      <div
        className="absolute inset-0 z-40 flex h-[480px]  w-full flex-col bg-white px-4 pt-8"
        id="menu"
      >
        <nav>
          <div className="flex h-8 items-center justify-end">
            <span className="cursor-pointer" onClick={toggleMobileNav}>
              <XIcon />
            </span>
          </div>
          <div className="mt-14">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li
                  className={
                    "mb-8 inline-block text-[0.95rem] text-blue no-underline   transition-all ease-in  last:pr-content  hover:font-bold  hover:decoration-2"
                  }
                >
                  <Link
                    className=""
                    onClick={toggleMobileNav}
                    to={link.src ? link.src : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="mb-8 inline-block text-[0.95rem] text-blue no-underline   transition-all ease-in  last:pr-content  ">
                <span>KPN 분석</span>
                <ul className="text-sm text-gray-nav">
                  <a
                    target={"#"}
                    href="/cattle-market-information-center/iframe/kpn-family-tree.html"
                  >
                    <li className="mt-4 hover:font-bold  ">KPN 족보</li>
                  </a>
                  <Link onClick={toggleMobileNav} to={"/kpn/kpn1"}>
                    <li className="mt-4 hover:font-bold">KPN 분석</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
