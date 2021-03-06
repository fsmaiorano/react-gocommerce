import styled from 'styled-components';

export const CategoriesContainer = styled.ul`
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

export const CategoriesItem = styled.li`
    width: 100px;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    a {
        color: #f1e2e2;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    &:hover {
        background-color: #dd6a6b;
    }
`;
