import { useState } from "react";
import { Page } from "../../components/Page";
import { Search } from "../../components/Search";
import { CardShop } from "./components/CardShop";

const SHOPS = [
    {
        id: 1,
        name: "D1",
        image: "https://static.wikia.nocookie.net/logopedia/images/a/a8/Tiendas_D1_logo.png",
        location: "Tienda D1 en Medellin",
        category: "Supermercado"
    },
    {
        id: 2,
        name: "Makro",
        image: "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/MAKRO-01-1024x648.jpg",
        location: "Tienda Makro en Medellin",
        category: "Supermercado"
    },
    {
        id: 3,
        name: "La tienda del peluquero",
        image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
        location: "Tienda del peluquero en Medellin",
        category: "Belleza"
    },
    {
        id: 4,
        name: "La tienda del peluquero",
        image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
        location: "Tienda del peluquero en Medellin",
        category: "Belleza"
    },
    {
        id: 5,
        name: "La tienda del peluquero",
        image: "https://www.ubico.me/assets/img_empresa/l/la-tienda-del-peluquero-poblado-accesorios-medellin-antioquia-7453.jpeg",
        location: "Tienda del peluquero en Medellin",
        category: "Belleza"
    }
];

export const Home = () => {

    const [searchShops, setSearchShoops] = useState("");

    const onSearchShops = (data) => {
        setSearchShoops(data);
    }

    return (

        <Page>

            <Search listener={onSearchShops}/>
            {searchShops !== ""
                && (<p>Filtro: <strong>{searchShops}</strong></p> )}
            
            {
                SHOPS.map((item, key) => <CardShop key={key} {...item} />)
            }

        </Page>

    )
};



