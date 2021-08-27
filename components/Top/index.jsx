import { Link as Scroll } from "react-scroll";
import { IoIosArrowDropdown } from "react-icons/io";

export const Top = () => {
  return (
    <section id="top" className="relative min-h-overScreen bg-topVisual bg-cover bg-center">
      <div className="absolute flex justify-center w-full top-3/4 z-10 text-white text-center cursor-pointer animate-bounce hover:opacity-40">
        <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
          <div>
            <p className="animate-pulse">SCROLL</p>
            <IoIosArrowDropdown className="mx-auto animate-pulse" /> 
          </div>
        </Scroll>
      </div>
    </section>
  );
};
