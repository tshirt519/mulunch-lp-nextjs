import Image from "next/image";

export const Concept = () => {
  return (
    <section id="concept" className="flex justify-center pt-24">
      <div className="flex-1 text-center">
        <h2 className="font-tsukuB text-6xl text-mulunchGray pt-24 pb-12 ">
          <p>初めまして、</p>
          <p>むらんちです！</p>
        </h2>
        <div className="text-xl text-mulunchGray mt-12">
          <p className="mt-6">私たちは、2018年に発足した若者中</p>
          <p className="mt-6">心のボランティア団体です。</p>
          <p className="mt-6">”食べること”と豊かな自然や暮らしが</p>
          <p className="mt-6">ある”地方のむら”が大好きで、私た</p>
          <p className="mt-6">ちで何か「むらを応援する」ことがで</p>
          <p className="mt-6">きないかと思い始まりました。</p>
        </div>
        <div className="text-xl text-mulunchGray mt-12">
          <p className="mt-6">むらと私たち、”人”がつながる。</p>
          <p className="mt-6">むらの”おいしい食”でつながる。</p>
          <p className="mt-6">”楽しいこと”でつながる。</p>
        </div>
        <Image
          className="filter invert-30 sepia saturate-400 hue-rotate-30 brightness-90 contrast-100"
          src="/conceptlogo.png"
          alt="concept logo"
          width={500}
          height={300}
        />
        {/* filter: invert(30%) sepia(100%) saturate(405%) hue-rotate(30deg)
    brightness(90%) contrast(100%); */}
      </div>
      <div className="flex-1 text-center">
        <Image
          src="/conceptright.png"
          alt="concept image"
          width={800}
          height={1000}
        />
      </div>
    </section>
  );
};
