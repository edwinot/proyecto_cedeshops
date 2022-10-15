import { Link } from "react-router-dom";
import { ItemMenuWrapper } from "./styles";

export const ItemMenu = ({icon: Icon, label, path}) => (
    <Link to={path}>
        <ItemMenuWrapper>
            <Icon />
            <p>{label}</p>
        </ItemMenuWrapper>
    </Link>
)