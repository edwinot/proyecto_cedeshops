import { useForm } from "react-hook-form";
import { Page } from "../../components/Page";

import { Button, FormControl, FormControLabel, FormControlAction, FormControlInput } from "../../globalStyles";



export const Checkout = () => {


    const {register, handleSubmit, 
        formState: {errors, isValid}
    } = useForm ({mode: "onChange"});

    const onSubmitCheckout = (data) => {
        console.log('data',data);
    }

    return (
    
    
    
    <Page>
        
        

        



        
        
        <h1>CARRITO</h1>
        <form onSubmit={handleSubmit(onSubmitCheckout)}>
            <FormControl>
                <FormControLabel>Dirección de Envío</FormControLabel>
                <FormControlInput                   
                 type= "addres"
                 {...register("addres", {required:true, pattern: /[A-Za-z]/})}

                />
                 { errors.name?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.name?.type === "pattern" && 
                        (<span>Ingrese una dirección válida</span>)
                    
                    }
            </FormControl>

            <FormControl>
                <FormControLabel>Comentarios finales del pedido</FormControLabel>
                <FormControlInput                   
                 type= "comment"
                 {...register("comment", {required:true, pattern:  /[A-Za-z]/})}

                />
                 { errors.email?.type === "required" && 
                        (<span>Este campo es obligatorio</span>)
                    
                    }
                    { errors.email?.type === "pattern" && 
                        (<span>Ingrese un comentario</span>)
                    
                    }
            </FormControl>

            
           
                <FormControlAction>
                    <Button disabled={!isValid} type="submit">Comprar</Button>
                </FormControlAction>
                {isValid ? "Es válido" : "No es válido"}

          

        </form>
    </Page>
    )

}