import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 2.1rem;

    display: flex;
    justify-content: center;
`;

export const Table = styled.table`
    width: 70%;
`;

export const TableHeader = styled.th`
    font-weight: bold;
    text-align: left;
`;

export const TableRow = styled.tr`
    width: 100%;
`;

export const TableData = styled.td`
    text-align: left;
    font-size: 1.9rem;

    ${props =>
    props.image
        && css`
            width: 10%;
            img {
                width: 10rem;
                margin-right: 3rem;
            }
        `};
`;
