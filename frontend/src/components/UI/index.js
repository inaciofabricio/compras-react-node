import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
    line-height: 28px;
`;

export const H2 = styled.h2`
    border-bottom: 1px solid #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
`;

export const ConteudoList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 75vh;
`;

export const AlertDanger = styled.span`
    background-color: #F8D7DA;
    border: 1px solid #F5C2C7;
    border-radius: 5px;
    color: #842029;
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    width: 100%;
`;

export const AlertSucesso = styled.span`
    background-color: #D1E7DD;
    border: 1px solid #BADBCC;
    border-radius: 5px;
    color: #0F5132;
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    width: 100%;
`;

export const Form = styled.form`
    color: #000000;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 15px;
    padding: 25px;
`;