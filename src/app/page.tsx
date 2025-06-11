import Image from "next/image";
import { START_TEXT, START_TEXT_2 } from "./constants/constant";
import Table from "./_component/Table";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <div className="relative w-full aspect-[375/752] max-w-md">
        <Image
          src="/assets/firstImage.svg"
          alt="위를 쳐다보는 이미지"
          fill
          className="object-cover"
          priority
        />

        <div className="w-full relative font-GH-Regular text-[4vw] min-[448px]:text-lg top-[86%] right-[15%] flex flex-col text-center z-10">
          {START_TEXT.map((text) => (
            <span key={text.id} className="fade-in">
              {text.text}
            </span>
          ))}
        </div>
      </div>
      <div className="relative aspect-[351/285] z-10">
        <Image
          src="/assets/secondImage.svg"
          alt="그리는 이미지"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative aspect-[375/410] z-20 -translate-y-[15%]">
        <Image
          src="/assets/thirdImage.svg"
          alt="팔꿈치 괴는 이미지"
          fill
          className="object-cover"
        />
        <div className="w-full absolute font-GH-Regular text-[4vw] top-[10%] right-[12%] min-[448px]:text-lg flex flex-col text-center z-30">
          {START_TEXT_2.map((text) => (
            <span key={text.id} className="mt-1">
              {text.text}
            </span>
          ))}
        </div>
      </div>

      <div className="relative aspect-[351/621] text-center -translate-y-[10%] z-40">
        <Table />
      </div>
    </div>
  );
}
