

function validar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var obras_sociales = document.getElementById('obras_sociales').value;
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var anio = document.getElementById('anio').value;

    var validarCampos = true;

    //Validación de nombre
    if(nombre === ''){
        pintarCampoError('nombre');
        validarCampos = false;
    } else {
        despintarCampoError('nombre');
    }

    //Validación de apellido
    if (apellido === '') {
        pintarCampoError('apellido');
        validarCampos = false;
    } else {
        despintarCampoError('apellido');
    }

    //Validación de email
    if (email === '') {
        pintarCampoError('email');
        validarCampos = false;
    } else {
        if (!validarEmail(email)) {
            pintarCampoError('email');
            validarCampos = false;
        } else {
            despintarCampoError('email');
        }
    }

    //Validación de obras sociales
    if (obras_sociales === '') {
        pintarCampoError('obras_sociales');
        validarCampos = false;
    } else {
        despintarCampoError('obras_sociales');
    }

    // Validación de fecha de nacimiento
    if(!validarFecha(dia, mes, anio)){
        if(dia == ''){
            pintarCampoError('dia');
            validarCampos = false;
        } else {
            despintarCampoError('dia');
        }

        if(mes <1 || mes >12 || mes == ''){
            pintarCampoError('mes')
            validarCampos = false;
        } else {
            despintarCampoError('mes')
        }

        if(anio == ''){
            pintarCampoError('anio');
            validarCampos = false;
        } else {
            despintarCampoError('anio');
        }
    }
    // Mostrar mensaje de éxito si la validación es correcta
    if (validarCampos) {
        alert('Todos los datos son correctos.');
        return true;
    } else {
        return false;
    }
}

function validarFecha(){
    //Comprobamos que los campos de fecha sean números
    var diaNro = parseInt(document.getElementById('dia').value);
    var mesNro = parseInt(document.getElementById('mes').value);
    var anioNro = parseInt(document.getElementById('anio').value);

    //Usamos la función isNaN o is Not a Number, la cual nos va a mostrar el si el dato no es un número
    if(isNaN(diaNro) || isNaN(mesNro) || isNaN(anioNro)){
        return false;
    }
    return validarDia(diaNro, mesNro, anioNro);
}

function validarAnio(anio){
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function validarDia(dia, mes, anio){
    var arrayMesTreintaYUno = [1,3,5,7,8,10,12];
    var arrayMesTreinta = [4,6,9,11];
    var mesEncontrado = null;

    for (let i = 0; i < arrayMesTreintaYUno.length; i++) {
        const mesArray = arrayMesTreintaYUno[i];
        if(mes === mesArray){
            mesEncontrado = mesArray;
        } 
    }

    if(mesEncontrado !== null){
        if(dia>=32){
            return false;
        } else {
            return true;
        }
    } else {
        for (let i = 0; i < arrayMesTreinta.length; i++) {
            const mesArray = arrayMesTreinta[i];
            if(mes === mesArray){
                mesEncontrado = mesArray;
            }
        }
        if(mesEncontrado !== null){
            if(dia>=31 || !validarAnio(anio)){
                return false;
            } else {
                return true;
            }
        } else {
            if (dia <= 28){
                return true;
            } else if(dia<=29){
                if(validarAnio(anio)){
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
}

function validarEmail(email){
    var contenidoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return contenidoEmail.test(email);
    //El método test va a tomar una cadena y va a devolver true si esa cadena cumple con el patrón definido.
}

function pintarCampoError(idDelCampo){
    var campo = document.getElementById(idDelCampo);
    campo.style.borderColor = 'red';
    campo.style.backgroundColor = '#FDD';
}

function despintarCampoError(idDelCampo){
    var campo = document.getElementById(idDelCampo);
    campo.style.borderColor = '';
    campo.style.backgroundColor = '';
}