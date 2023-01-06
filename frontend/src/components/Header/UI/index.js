import styled from "styled-components";

export const Section = styled.section`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BIconTitulo = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const Titulo = styled.span`
    font-size: 30px;
    font-weight: 600;
`;

export const BUsuarioSair = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const Usuario = styled.span`
    font-size: 24px;
    text-decoration: underline;
    cursor: pointer;
`;

export const Button = styled.button`
    color: #FFFFFF;
    background-color: #bb2d3b;
    border: 1px solid #dc3545;
    padding: 5px 15px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    gap: 10px;

    &:hover {
        background-color: #dc3545;
    }
`;
