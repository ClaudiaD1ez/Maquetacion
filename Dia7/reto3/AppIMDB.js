class Movie{

      constructor(title,releaseYear,nacionality,genre,photo){

            this.title = title;
            this.releaseYear = releaseYear
            this.nacionality = nacionality
            this.genre = genre
            this.photo = photo
        }

        //METDOS  Crear un método que muestre todos los datos de las peliculas

        datosS(){
            return ("</br>"+" Title: " + this.title + "</br>" + "Release Year: " + this.releaseYear + "</br>" +
            "Nacionality: " + this.nacionality + "</br>" + "Genre: " + this.genre + this.photo) 
        }

}

let pelicula1 = new Movie("Los Goonies", 1985 , "EEUU" , "Aventura","http://4.bp.blogspot.com/-Fh_OP795xZo/UVcMPFRiUHI/AAAAAAAADLE/Xg-nrrOfQ2k/s1600/the-goonies-23575-16x9-large.jpg")
let pelicula2 = new Movie("Ruby Sparks", 2012 , "EEUU" ,"Romance-fantasia","https://i.blogs.es/cd0e1b/ruby-20sparks-20critica/450_1000.jpg")
let pelicula3 = new Movie("The Royal Tenenbaums", 2001 , "EEUU" , "Comedia-Drama","https://cynicritics.files.wordpress.com/2011/04/royaltenenbaums.jpg")
let pelicula4 = new Movie("Jujutsu Kaisen", 2022 , "Japon" , "Acción/Fantasía","https://www.cinesa.es/Manager/Peliculas/jujutsukaisen0/cartel395_270.jpg")
let pelicula5 = new Movie("Laurence Anyways ", 2012 , "Canada" , "Drama-romance","https://www.loslunesseriefilos.com/wp-content/uploads/2013/08/laurence-anyways-quad-poster.jpg")


let bbdd = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5]

let imp = "";
function print(){
    for(i=0; i<bbdd.length; i++){
                
        imp += ` <div class="card" style="width: 18rem;">
        <img src= "${bbdd[i].photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${bbdd[i].title}</h5>
          <p class="card-text">${bbdd[i].genre}</p>
          <p class="card-text">${bbdd[i].nacionality}</p>
          <p class="card-text">${bbdd[i].releaseYear}</p>
        </div>
      </div>`

    }
    document.getElementById("print").innerHTML= imp
}

function añadir(){
    let tit= document.getElementById("nombre").value;
    let anoo=document.getElementById("ano").value;
    let naci= document.getElementById("nac").value;
    let genre= document.getElementById("genero").value;
    let foto= document.getElementById("fotos").value;


    let pelicula = new Movie (tit,anoo,naci,genre,foto);
    console.log(pelicula)
    bbdd.push(pelicula)

    console.log(bbdd)
}



function mostrar(){

    document.getElementById("formulario").style.display = "block"
}

// function mostrar2(){

//     document.getElementById("imprimirP").style.display="block"
// }

function ocultar(){
    document.getElementById("parrafo").style.display = "none"
}



// https://static.wikia.nocookie.net/doblaje/images/3/33/Los_Goonies.jpg/revision/latest?cb=20200729235949&path-prefix=es
// https://pics.filmaffinity.com/Ruby_Sparks-916175111-large.jpg
// https://basededatos.atrae.org/media/works/pAKi4Ywdz6mqeD0tm6GOBH3vXap_gqxanU4.jpg