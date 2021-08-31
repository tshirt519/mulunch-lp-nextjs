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
        <div className={styles.overlay} onClick={closeOverlay}>
          <div className={styles.close_button}>
            <h1 className={styles.logo}>
              <Link href="/blog">
                <a className={styles.a}>
                  <Image
                    src="/mulunch_logo.png"
                    alt="mulunch logo"
                    width={80}
                    height={40}
                  />
                </a>
              </Link>
            </h1>
            <button onClick={closeOverlay}>
              <GoThreeBars size={40} className={styles.barmenu} />
            </button>
          </div>
          <nav>
            <ul>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>投稿一覧</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>むらむすび</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>全国の村</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>上野村</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>大鹿村</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>東成瀬村</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.a}>タグ一覧</a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/blog">
                  <a className={styles.join}>HOME</a>
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
