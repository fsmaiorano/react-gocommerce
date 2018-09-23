import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;

    h1 {
        color: #ff9696;
    }

    a {
        display: flex;
        color: grey;
        align-items: baseline;
        text-decoration: none;

        i {
            font-size: 20px;
        }
    }
`;
