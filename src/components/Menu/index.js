import {IoCart, IoHome, IoPerson} from "react-icons/io5";
import { ItemMenu } from "./ItemMenu";
import { MenuWrapper } from "./styles";

const MenuOptions = [
    {
        icon:IoHome,
        label: "Tiendas",
        path:"/",
    },
    {
        icon:IoCart,
        label: "Carrito",
        path:"/checkout",
    },
    {
        icon:IoPerson,
        label: "Usuario",
        path:"/profile",
    },
];

export const Menu = () => {
    return (
        <MenuWrapper>
        
            {MenuOptions.map((item, i) => (
                <ItemMenu 
                    key={i}
                    icon={item.icon} 
                    label={item.label}
                    path={item.path}
                />
             ))
            }
        
        </MenuWrapper>
    );
};