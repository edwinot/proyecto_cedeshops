import { CardShopContent, CardShopImage, CardShopWrapper } from "./styles";



export const CardShop = ({_id, image, name, location, category}) => (
    <CardShopWrapper to={`/products/${_id}`}>
        <CardShopImage>
            <img src={image} alt={name} />
        </CardShopImage>
        <CardShopContent>
            <h4>{name}</h4>
            <p>{location}</p>
            <span>{category}</span>
        </CardShopContent>
    </CardShopWrapper>
);
//1. <a> -> section -> contenido
//2. <a> -> contenido