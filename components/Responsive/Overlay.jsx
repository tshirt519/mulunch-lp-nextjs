import React from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import Image from "next/image";
import { GoThreeBars } from "react-icons/go";

export const Overlay = (props) => {
  const closeOverlay = () => {
    props.setShowOverlay(false);
    console.log("test2");
  };
  return (
    <div className="w-full h-full top-0 left-0 bottom-0 right-0 z-10 bg-white opacity-80" onClick={closeOverlay}>
      {props.showFlag ? (
        <div>
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
              <GoThreeBars size={40}/>
            </button>
          </div>
          <nav className="text-center">
            <ul>
              <div className="h-8"></div>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="concept" smooth={true} duration={1000} offset={-50}>
                  <a>CONCEPT</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="project" smooth={true} duration={1000} offset={50}>
                  <a>PROJECTS</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="topic" smooth={true} duration={1000} offset={0}>
                  <a>TOPICS</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="village" smooth={true} duration={1000} offset={120}>
                  <a>VILLAGE</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="lunch" smooth={true} duration={1000} offset={0}>
                  <a>LUNCH</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll
                  to="gallery"
                  smooth={true}
                  duration={1000}
                  offset={-600}
                >
                  <a>GARLLERY</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Scroll to="join" smooth={true} duration={1000} offset={-50}>
                  <a>JOIN</a>
                </Scroll>
              </li>
              <li className="m-8 text-xl hover:opacity-60">
                <Link href="/blog">
                  <a>BLOG</a>
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
