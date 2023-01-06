import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import { Section, H1, Content, Icones } from "./UI";

export default function PageNotFound() {
    return (
        <Section>
            <Content>
                <Icones>
                    <BsEmojiFrown />
                    <BsEmojiFrown />
                </Icones>
                <H1>Página não encontrada</H1>
                <Link to="/">
                    <Botao>
                        Login
                    </Botao>
                </Link>
                <Icones>
                    <BsEmojiFrown />
                    <BsEmojiFrown />
                </Icones>
            </Content>
            
        </Section>
    )
}