class BlueCode {
    constructor(url, data, method) {
        this.url = url;
        this.data = data;
        this.method = method;
    }

    async insercion() {
        try {
            const respuesta = await fetch(this.url, {
                body: this.data,
                method: this.method
            });
            const data = await respuesta.json();
            return data;
        } catch (error) {
            console.log(`Se produjo un error en el proceso: ${error}`);
        }
    }

    async consulta(filtro = "") {
        try {
            const respuesta = await fetch(`${this.url}/${filtro}`, {
                method: this.method 
            });
            const data = await respuesta.json();
            return data;
            // data.map(contenido => {
            //     return contenido;
            // });
        } catch (error) {
            console.log(`Se produjo un error en el proceso: ${error}`);
        }
    }

    async eliminar(id) {
        try {
            const respuesta = await fetch(`${this.url}/${id}`, {
                method: 'DELETE'
            });
            const data = await respuesta.json();
            return data;
        } catch (error) {
            console.log(`Se produjo un error en el proceso: ${error}`);
        }
    }

    async actualizar(id) {
        try {
            const respuesta = await fetch(`${this.url}/${id}`, {
                method: 'PUT'
            });
            const data = await respuesta.json();
            return data;
        } catch (error) {
            console.log(`Se produjo un error en el proceso: ${error}`);
        }
    }
}

/* let datos = new FormData();
datos.append('usuario', 'front');
datos.append('pass', '12345678');
console.log(datos);

let envio = new BlueCode('php/info.php', datos, 'POST');

await Validation.validarURL('https://pokeapi.co/api/v2/pokemon/ditto');
await envio.insercion();

 */



const mis_input = ["nombre","apellidos","email","telefono"];

class Validacion{
    vacios(datos_validar){
        for(let i = 0; i < datos_validar.length; i++){
            let valor = document.getElementById(datos_validar[i]).value;
            if(valor == ""){
                alert(`El campo ${datos_validar[i]} no puede ir vacio!!`);
                break;
            }else{
                return true;
            }
        }
    }
    
    nombres(input){
        let validacion = document.getElementById(input).value;
        let letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+/;
        if(!letras.test(validacion)){
            alert(`El campo ${input} debe contener solo letras`)
        }else{
            return true;
        }
    }

    apellidos(input){
        let validacion = document.getElementById(input).value;
        let letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+/;
        if(!letras.test(validacion)){
            alert(`El campo ${input} debe contener solo letras`)
        }else{
            return true;
        }
    }

    emails(input){
        let validacion = document.getElementById(input).value;
        let letras = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        if(!letras.test(validacion)){
            alert(`El campo ${input} debe contener correos electronicos`)
        }else{
            return true;
        }
    }
    
    telefonos(input){
        let validacion = document.getElementById(input).value;
        let letras = /\+?(\d{1,3})?[-.\s]?(\(\d{1,3}\)|\d{1,3})[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,10}/;
        if(!letras.test(validacion)){
            alert(`El campo ${input} debe contener numeros telefonicos`)
        } else{
            return true;
        }
    }

   
}
let validate = new Validacion();
const enviar = () => {
    validate.vacios(mis_input);
    validate.nombres("nombre");
    validate.apellidos("apellidos");
    validate.emails("email");
    validate.telefonos("telefono");
}
