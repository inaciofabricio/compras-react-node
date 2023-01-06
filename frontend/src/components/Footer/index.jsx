import { useLocation  } from "react-router-dom";
import { isRotaPublica } from "../Util";
import { Section } from "./UI";

export default function Footer() {

    const location = useLocation();
    const pathname = location?.pathname;

    return (
        <>
            {
                (!isRotaPublica(pathname))  && 
                <Section>
                    Footer
                </Section>
            }
        </>
        
    )
}