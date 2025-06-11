export const START_TEXT = [
  { id: 1, text: "이제 본격적으로" },
  { id: 2, text: "OO님의 사주팔자를" },
  { id: 3, text: "분석해볼 차례네요." },
];

export const START_TEXT_2 = [
  { id: 1, text: "제가 OO님의 사주를" },
  { id: 2, text: "보기 쉽게 표로 정리했어요." },
];

export const TABLE_COLUMN = [
  { id: 1, text: "時" },
  { id: 2, text: "日" },
  { id: 3, text: "月" },
  { id: 4, text: "年" },
];

//십성
export const TEN_STAR_1 = [
  { id: 1, classicalChinese: "傷官", korean: "(상관)" },
  { id: 2, classicalChinese: "比肩", korean: "(비견)" },
  { id: 3, classicalChinese: "傷官", korean: "(상관)" },
  { id: 4, classicalChinese: "傷官", korean: "(상관)" },
];

//천간
export const HEAVENLY_STEM = [
  { id: 1, classicalChinese: "壬", korean: "임", relation: "陽水" },
  { id: 2, classicalChinese: "丁", korean: "정", relation: "陰火" },
  { id: 3, classicalChinese: "癸", korean: "계", relation: "陰水" },
  { id: 4, classicalChinese: "癸", korean: "계", relation: "陰水" },
];

//지지
export const TERRESTRIAL_BRANCH = [
  { id: 1, classicalChinese: "寅", korean: "인", relation: "陽木" },
  { id: 2, classicalChinese: "巳", korean: "사", relation: "陰火" },
  { id: 3, classicalChinese: "亥", korean: "해", relation: "陰水" },
  { id: 4, classicalChinese: "酉", korean: "유", relation: "陰金" },
];

//십성 2
export const TEN_STAR_2 = [
  { id: 1, classicalChinese: "比肩", korean: "(비견)" },
  { id: 2, classicalChinese: "劫財", korean: "(검재)" },
  { id: 3, classicalChinese: "食神", korean: "(식신)" },
  { id: 4, classicalChinese: "偏財", korean: "(편재)" },
];

export const TWELVE_FORTUNE = [
  { id: 1, classicalChinese: "死", korean: "(사)" },
  { id: 2, classicalChinese: "帝旺", korean: "(제왕)" },
  { id: 3, classicalChinese: "胎", korean: "(태)" },
  { id: 4, classicalChinese: "長生", korean: "(장생)" },
];

export const TWELVE_GODS = [
  { id: 1, classicalChinese: "劫殺", korean: "(겁살)" },
  { id: 2, classicalChinese: "地殺", korean: "(지살)" },
  { id: 3, classicalChinese: "驛馬殺", korean: "(역마살)" },
  { id: 4, classicalChinese: "將星殺", korean: "(장성살)" },
];

export const NOBLEMAN = [
  { id: 1, classicalChineses: [] },
  { id: 2, classicalChineses: [] },
  {
    id: 3,
    classicalChineses: [{ id: 1, chinese: "天乙", korean: "(천을귀인)" }],
  },
  {
    id: 4,
    classicalChineses: [
      { id: 1, chinese: "天乙", korean: "(천을귀인)" },
      { id: 2, chinese: "太極", korean: "(태극귀인)" },
      { id: 3, chinese: "文昌", korean: "(문창귀인)" },
    ],
  },
];
