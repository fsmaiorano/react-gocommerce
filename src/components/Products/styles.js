import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 100%;
    position: relative;

    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Product = styled.div`
    width: 30rem;
    height: 56.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    margin-top: 2rem;

    .product-name {
        font-weight: bold;
        margin-top: 1.5rem;
        font-size: 2.2rem;
    }

    .product-brand {
        margin-top: 0.8rem;
        font-size: 1.6rem;
        color: grey;
    }

    .product-price {
        margin-top: 1.3rem;
        font-weight: bold;
        font-size: 2.2rem;
        color: green;
    }

    img {
        margin-top: 4rem;
        width: 27rem;
    }
`;
