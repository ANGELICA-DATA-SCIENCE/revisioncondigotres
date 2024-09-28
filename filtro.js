// Tenemos un li de productos

const productos = [{nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

/** Faltó terminar la constante con un ; aunque en JavaScript no es estrictamente necesario, 
 * por buenas practicas es recomendable*/
const li = document.getElementsByName("lista-de-productos");
/**el nombre de la constante no debe iniciar con un caracter especial y ademas
 * en el parametro del metodo querySelector deber ir solo el nombre del selector por id sin el (.)
 */
const i = document.querySelector('input');

for (let i = 0; i < productos.length; i++) {
  /**agregar el id del la etiqueta div y no el nombre de la etiqueta */
  var d = document.createElement("lista-de-productos");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  /** falto terminar con ; */
  ti.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)
/**el error marca que no es una función así que al quitarle los parentesis */
  li.appendChild;
}

displayProductos(li);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
/**la varible i no debe iniciar con caracter especial */
  const texto = i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  