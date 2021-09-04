import Image from "next/image";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { IoLogoTwitter, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { BlogHeader as ResponsiveHeader } from "/components/Responsive/BlogHeader";

export const BlogHeader = () => {
  return (
    <section className="flex justify-center">
      <header className="fixed h-24 w-11/12 bg-white opacity-80 rounded-xl z-10 mx-auto top-10 shadow tablet:hidden">
        <nav className="h-full">
          <ul className="flex justify-around items-center w-full h-full">
            <h1 className="mt-2">
              <Scroll to="blogTop" smooth={true}>
                <Image
                  src="/mulunch_logo.png"
                  alt="mulunch logo"
                  width={120}
                  height={60}
                />
              </Scroll>
            </h1>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">投稿一覧</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">
                  むらむすび
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">全国の村</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">上野村</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">大鹿村</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">東成瀬村</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="flex cursor-pointer hover:opacity-40">タグ一覧</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-white bg-mulunchOrange py-2 px-10 rounded-full shadow-md hover:opacity-80">
                  HOME
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <ul className="fixed flex justify-end items-center h-10 w-11/12 z-10 mx-auto top-36 tablet:hidden">
        <li className="flex justify-center items-center w-10 h-10  mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://twitter.com/muramusubi/">
            <a>
              <IoLogoTwitter size={24} />
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center w-10 h-10  mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://www.instagram.com/muramusubi/">
            <a>
              <IoLogoInstagram size={24} />
            </a>
          </Link>
        </li>
        <li className="flex justify-center items-center w-10 h-10  mx-1 bg-white opacity-60 rounded-full shadow hover:opacity-80">
          <Link href="https://www.facebook.com/muramusubi/">
            <a>
              <IoLogoFacebook size={24} />
            </a>
          </Link>
        </li>
      </ul>
      <ResponsiveHeader />
    </section>
  );
};
