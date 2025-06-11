import Image from "next/image";
import {
  TABLE_COLUMN,
  TEN_STAR_1,
  TEN_STAR_2,
  HEAVENLY_STEM,
  TERRESTRIAL_BRANCH,
  TWELVE_FORTUNE,
  TWELVE_GODS,
  NOBLEMAN,
} from "../constants/constant";

function Table() {
  return (
    <div className="w-full flex justify-center shadow-xl">
      <div className="w-[95%] border-[3px] border-pri-navy table-border-deco bg-table-background px-2 py-6">
        <div>
          <div className="text-center py-6 flex justify-between items-center">
            <div className="w-[15vw] h-[8vw]">
              <Image
                src="/assets/layer.svg"
                alt="왼쪽 이미지"
                width={56}
                height={38}
              />
            </div>
            <div>
              <p className="text-[4vw] font-GH-Regular">김로켓님의 사주</p>
              <span className="text-[5vw] font-GH-Bold">
                1980년 8월 27일 08:10
              </span>
            </div>
            <div className="w-[12vw] h-[17vw]">
              <Image
                src="/assets/layer2.svg"
                alt="오른쪽 이미지"
                width={56}
                height={38}
              />
            </div>
          </div>
          <table className="table-fixed w-[95%] mx-auto border-b border-r border-black text-center shadow-xl">
            <thead>
              <tr className="border-b border-black text-[5vw] font-GH-Bold">
                <th className="py-2 border-r border-black"></th>
                {TABLE_COLUMN.map((items) => (
                  <th
                    key={items.id}
                    className={`py-2 ${
                      items.id === TABLE_COLUMN.length
                        ? ""
                        : "border-r border-gray-border"
                    }`}
                  >
                    {items.text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* 십성1 */}
              <tr className="border-b border-black">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3.5vw] font-GH-Bold">十星</span>
                    <span className="text-[2.5vw] font-GH-Regular">(십성)</span>
                  </div>
                </td>
                {TEN_STAR_1.map((items) => (
                  <td key={items.id}>
                    <div
                      className={`flex flex-col py-1 ${
                        items.id === TEN_STAR_1.length
                          ? ""
                          : "border-r border-gray-border"
                      } `}
                    >
                      <span className="text-[4vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[3vw] font-GH-Regular">
                        {items.korean}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 천간 */}
              <tr className="border-b border-gray-border">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3.5vw] font-GH-Bold">天干</span>
                    <span className="text-[2.5vw] font-GH-Regular">(천간)</span>
                  </div>
                </td>
                {HEAVENLY_STEM.map((items) => (
                  <td
                    key={items.id}
                    className={`py-1 ${
                      items.id === HEAVENLY_STEM.length
                        ? ""
                        : "border-r border-gray-border"
                    }`}
                  >
                    <div
                      className={`w-[90%] mx-auto flex flex-col rounded-2xl py-1 border border-white
                        ${
                          items.relation === "陰水" || items.relation === "陽水"
                            ? "bg-black-area text-white"
                            : "bg-red-area text-white"
                        }
                      `}
                    >
                      <span className="text-[2vw] font-GH-Regular">
                        {items.korean}
                      </span>
                      <span className="text-[5vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[2vw] font-GH-Regular">
                        {items.relation}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 지지 */}
              <tr className="border-b border-black">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3.5vw] font-GH-Bold">地支</span>
                    <span className="text-[2.5vw] font-GH-Regular">(지지)</span>
                  </div>
                </td>
                {TERRESTRIAL_BRANCH.map((items) => (
                  <td
                    key={items.id}
                    className={`py-1 ${
                      items.id === TERRESTRIAL_BRANCH.length
                        ? ""
                        : "border-r border-gray-border"
                    }`}
                  >
                    <div
                      className={`w-[90%] mx-auto flex flex-col py-1 rounded-2xl border  ${
                        items.relation === "陰水" || items.relation === "陽水"
                          ? "border-white bg-black-area text-white"
                          : items.relation === "陽木"
                          ? "border-white bg-blue-area text-white"
                          : items.relation === "陰火"
                          ? "border-white bg-red-area text-white"
                          : "border-black"
                      }`}
                    >
                      <span className="text-[2vw] font-GH-Regular">
                        {items.korean}
                      </span>
                      <span className="text-[5vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[2vw] font-GH-Regular">
                        {items.relation}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 십성2 */}
              <tr className="border-b border-black">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3.5vw] font-GH-Bold">十星</span>
                    <span className="text-[2.5vw] font-GH-Regular">(십성)</span>
                  </div>
                </td>
                {TEN_STAR_2.map((items) => (
                  <td key={items.id}>
                    <div
                      className={`flex flex-col py-1 ${
                        items.id === TEN_STAR_2.length
                          ? ""
                          : "border-r border-gray-border"
                      }`}
                    >
                      <span className="text-[4vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[3vw] font-GH-Regular">
                        {items.korean}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 십이운성 */}
              <tr className="border-b border-black">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3vw] font-GH-Bold">十二運星</span>
                    <span className="text-[2vw] font-GH-Regular">
                      (십이운성)
                    </span>
                  </div>
                </td>
                {TWELVE_FORTUNE.map((items) => (
                  <td key={items.id}>
                    <div
                      className={`flex flex-col py-1 ${
                        items.id === TWELVE_FORTUNE.length
                          ? ""
                          : "border-r border-gray-border"
                      }`}
                    >
                      <span className="text-[4vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[3vw] font-GH-Regular">
                        {items.korean}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 십이신살 */}
              <tr className="border-b border-black">
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3vw] font-GH-Bold">十二神殺</span>
                    <span className="text-[2vw] font-GH-Regular">
                      (십이신살)
                    </span>
                  </div>
                </td>
                {TWELVE_GODS.map((items) => (
                  <td key={items.id}>
                    <div
                      className={`flex flex-col py-1 ${
                        items.id === TWELVE_GODS.length
                          ? ""
                          : "border-r border-gray-border"
                      }`}
                    >
                      <span className="text-[4vw] font-GH-Bold">
                        {items.classicalChinese}
                      </span>
                      <span className="text-[3vw] font-GH-Regular">
                        {items.korean}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* 귀인 -> mapping 다르게 해야함 */}
              <tr>
                <td className="border-r border-black">
                  <div className="flex flex-col">
                    <span className="text-[3.5vw] font-GH-Bold">貴人</span>
                    <span className="text-[2.5vw] font-GH-Regular">(귀인)</span>
                  </div>
                </td>
                {NOBLEMAN.map((items) => (
                  <td
                    key={items.id}
                    className={`${
                      items.id === NOBLEMAN.length
                        ? ""
                        : "border-r border-gray-border"
                    }`}
                  >
                    {items.classicalChineses.length ? (
                      items.classicalChineses.map((item) => (
                        <div key={item.id} className="flex flex-col py-1">
                          <span className="text-[4vw] font-GH-Bold">
                            {item.chinese}
                          </span>
                          <span className="text-[3vw] font-GH-Regular">
                            {item.korean}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-[3.5vw] font-GH-Regular">
                        {"(없음)"}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
