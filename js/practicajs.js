
// alert("FUCIONAAAA");
console.log("FUCIONAAAA la consola💻");
// (3) libreria sweetalert
// Swal.fire("hola desde Sweetalert 🏐");
//(4) En el DOM => Modelos de objetos en el documento 
document.write("Hola desde el dom");

// ######## TIPOS DE VARIABLES 
 var edad = 19; // alcance global
 let num =19; // alcance de bloque
 const nombre = "Angie Serrano"; // no cambia  su valor
 const pi = 3.14; // mo cambiar valor }
 const pulgada = 2.54; // mo cambiar valor 

 //###### OPERADORES BASICOS 
 // Aritmeticos (+ - * / -%)
 var num_uno = 5;
 var num_dos = 10;
 console.log(num_dos + num_uno);
 console.log(num_dos - num_uno);
 console.log(num_dos * num_uno);
 console.log(num_dos / num_uno);
 console.log(num_dos % num_uno);
 
 //Comparacion 
 console.log("igual >>>" + (num_dos==num_dos))
 console.log("Estricto Igual >>>" + (num_dos===num_dos))
 console.log("Diferente >>>" + (num_dos!=num_dos))
 console.log("Mayor  >>>" + (num_dos>=num_dos))
 console.log("Mayor igaul >>>" + (num_dos>=num_dos))
 console.log("menor >>>" + (num_dos<num_dos))
 console.log("Manor igaul >>>" + (num_dos<=num_dos))

 // ####### Tipos de Datos 
 var clase = "prog. basica"  // String
 var numero = 5 // numero entero
 var decimal = 2.5 // numero decimal
 var booleano = true // Boolean ( false/true)
 var objeto = {nombre: "Angie", edad: 19, Profesion: "Auxiliar de VT"}
 var array = ["lunes", "martes", "miercoles", "jueves", " viernes"]
var array_num = [1,2,3,4,5,6,7,8,9];
var array_mix = [1, "uno", 5, "cinco", 3.5];

let estudiantes = [
  {nombre:"Angie", edad: 19},
  {nombre:"Santiago", edad: 21},
  {nombre:"Leidy", edad: 42},
  {nombre:"Teo", edad: 10}
];

let curso= {
  nombre:"programacion",
  temas:["html", "css", " js"]

};

console.log(objeto);
console.log(array);
console.log(array[3]);
console.log(estudiantes [1].nombre);
console.log(curso);
console.log(curso.temas);

for (let i = 0; i < 5; i++){
  console.log("numero:"+ i);
}

