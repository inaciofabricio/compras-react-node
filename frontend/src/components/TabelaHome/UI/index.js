import styled from "styled-components";

export const Section = styled.section`
    background-color: #F2F2F2;
    border-radius: 5px;
    margin: 15px;
    min-height: 70vh;
    padding: 15px;
    box-shadow: 5px 5px 0px rgb(255 255 255 / 25%);
`;
export const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 2px solid #000000;
    padding: 5px 0;
`;

export const ItemCabecalho = styled.div`
    flex-basis: ${props => (props ? props?.fb : "")}%;
    text-align: center;
    line-height: 20px;
    font-weight: 500;
    font-size: 14px;
    color: #000000;
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    line-height: 20px;
    padding: 5px 0;
`;

export const ItemLinha = styled.div`
    flex-basis: ${props => (props ? props?.fb : "")}%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
`;

export const Button = styled.button`
    background-color: #00000090;
    background-image: -webkit-linear-gradient(45deg, #000000 50%, transparent 50%);
    background-image: linear-gradient(45deg, #000000 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    border: none;
    border-color: #FFF;
    border-radius: 10px;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    padding: 5px 15px;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:hover {
        background-position: 0;
    }
`;