import styled from "styled-components";

export const Button = styled.button`
    background-color: #00000090;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 15px;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    margin: 15px 0;
    border-color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #000000 50%, transparent 50%);
    background-image: linear-gradient(45deg, #000000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:hover {
        background-position: 0;
    }
`;