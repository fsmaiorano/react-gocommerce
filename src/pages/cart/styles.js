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
    border: 1px solid #dddddd;
    padding: 3rem;
    margin-top: 2rem;
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

    small {
        color: grey;
    }

    i {
        color: grey;
        cursor: pointer;
    }

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
