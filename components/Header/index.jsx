import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { Header as ReponsiveHeader } from "/components/Responsive/Header";

export const Header = () => {
  return (
    <section className="flex justify-center">
      <header className="h-24 w-11/12 bg-white opacity-80 rounded-xl fixed z-10 mx-auto top-10 shadow tablet:hidden">
        <nav className="h-full">
          <ul className="flex justify-around items-center w-full h-full">
            <h1 className="mt-2">
              <Scroll to="top" smooth={true} duration={1000} offset={0}>
                <a className="cursor-pointer hover:opacity-40 flex">
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={120}
                    height={60}
                  />
                </a>
              </Scroll>
            </h1>
            <li>
              <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
                <a className="cursor-pointer hover:opacity-40 flex">CONCEPT</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="project" smooth={true} duration={1000} offset={50}>
                <a className="cursor-pointer hover:opacity-40 flex">PROJECTS</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="topic" smooth={true} duration={1000} offset={0}>
                <a className="cursor-pointer hover:opacity-40 flex">TOPICS</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="village" smooth={true} duration={1000} offset={120}>
                <a className="cursor-pointer hover:opacity-40 flex">VILLAGE</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="lunch" smooth={true} duration={1000} offset={0}>
                <a className="cursor-pointer hover:opacity-40 flex">LUNCH</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="gallery" smooth={true} duration={1000} offset={-600}>
                <a className="cursor-pointer hover:opacity-40 flex">GARLLERY</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="join" smooth={true} duration={1000} offset={-50}>
                <a className="cursor-pointer hover:opacity-40 flex">JOIN</a>
              </Scroll>
            </li>
            <li>
              <Link href="/blog">
                <a className="text-white bg-mulunchOrange py-2 px-10 rounded-full shadow-md hover:opacity-80">
                  BLOG
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <ul className="flex justify-end items-center h-10 w-11/12 fixed z-10 mx-auto top-36 tablet:hidden">
        <li className="flex justify-center items-center w-10 h-10 mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://twitter.com/muramusubi/">
            <a>
              <IoLogoTwitter size={24} />
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center w-10 h-10 mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://www.instagram.com/muramusubi/">
            <a>
              <IoLogoInstagram size={24} />
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center w-10 h-10 mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://www.facebook.com/muramusubi/">
            <a>
              <IoLogoFacebook size={24} />
            </a>
          </Link>
        </li>
      </ul>
      <ReponsiveHeader />
    </section>
  );
};
