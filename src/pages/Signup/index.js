import { useForm } from "react-hook-form";
import { Page } from "../../components/Page";
import { Button, FormControl, FormControLabel, FormControlAction, FormControlInput } from "../../globalStyles";

export const Signup = () => {

    const {register, handleSubmit, 
        formState: {errors, isValid}
    } = useForm ({mode: "onChange"});

    const onSubmitLogin = (data) => {
        console.log('data',data);
    }

    return (
    
    
    
    <Page>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
            <FormControl>
                <FormControLabel>Nombre</FormControLabel>
                <FormControlInput                   
                 type= "name"
                 {...register("name", {required:true, pattern: /[A-Za-z]/})}

                />
                 { errors.name?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.name?.type === "pattern" && 
                        (<span>Ingrese un nombre válido</span>)
                    
                    }
            </FormControl>

            <FormControl>
                <FormControLabel>Correo electrónico</FormControLabel>
                <FormControlInput                   
                 type= "email"
                 {...register("email", {required:true, pattern: /\S+@\S+\.\S+/})}

                />
                 { errors.email?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.email?.type === "pattern" && 
                        (<span>Ingrese un correo electrónico válido</span>)
                    
                    }
            </FormControl>

            <FormControl>
                <FormControLabel>Teléfono</FormControLabel>
                <FormControlInput                   
                 type= "phone"
                 {...register("phone", {required:true, pattern: /^-?[0-9]\d*\.?\d*$/})}

                />
                 { errors.phone?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.phone?.type === "pattern" && 
                        (<span>Ingrese un telefono válido</span>)
                    
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
                    <Button disabled={!isValid} type="submit">Registrar</Button>
                </FormControlAction>
                {isValid ? "Es válido" : "No es válido"}

          

        </form>
    </Page>
    )
}