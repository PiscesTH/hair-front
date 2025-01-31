import styled from "styled-components"

export const PriceContainer = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
`;

export const PriceImage = styled.img`
    max-width: 100%;
    height: ${(props) => (props.resizing ? "100%": "auto")};
`;