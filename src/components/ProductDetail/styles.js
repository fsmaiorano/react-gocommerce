import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;

    div:nth-of-type(1) {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        margin-top: 4rem;
        margin-right: 2rem;

        img {
            margin: 2rem 0;
        }
    }

    div:nth-of-type(2) {
        width: 50%;
        margin-top: 4rem;
        margin-left: 2rem;
        .product-name {
            font-weight: bold;
            margin-top: 1.5rem;
            font-size: 2.4rem;
        }

        .product-brand {
            margin-top: 0.8rem;
            font-size: 2rem;
            color: grey;
        }

        .product-price {
            margin-top: 3rem;
            font-weight: bold;
            font-size: 3rem;
            color: #54b6a9;
            margin-bottom: 5rem;
        }
    }
`;
