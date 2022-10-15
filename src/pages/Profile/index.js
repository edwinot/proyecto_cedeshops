
import { Link } from "react-router-dom";
import { Page } from "../../components/Page"
import { useUser } from "../../contexts/UserContext";
import { Button } from "../../globalStyles";
import { Theme } from "../../themes/theme";


export const Profile = () => {

    const {user} = useUser();

    
    

    

    const UserInfo = () => (
        <div>
            <h3>{user.name}</h3>
            <h5>{user.phone}</h5>
            <p>{user.email}</p>
            <br />
            <br />
            <br />
            <Button>Cerrar Sesión</Button>
            
            
        </div>
    );

    const UserUnauthorized = () => (
        <div>
            <p>Para acceder a tu perfil, inicia sesión</p>
            <Link to={"/login"}>
            <Button bgColor={Theme.alternative}>Iniciar Sesión</Button>
            </Link>
            <br />
            <p>No tienes una cuenta?, Regístrate acá</p>
            <Link to={"/signup"}>
            <Button bgColor={Theme.secoundary}>Registrarme</Button>
            </Link>
        </div>
    )

    return (
    <Page>
        <h1>Mi Cuenta</h1>
        {user.isAuthenticated ? <UserInfo /> : <UserUnauthorized />}
    </Page>
    )
    };