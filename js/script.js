function valida_envio(){

    //this.valida_nombre();
    //this.valida_email();
    //this.valida_password();
    this.valida_ifIsChecked();

}

function valida_nombre(){

    if (document.fvalida.nombre.value.length==0){
        alert('Favor complete el campo full name')
        return 0;
    } 
    this.valida_email();
    this.valida_password();
}

function valida_email(){
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

}

function valida_password(){
    var pss = document.fvalida.passwordForm.value
    console.log(pss)
    if(pss.length >= 7 && pss.length <= 16){
        alert('password valido')
    } else {
        alert('Ingrese un password valido')
        return 0;
    }
}

function valida_ifIsChecked(){
    var check = document.getElementById("terms").checked
    console.log(check);

    if(check == false){
        alert('Acepta terminos y condiciones')
    }else{
        console.log("usuario registrado");
    } 
}


/////////////// OBJETOS
var myCar = new Object();
myCar.marca = 'AUDI';
myCar.modelo = 'Q5';
myCar.motor = '2.0';
myCar.color = 'Black';

console.log(myCar)

var myCar2 = {
    marca: 'VW',
    modelo: 'Tiguan',
    motor: '2.0',
    color: 'White',
    confort:{
        cuero: 'si',
        techocorredizo: 'no'
    }
}

console.log(myCar2)




/////////////// ARREGLOS
var smartphones = ['Samsung', 'Blackberry', 'Apple', ['Xiaomi', 'Huawei']]
console.log(smartphones)
console.log(smartphones[3][1])

//ANADIR AL FINAL
smartphones.push('Motorola')

//ELIMINAR EL ULTIMO ELEMENTO
smartphones.pop()
console.log(smartphones.length)

//ANADIR AL INICIO
smartphones.unshift('Kyocera')

//ELIMINAR EL PRIMER ELEMENTO
smartphones.shift()

smartphones.forEach(function(elemento, indice, array){
    console.log(elemento, indice)

})

//ENCONTRAR EL INDICE
smartphones.indexOf('Apple')

const miPass = /d(b+)(d)/i
console.log(miPass.exec('dasfdndsfdbdwer'))









