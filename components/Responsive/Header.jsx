import Image from "next/image";
import Link from "next/link";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { Overlay } from "./Overlay";

export const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const ShowOverlay = () => {
    setShowOverlay(true);
  }

  return (
    <>
      <header className="hidden justify-between items-center fixed z-10 top-0 left-0 px-16 shadow w-full h-24 bg-white opacity-80 tablet:flex">
        <h1 className="mt-2 hover:opacity-60">
          <Link href="/">
            <a>
              <Image
                src="/mulunch_logo.png"
                alt="mulunch logo"
                width={100}
                height={50}
              />
            </a>
          </Link>
        </h1>
        <nav>
          <button className="border-none mt-1 bg-inherit hover:opacity-60" onClick={ShowOverlay}>
            <GoThreeBars size={50}/>
          </button>
          <Overlay showFlag={showOverlay} setShowOverlay={setShowOverlay} />
        </nav>
      </header>

    </>
  );
};

// animationのデータ仮
// animation: opacity 0.5s ease 0s 1 alternate none running;
// }
// @keyframes opacity {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }

