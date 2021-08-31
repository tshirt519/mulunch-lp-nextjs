import Image from "next/image";

export const Join = () => {
  return (
    <section id="join" className="bg-mulunchBlue text-mulunchGray pt-6">
      <div className="flex justify-around items-center">
        <div className="flex justify-center items-center w-full ">
          <h2 className="text-white text-7xl">JOIN</h2>
          <p className="ml-12 text-xl text-bold border-b border-mulunchGray pb-1">参加してみよう！</p>
        </div>
        <div className="flex justify-around items-center w-full ">
          <Image
            src="/join-right-3.png"
            alt="join description"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="ml-48 -mt-40">
        <h3 className="text-xl">「村」をむすぼう</h3>
        <p className="mt-6">
          <span>むらんち</span>
          では、一緒にむらをむすぶ仲間を募集しています。
        </p>
        <p>
          いろんな興味・関心を持ったメンバーの関わりのなかで活動がうまれています。
        </p>
        <p>少しでも興味がある方はお気軽にお問い合わせくださいね！</p>
      </div>

      <div className="mt-4 text-center">
        <Image
          src="/join-flow1.png"
          alt="join flow"
          width={1200}
          height={700}
        />
      </div>

      <form className="mx-auto w-3/4" action="mailto:muramusubi.lunch@gmail.com" method="POST">
        <div className="flex justify-between items-center mt-12">
          <input className="shadow block w-96 h-12" type="text" name="shimei" placeholder="お名前" />
          <input className="shadow block w-96 h-12" type="email" name="email" placeholder="メールアドレス" />
        </div>
        <textarea className="shadow block mt-12 mx-auto w-full"
          name="contact"
          cols="167"
          rows="16"
          placeholder="お問い合わせ内容"
        ></textarea>
        <input className="shadow-md block w-96 h-12 my-12 mx-auto bg-mulunchOrange rounded-full text-white opacity-80 cursor-pointer hover:opacity-100" type="submit" value="送信" />
      </form>

      <div className="h-24 w-full bg-jfSection bg-center bg-cover"></div>
    </section>
  );
};
