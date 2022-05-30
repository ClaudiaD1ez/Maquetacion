
class Prenda{
    constructor(tipo, talla, color, precio) {
      this.tipo = tipo;
      this.talla = talla;
      this.color = color;
      this.precio = precio;
    }
}

let camisetaFlores = new Prenda("camiseta","M","flores",30);
let camisetaRoja = new Prenda("camiseta2","XL","rojo",32);
let pantalon = new Prenda("pantalon","42","vaquero",40);
let pantalon2 = new Prenda("pantalon","38","verde",43);
let vestido = new Prenda("vestido","L","rosa",20);
let zapatos = new Prenda("zapatos","39","marron",38);



let stock = [];


    
// function añadir(prenda){
//     let prenda = $("#prenda").val()
// }

// function enseñar(){
    // $("#prendas").attr("src", precio).show(1000)
    // $("#prendas").attr("src", prenda).show(1000)
    // $("#modal-body-prendas").append(precio);
// }
// jQuery(() => {
// $("#mostrar").click(function(){
//     $("#camisetaFlores").show(1000); 
//      console.log(camisetaFlores)
// })
// })


jQuery(() => {
    //  let precioFinal =
    $("#camisetaFlores").click(function(){
        stock.push(camisetaFlores)
        $("#mostrar").html("")
         console.log(camisetaFlores)
         let price = 0;

        for(let i= 0; i<stock.length ; i++){
            $("#mostrar").prepend(`<p>${stock[i]["precio"]}</p>`)
            price += stock[i]["precio"]
        }

        $("#mostrar").append(`<p>${price}</p>`)

    })
    
    $("#camisetaRoja").click(function(){
        let price = 0;
        stock.push(camisetaRoja)
        $("#mostrar").html("")
         console.log(camisetaFlores)

        for(let i= 0; i<stock.length ; i++){
            $("#mostrar").prepend(`<p>${stock[i]["precio"]}</p>`)
            price += stock[i]["precio"]
        }

        $("#mostrar").append(`<p>${price}</p>`)

    })






    // $("#camisetaRoja").click(function(){
    //     stock.push(camisetaRoja)
    //     // $("#mostrar").html(camisetaRoja.precio)
    //      console.log(camisetaRoja)
    // })
    
    // $("#pantalon").click(function(){
    //     stock.push(pantalon)
    //     // $("#mostrar").html(pantalon.precio)
    //      console.log(pantalon)
    // })
   

    // $('carrito').click(function(){
    //     for(let i= 0; i<stock.length ; i++){
    //         $("#mostrar").append(stock[i].tipo)
    
    //     }
    
    // })
    

})
