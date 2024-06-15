
function validarFormulario(){
    //obtener los valores del formulario
    var nombre=document.getElementById("nombre").value.trim(); // con trim le corto todos los espacios en blanco que pudiesen haber al final y principio
    var apellido=document.getElementById("apellido").value.trim();
    var email=document.getElementById("email").value.trim();
    var pais=document.getElementById("pais").value.trim();
    var fecha=document.getElementById("fechaNacimiento").value.trim()

//verificar si algun campo está en blanco

if(nombre==="" || apellido==="" || email==="" || pais==="" || fecha===""){
    alert("Por favor complete todos los campos del Formulario");
    return false;
}

//verificar si el nombre contiene solo caracteres alfabéticos y espacios

for(var i=0; i<nombre.length; i++){
    var charCode=nombre.charCodeAt(i);
    if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122) || charCode===32)){
        alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
}


//verificar si el apellido  contiene solo caracteres alfabéticos y espacios

for(var i=0; i<apellido.length; i++){
    var charCode2=apellido.charCodeAt(i);
    if(!((charCode2>=65 && charCode2<=90) || (charCode2>=97 && charCode2<=122) || charCode2===32)){
        alert("El campo 'Apellido' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
}

//verificar si el Pais de Residencia  contiene solo caracteres alfabéticos y espacios

for(var i=0; i<pais.length; i++){
    var charCode2=pais.charCodeAt(i);
    if(!((charCode2>=65 && charCode2<=90) || (charCode2>=97 && charCode2<=122) || charCode2===32)){
        alert("El campo 'Pais de Residencia' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
}

 
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
console.log("el mail a validar es" +email);
	
	if( validEmail.test(email) ){
		
        alert("Muchas Gracias por completar el Formulario");
		return true;
	}else{
		alert('La dirección de email es incorrecta. Debe contener la forma: nombre usuario + @ + servidor + dominio');
		return false;
	}

}