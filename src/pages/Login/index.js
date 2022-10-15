import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page";
import { useUser } from "../../contexts/UserContext";
import {
    Button,
    FormControl,
    FormControLabel,
    FormControlAction,
    FormControlInput
} from "../../globalStyles";

export const Login = () => {
    
    const {register, handleSubmit, reset,
        formState: {errors, isValid}
    } = useForm ({mode: "onChange"});

    const {setAuthenticate, setUserinfo} = useUser();
    const navigate =useNavigate();

    const onSubmitLogin = (data) => {
        console.log("data",data);
        if (data.email=== "j@gmail.com" && data.password === "123456"){
            setAuthenticate(true);
            setUserinfo({name: "juan", email:"j@gmail.com", phone:"555555"})
            reset();
            setTimeout (()=> {
                navigate('/');
            }, 2000)
        } else {
            alert('Error credenciales')
        }
    }

    
    return (
        <Page>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <FormControl>
                    <FormControLabel>Correo electrónico</FormControLabel>
                    <FormControlInput 
                        type="email" 
                        {...register("email", {required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    { errors.email?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.email?.type === "pattern" && 
                        (<span>Ingrese un correo válido</span>)
                    
                    }
                </FormControl>

                <FormControl>
                    <FormControLabel>Contraseña</FormControLabel>
                    <FormControlInput 
                        type="password"
                        {...register("password", {required: true})}
                     />
                      { errors.password?.type === "required" && 
                        (<span>La contraseña es obligatorio</span>)
                    
                    }
                </FormControl>



                <FormControlAction>
                    <Button disabled={!isValid} type="submit">Ingresar</Button>
                </FormControlAction>
                {isValid ? "Es válido" : "No es válido"}

            </form>

        </Page>
    );
};