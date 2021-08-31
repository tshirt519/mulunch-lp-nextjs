import styles from "../Access/Access.module.css";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export const Access = () => {
  return (
    <section id="access" className="bg-mulunchRed pt-24 text-mulunchGray">
      <div className="flex justify-evenly border-4 border-white m-20 pt-20 pb-12">
        <div className="mt-48">
          <h2 className={styles.h2}>
            <FiMapPin />
            ACCESS
          </h2>
          <div className="mt-8">
            <p>〒162-0825</p>
            <p>東京都新宿区神楽坂6丁目19</p>
            <p>TEL 03-6457-5597</p>
            <p>11:30-14:30 (LO 14:00)</p>
          </div>
          <div className="mt-4 pt-4 px-12 pb-8 border-mulunchGray border-l-2 border-r-2 rounded-lg">
            <p className="w-24 py-1 px-2 mb-4 text-white text-center bg-mulunchGray">
              最寄駅
            </p>
            <ul>
              <li>JR 飯田橋駅 西口 徒歩11分</li>
              <li>東京メトロ 各線 飯田橋駅 B3出口 徒歩10分</li>
              <li>都営大江戸線 飯田橋駅 B3出口 徒歩10分</li>
              <li>東京メトロ東西線 神楽坂駅 出口1 徒歩3分</li>
              <li>都営大江戸線 牛込神楽坂駅 A3出口 徒歩6分</li>
            </ul>
          </div>
        </div>

        <div className="h-72 w-96 -mt-72 ml-8">
          <Image
            src="/access-image.png"
            alt="access image"
            width={400}
            height={300}
          />
          <iframe
            className="mt-4 h-72 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.93687091488!2d139.7345646156244!3d35.70317108018913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c5736aef4ab%3A0xf2e4e97838ffcb76!2z44KA44KJ44KA44GZ44Gz!5e0!3m2!1sja!2sjp!4v1615879801737!5m2!1sja!2sjp"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="bg-gaSection bg-center bg-cover w-full h-48"></div>
    </section>
  );
};
