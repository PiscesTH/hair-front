import { PriceContainer, PriceImage } from "../style/mainImageStyle";

const MainImage = ({resizing ,image}) => {

    return (
        <PriceContainer>
            <PriceImage resizing={resizing} src={image}></PriceImage>
        </PriceContainer>
    );
}

export default MainImage;