# 로켓 AI 과제 리뷰
<br/>

## 구현 내용
### 1. 반응형 웹 퍼블리싱
 - [x] max-w-md를 기준으로, tailwind의 relative, aspect 유틸리티를 활용하여 이미지 비율을 크기에 맞게 설정하였습니다.
 - [x] 캐릭터의 대화 내용 또한, 사용자가 보는 뷰 포트에 맞게 반응형으로 설정하였습니다.
 - [x] -translate-y-[%]를 이용하여, 서로 다른 이미지가 살짝 겹칠 수 있도록 범위를 조절하였습니다.

### 2. Table 컴포넌트 제작
 - [x] ::before, ::after 가상요소를 활용하여 교체하는 외곽선 디자인
 - [x] 사주 테이블 내 들어가는 요소는, contant.ts 파일에서 변수로 선언하였고 map을 이용하여 배치하였습니다.
 - [x] 테이블 내 폰트도 사용자의 뷰포트에 맞게, 반응형으로 설정하였습니다.

### 3. global.css
 - [x] 자주 사용되는 색상 (pri-navy, black-area) 등은 @theme에서 지정하여 사용하였습니다.

## 반응형 웹을 구성하며 어려웠던 점 및 해결 방안
 - Table 상단의 Image와 text(000님의 사주)를 배치하면서 처음엔 부모 요소의 크기에 맞추고자 fill 옵션을 사용했었는데, 이렇게 되니 부모의 w-full을 상속받아 이미지가 커지는 문제가 발생했었습니다. 해결 방법으로, Image에는 w 및 h를 figma에 정해진대로 크기를 명시하고, 부모 element에서 뷰포트 기준으로 w와 h를 설정하여 크기를 조정하였고, flex justify-between를 이용하여 배치하였습니다.
 - 배포 이후, 갤럭시, 아이폰 두 기종으로 테스트를 진행했습니다. 테스트 이후 아이폰에서는 text가 페이지 위로 올라가는 문제가 발생했습니다. 해결 방안으로 코드에서, 해당 text를 mapping 하는 div태그에서 position 속성을 absolute로 변경하여 이미지를 부모로 하여 위치를 적용하였고, 이후 테스트에서는 갤럭시, 아이폰 모두 잘 작동하였습니다.


## 배포 주소
 - [배포 링크](https://rocket-ai-reponsive-web.vercel.app/)

## 참고자료
 - [tailwindCSS - aspect](https://tailwindcss.com/docs/aspect-ratio)
 - [가상 요소](https://developer.mozilla.org/ko/docs/Web/CSS/::before)
 - [폰트 다운로드, 가평 한석봉 큰붓](https://noonnu.cc/font_page/1279)
