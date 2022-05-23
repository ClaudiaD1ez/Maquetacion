// document.getElementById("nombre")

// document.getElementById("origen")

// document.getElementById("destino")

// document.getElementById("persona")

// document.getElementById("fecha1")

// document.getElementById("fecha2")

// document.getElementById("recoger"){

// }

// document.getElementById("filtrar")



// createElement()
// appendChild()

let bbdd = [];
function recogerDatos(){
    let nombre = document.getElementById("nombre").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value.toUpperCase();
    let personas = document.getElementById("personas").value;
    let fecha1 = document.getElementById("fecha1").value;
 
   let usuarios={
       "nombre": nombre,
       "origen":origen,
       "destino":destino,
       "personas":personas,
       "fecha1":fecha1,
   }
   bbdd.push(usuarios);
   console.log(bbdd);
}


function filtrar(){
    // let imprimir = "";
   for(i=0; i<bbdd.length;i++){
      if(bbdd[i].destino == "CANARIAS" || bbdd[i].destino == "MALLORCA" || bbdd[i].destino == "GALICIA"){
        console.log(bbdd[i]);
        // imprimir += bbdd[i].nombre
        // for(j=0 ; j<bbdd[i]; j++){
        //     imprimir += bbdd[i][j]
        // }

        document.getElementById("impNombre").innerHTML =  bbdd[i].nombre
        document.getElementById("impOrigen").innerHTML = bbdd[i].origen
        document.getElementById("impDestino").innerHTML = bbdd[i].destino
        document.getElementById("impPersonas").innerHTML = bbdd[i].personas
        document.getElementById("impFechas").innerHTML = bbdd[i].fecha1
      }

   }
   
        
}