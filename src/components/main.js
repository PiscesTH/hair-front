import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  MainContentsContainer,
  MainMapContainer,
  MainText,
  MainTextContainer,
  MainTitle,
  MainWrap,
} from "../style/mainStyle";

const center = { lat: 35.87514124558859, lng: 128.81137868953445 };

const MyMap = () => {
  return (
    <Map // 지도를 표시할 Container
      center={center}
      style={{
        // 지도의 크기
        width: "500px",
        height: "500px",
      }}
      level={4} // 지도의 확대 레벨
    >
      <MapMarker // 마커를 생성합니다
        position={center}
      />
    </Map>
  );
};

const Main = () => {
  return (
    <MainWrap>
      <MainTitle>오시는 길</MainTitle>
      <MainContentsContainer>
        <MainMapContainer>
          <MyMap></MyMap>
        </MainMapContainer>
        <MainTextContainer>
            <MainText>하루헤어</MainText>
            <MainText>예시 텍스트</MainText>
            <MainText>예시 텍스트22</MainText>
        </MainTextContainer>
      </MainContentsContainer>
    </MainWrap>
  );
};

export default Main;
