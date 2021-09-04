import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoThreeBars } from "react-icons/go";

export const BlogOverlay = (props) => {
  const closeOverlay = () => {
    props.setShowOverlay(false);
    console.log("test2");
  };
  return (
    <div>
      {props.showFlag ? (
        <div
          className="w-full h-full top-0 left-0 bottom-0 right-0 z-10 bg-white opacity-80"
          onClick={closeOverlay}
        >
          <div className="flex justify-between items-center h-16 pb-12">
            <h1 className="hover:opacity-60">
              <Link href="/">
                <a>
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={80}
                    height={40}
                  />
                </a>
              </Link>
            </h1>
            <button className="hover:opacity-60" onClick={closeOverlay}>
              <GoThreeBars size={40} />
            </button>
          </div>
          <nav className="text-center">
            <ul>
              <div className="h-8"></div>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>投稿一覧</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>むらむすび</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>全国の村</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>上野村</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>大鹿村</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link>
                  <a>東成瀬村</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>タグ一覧</a>
                </Link>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
      {console.log("okay")}
    </div>
  );
};
