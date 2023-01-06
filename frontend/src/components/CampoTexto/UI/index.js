import styled from "styled-components";

export const Grupo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
    width: 100%;
`;

export const Input = styled.input`
    color: #000000;
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
    outline: none;
    background-image: -webkit-linear-gradient(90deg, #000000 50%, transparent 50%);
    background-image: linear-gradient(90deg, #000000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:focus {
        color: #FFFFFF;
        background-position: 0;
    }
    &:disabled {
        color: #000000;
        background-color: #CCCCCC;
    }
`;

export const Alert = styled.span`
    background-color: #F8D7DA;
    border: 1px solid #F5C2C7;
    border-radius: 5px;
    color: #842029;
    padding: 10px;
`;