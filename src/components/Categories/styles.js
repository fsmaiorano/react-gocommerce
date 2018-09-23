import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    position: relative;
    font-size: 1.6rem;
    font-weight: bold;
    align-items: center;
    justify-content: space-around;
    background-color: #ff9696;
`;

export const CategoriesItem = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #dd6a6b;
    }
`;
