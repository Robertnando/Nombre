//var y led se pueden declarar sin iniciar
var gato = "hola mundo";
let carro = "soy un corcho feliz";
console.log(gato)
console.log(carro)

//Const en js solo se puede asignar 1 sola vez, pero se puede modificar
const roblox = "ROOOOBLOXXXX!!!"; 
console.log(roblox)

//Primitivos
let x = 12;
x = x+2;
console.log(x)
//tipo de objeto. Tiene una referencia de datos que luego se translada al valor actual
let z = [3,6];
let y = z;
y.push(9)
console.log(z)
//Typeof: dectectar el tipo de variable.
//Number.
let velocidad = 69420;
console.log(typeof velocidad)
//String.
let userName = "Monito"
console.log(typeof userName)
//boolean.
let isActive = true;
console.log(typeof isActive)
//undefined. Variable cuyo valor no a sido definido
let concho;
console.log(typeof concho)
//Null es el valor de la nada xd
let height = null;
console.log(typeof height)
//BigInt (numeros grandes)
let e = 3n ** 55n;
console.log(typeof e)
//Symbol. Representa un valor unico.
let password = Symbol("sym");
console.log(typeof password)
//4 array (matrices)
let spamton = ["HYPERLINK BLOCKED", 500, true]
console.log(typeof (spamton));
//5 Objetos
let Neo = { modelo: "KROMER", value: 2120, sell: 0};
console.log(typeof Neo)

//El bloque es lo que contiene dentro de la llave de apertura y la llave de salida "{}"
// para las variables que no se cambian se usa cons y para las variables que si cambian se usa led
//una variables no puede iniciar con un digito Ejem: "2"
//Las variables pueden iniciaar con el signo de dolar, una letra o el signo de guión bajo.
//Para nombres complejos se usa una notación de camello. "minuscula y mayuscula Ejemp:{userName}"

//Datos primmitivos no se pueden alterar ni tienen propiedades y se acopian por valor

