import { Map, MapMarker } from "react-kakao-maps-sdk";
import { MainMapContainer, MainText, MainWrap } from "../style/mainStyle";

const center = {lat : 35.87514124558859, lng : 128.81137868953445}

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
}

const Main = () => {

    return (
        <MainWrap>
            <MainMapContainer>
                <MyMap></MyMap>
            </MainMapContainer>
            <MainText>소개글</MainText>
        </MainWrap>
    );
}

export default Main;