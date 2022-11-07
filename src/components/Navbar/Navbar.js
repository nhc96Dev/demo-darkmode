import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../hook/useDarkMode";

const Navbar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center">
      <div className="flex items-center gap-x-3">
        <div className="text-20 font-bold">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>

      {!openMenu && isMobile ? (
        <HiOutlineMenu
          size={"24px"}
          className="cursor-pointer ml-auto"
          onClick={handleMenu}
        />
      ) : openMenu && isMobile ? (
        <ul className="fixed top-0 bottom-0 right-0 z-10 min-w-[60%] bg-white py-8 px-4 text-center text-14 text-black font-semibold flex flex-col gap-y-5 transition-all">
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer ml-auto"
            onClick={handleMenu}
          />

          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      ) : (
        <ul className="ml-auto text-16 font-semibold relative flex gap-4 md:gap-8 lg:gap-10">
          <li className="btn-hover">Features</li>
          <li className="btn-hover">Menu</li>
          <li className="btn-hover">Our Story</li>
          <li className="btn-hover tablet:ml-12 md:ml-20 laptop:ml-28">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
