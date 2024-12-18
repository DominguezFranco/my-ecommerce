import { object, string, mixed,} from "yup";

let userSchema = object({
    fullname: string().required("El nombre es requerido"),
    email: string().email().required("El email es requerido"),
    phone: mixed().required("El telefono es requerido"),
})

const validateForm = async(dataForm) => {

    try {
        await userSchema.validate(dataForm)
        return {status: "success"}
    }
    catch (error) {
        return {status: "error", message: error.message}
    }
        
   
}


export default validateForm