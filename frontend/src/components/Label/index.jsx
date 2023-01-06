import { Text } from "./UI";

export default function Label(props) {
    return (
        <Text>{ props.children }:</Text>
    )
}