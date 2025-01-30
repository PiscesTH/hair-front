import { PriceContainer, PriceImage } from "../style/priceStyle";

const Price = () => {
    const priceImg = process.env.PUBLIC_URL + "/asset/images/price.png";

    return (
        <PriceContainer>
            <PriceImage src={priceImg}></PriceImage>
        </PriceContainer>
    );
}

export default Price;