//Variables
const email= document.getElementById('email');
const asunto= document.getElementById('asunto');
const mensaje=document.getElementById('mensaje');
const btnEnviar= document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


//Event Listener
eventListeners();

function eventListeners(){
    //Inicio de la aplicación y deshabilitar submit
    document.addEventListener('DOMContentLoaded',inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);


    //Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}





//Funciones
function inicioApp(){
    //Deshabilitar el envio

    btnEnviar.disabled=true;



}

//Valida que el campo tenga algo escrito
function validarCampo(){
    
    //Se valida la longitud del texto y si no exta vacio
    validarLongitud(this);

    //Validar unicamente email
    if(this.type ==='email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !=='' && asunto.value !== '' && mensaje.value !==''){
        if(errores.length === 0){
            btnEnviar.disabled= false;
        }
    }
}
//Resetear el formulario
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}

//Cuando se envia el correo
function enviarEmail(e){
    //Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display='block';

    //gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display ='block';

    //Ocultar Spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display='none';
        //spinnerGif.remove();
        
        document.querySelector('#loaders').appendChild(enviado);
        
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },2500);
    
    },2500);

    e.preventDefault();
}

//Verifica longitud de los textos de cada campo
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    //Si indexOd es diferente de 1; si encuentra @
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}