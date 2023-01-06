import styled from "styled-components";

export const Grupo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #000000;
`;
export const Select = styled.select`
    color: #000000;
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    background-image: -webkit-linear-gradient(90deg, #000000 50%, transparent 50%);
    background-image: linear-gradient(90deg, #000000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:focus {
        color: #FFFFFF;
        background-color: #000000;
        background-position: 0;
    }
`;