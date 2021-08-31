import styles from "../Footer/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="flex justify-around items-center h-48 w-full pl-12 pr-24">
      <ul className="flex justify-between items-center w-full">
        <li className="flex-1 flex justify-center text-center">
          <Scroll
            to="top"
            smooth={true}
            className="block mt-4 cursor-pointer hover:opacity-60"
          >
            <Image
              src="/mulunch_logo.png"
              alt="mulunch logo"
              width={180}
              height={90}
            />
          </Scroll>
        </li>
        <li className="flex-1 flex justify-center items-center  opacity-60">
          <Link href="https://twitter.com/muramusubi/">
            <a className="flex justify-center items-center bg-white  rounded-full w-10 h-10 shadow-md mx-2 hover:opacity-60">
              <IoLogoTwitter size={24} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/muramusubi/">
            <a className="flex justify-center items-center bg-white  rounded-full w-10 h-10 shadow-md mx-2 hover:opacity-60">
              <IoLogoInstagram size={24} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/muramusubi/">
            <a className="flex justify-center items-center bg-white  rounded-full w-10 h-10 shadow-md mx-2 hover:opacity-60">
              <IoLogoFacebook size={24} />
            </a>
          </Link>
        </li>

        <li className="flex-1 text-right">
          <p className="font-tsukuB text-xl">むらんち</p>
          <p>〒 162-0825 東京都新宿区神楽坂6丁目19</p>
          <p>TEL 03-6457-5597</p>
          <p>11:30-14:30 (LO 14:00)</p>
          <small className="text-mulunchGray">©︎ Muramusubi</small>
        </li>
      </ul>
    </footer>
  );
};
