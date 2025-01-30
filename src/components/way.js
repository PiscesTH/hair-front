import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  MainContentsContainer,
  MainMapContainer,
  MainTextTitle,
  MainTextContainer,
  MainTitle,
  MainWrap,
  MainTextContent,
} from "../style/mainStyle";

const center = { lat: 35.87514124558859, lng: 128.81137868953445 };

const MyMap = () => {
  return (
    <Map
      center={center}
      style={{
        width: "500px",
        height: "500px",
      }}
      level={4}
    >
      <MapMarker position={center} />
    </Map>
  );
};

const Way = () => {
  return (
    <>
      <MainTitle>오시는 길</MainTitle>
      <MainContentsContainer>
        <MainMapContainer>
          <MyMap></MyMap>
        </MainMapContainer>
        <MainTextContainer>
          <div>
            <MainTextTitle>도로명</MainTextTitle>
            <MainTextContent>
              경북 경산시 진량읍 대학로 1052 <br />
              1층 하루hairstylist
            </MainTextContent>
          </div>
          <div>
            <MainTextTitle>전화번호</MainTextTitle>
            <MainTextContent>053-000-0000</MainTextContent>
          </div>
        </MainTextContainer>
      </MainContentsContainer>
    </>
  );
};

export default Way;
