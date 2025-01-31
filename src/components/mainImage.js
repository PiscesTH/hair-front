import { PriceContainer, PriceImage } from "../style/mainImageStyle";

const Price = ({resizing ,image}) => {

    return (
        <PriceContainer>
            <PriceImage resizing={resizing} src={image}></PriceImage>
        </PriceContainer>
    );
}

export default Price;