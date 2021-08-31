import Head from "next/head";
import { BlogFooter } from "/components/Footer/BlogFooter";
import { BlogHeader } from "/components/Header/BlogHeader";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>むらんちブログ</title>
        <meta
          name="description"
          content="食や地方について楽しく学べるコミュニティ、「むらんち」のブログです。"
        />
        <link rel="icon" href="/mulunch_favi.ico" />
      </Head>

      <BlogHeader />
      <main>
        <section id="blogTop"  className="flex justify-center items-center pt-24 h-screen w-full">
          <article>
            <div>
              <div>
                <Image
                  src="https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg"
                  width={600}
                  height={600}
                  alt="topics image"
                />
              </div>

              <div>
                <h3>スナックむらむすび、始まります</h3>
                <div className="flex justify-start items-center">
                  <Link href="/">
                    <a>大鹿村</a>
                  </Link>
                  ／<p>20210816</p>
                </div>
                <div className="flex justify-around items-center">
                  <div>12345</div>
                  <Link href="/">
                    <a>T</a>
                  </Link>
                  <div>
                    <Link href="/">
                      <a className="flex justify-around items-center">
                        <p>むらむすびのスタッフ</p>
                        <Image
                          src="https://mulunchimage.s3-ap-northeast-1.amazonaws.com/posts/スナックむらむすび、始まります_1.jpg"
                          width={30}
                          height={30}
                          alt="topics image"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}
