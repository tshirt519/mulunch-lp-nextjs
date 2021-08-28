import Image from "next/image";

export const Project = () => {
  return (
    <section id="project" className="bg-mulunchYellow text-mulunchGray py-28">
      <div className="flex items-center font-tsukuB">
        <h2 className="text-5xl flex-1 text-center">むらんちの活動</h2>
        <p className="flex-1 text-xl">
          <span className="pb-2 border-b border-mulunchGray">都心から村へ、村から都心へ</span>
        </p>
      </div>
      <div className="mt-8 ml-56">
        <h3 className="text-2xl">村と私たちができることを、楽しく！</h3>
        <p className="mt-8 text-md">
          活動の大きな柱として、応援したいむらを見つけ、都心で”食の発信”をしています。
        </p>
        <p className="mt-2 text-md">他にむらとつながりながら、田舎体験や観光などを楽しんでいます。</p>
      </div>

      <div className="mt-12 grid grid-cols-3 px-20 text-center">
        <div>
          <Image
            src="/actimg1-5.png"
            alt="project image"
            width={350}
            height={400}
          />
        </div>
        <div className="mt-8">
          <Image
            src="/actimg2-2.png"
            alt="project image"
            width={350}
            height={400}
          />
        </div>
        <div>
          <Image
            src="/actimg3-4.png"
            alt="project image"
            width={350}
            height={400}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-16 px-20">
        <div className="text-right mt-8">
          <Image
            src="/actimg4-2.png"
            alt="project image"
            width={350}
            height={400}
          />
        </div>
        <div className="text-left">
          <Image
            src="/actimg5-2.png"
            alt="project image"
            width={350}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
