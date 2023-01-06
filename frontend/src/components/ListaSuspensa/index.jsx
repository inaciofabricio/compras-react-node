import Label from "../Label";
import { Grupo, Select } from "./UI";

export default function ListaSuspensa(props) {
    return (
        <Grupo>
            <Label>{ props?.label }</Label>
            <Select 
                name={ props?.name } 
                required={ props?.obrigatorio }
                disabled={ props?.desabilitar } 
                onChange={ evento => props.aoAlterado(evento.target.value) }
                value={ props?.valor }>
                <option value=""></option>
                {
                    props?.itens?.map((item, key) => {
                        return (
                            <option key={ key } value={item._id}>{ item.nome }</option>
                        )
                    })
                }
            </Select>
        </Grupo>
    )
}