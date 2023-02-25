let Nombre ="Julio Cesar"
console. log (Nombre)

const Suma = 4 + 8
console. log(Suma)

const Operación = {
 Operación :  20 + 10 ,
 Operación : 30 - 20,
 Operación : 80 * 2,
}
console. log(Operación)

const Producto = "Celularesgamaalta"
      nombreProd= "Aple"
      Precio = 20
  
      console. log (Producto)

      const Datos = "Julio Cesar "
      const Apellido = "Quispe Garrido"
      const Email ="Juliocesarquispegarrido@gmail.com"
      const Ciudad = "Lima"
      const Profesión = "Full Stack Depeloper"

      console. log ( ` Datos:${Datos } Apellido: ${Apellido } Email:${Email } Ciudad:${ Ciudad} Profesiòn: ${ Profesión} `) 

      const Producto1 = { 
      NombreProducto : "Sansung",
       Precio1 : 300,
       Etqueta : 20,
    }
      
      console. log(Producto1)

      // Funciones 

function Saludar(nombre, edad){
    console. log("Hola. mi nombre es:"+ nombre);
    console. log("y mi edad es:" + edad )
}


 Saludar("julio", 30) 


 function Pelear(tarde,  noche){
    console. log("hola. mañana peleo en la:"+ tarde)
    console. log("y en el:"+ noche)
 }

 Pelear("Estelar", "main event")

 function Novia (conquistar, enamorar){
    console. log("Ire a una Fiesta a:"+ conquistar )
    console.log("y de paso :"+ enamorar)
 }

 Novia ("enamorar", "bailare")


 function Preguntar(quien,cuando){

   console.log("Hola.sabes si ayer fue:"+ quien)
   console.log("No se cuando fue:"+ cuando)
 }
 Preguntar ("Julio", "Julio" )


 "use strict"; //Corre JS de forma Stricta

 // objetos

 const Productos3 = {
   nombreProducto3 : "Celulares alata gama",
   Precio3 : 50,
   Cantidad : 10,
   Marca : "Xiaomi"

 }

 Object.freeze(Productos3) // Freeze no te permite agregar nuevos elementos ni eliminarlos

Productos3.tema ="blue"

delete Productos3.Precio3

console.log(Object.isFrozen(Productos3))
 
 console.log(Productos3)


 // oBJETOS

 const personas = {
   persona1 :"Julio Cesar",
   perona2 : "Samuel",
   persona3 : "Susana",
   persona4 : "Devora",
   persona5 : "Jazmin"

 }


Object.freeze(personas)

 
 personas.persona6 = "Justin",
 personas.persona7 ="Selena",
 personas.persona8 ="Jairo"

 console.log(Object.isFrozen(personas))
 console. log(personas)

 // ejemplo 2

 const Apellidos = {
   Apellidos1:"Quispe",
   Apellidos2:"Garrido",
   Apellidos3:"Teodosio",
   Apellidos4:"borem",
   Apellidos5:"Tiesto"
}

Object.seal(Apellidos) // seal te permite Modificar pero no puedes eliminar 

delete Apellidos.Apellidos2
delete Apellidos.Apellidos4

Apellidos.Apellidos6 = "Marco"
Apellidos.Apellidos7 ="july"


console.log (Apellidos)

// ejemplo 3

const Dirección = {
   Correo : "Juliocesarquispegarrido@gmail.com",
   correo2 : "Juliogarrido@gmail.com",
   correo3 : "Juliocesar@gmail.pe",
   correo9: "tabooquispe@gmail.pe"

}

Object.freeze(Dirección)
 Dirección.correo5 = "Juliogato@gmail.com"
 
 console.log(Object.isFrozen(Dirección))
console.log (Dirección)


// Unir 2 Objetos sin modificar las propiedades 

const Clave = {
   nombreClave:"Julito",
   precio: 20,
   disponibilidad: true


}

const medidas = {
   peso :"1kg",
   medida : "1m"

}

const nuevoProducto = {... Clave,...medidas };

console.log(Clave);
console. log(nuevoProducto);

// ejemplo 2  uniendo 2 objetos

const Ciudades = {
   Ciudad1 : "Lima",
   Ciudad2 : "Arequipa",
   Ciudad3 : "Ayacucho",
   Ciudad4 : "Piura"
}

const Capitales = {
   Capital1: "Centro",
   Capital2: "Palta",
   Capital3 : "Lucanas",
   Capital4 : "Perla"
}


const nuevasCiudades = {...Ciudades, ...Capitales };
console.log(Ciudades);
console.log(nuevasCiudades)

// ejemplo 3

const Enamoradas = {
   Novia1: "Fram",
   Novia2: "Francesaca",
   Novia3: "Camila",
   Novia4: "Ale"

}

const Crush = {
    crush1:"ali",
    crush2:"linda",
    crush3:"amore",
    crush4: true

}


const Nuevaenamoradas = {...Enamoradas, ...Crush }

console.log (Enamoradas);
console.log(Nuevaenamoradas);


 // ejemplo 4

 const datos5 = {
   Nombres1 : "Julio",
   Nombres2 : "Sandra",
   Nombres3 : "Arlin",
   Nombres4 : " Calvin"
 }

 
 const Datos6 = {
   Nombre7: "Emma",
   Nombre8: "Eva",
   Nombre8: "Elsa",
   Nombre9: "Ever",
 }


 const Nuevosdatos