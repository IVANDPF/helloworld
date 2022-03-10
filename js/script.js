function valida_envio(){
    if (document.fvalida.nombre.value.length==0){
        alert('Favor complete el campo full name')
        return 0;
    } 
    
    var testemail = document.fvalida.emailForm.value
    console.log(testemail)
    if(testemail.length <= 0){
        alert('Favor complete el email')
    }else{
        console.log(testemail.indexOf("a"));
        if(testemail.indexOf("@")>=3){
            console.log(testemail.includes(".com"))
            if(testemail.includes(".com")== true){
                console.log('ingreso')
            }
            else{ 
                alert('Ingrese un correo valido .com')
            }
        }
        else{ 
            alert('Ingrese un correo valido @')
        }
        
    }

    var pss = document.fvalida.passwordForm.value
    console.log(pss)
    if(pss.length >= 7 && pss.length <= 16){
        alert('password valido')
    } else {
        alert('Ingrese un password valido')
    }

}