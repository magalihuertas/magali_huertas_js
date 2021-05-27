// Clases//
class Productos {
    constructor(id, imagenes, titulo, alt, precio, descripcion, stock, marca) {
        this.id = id
        this.imagenes = imagenes
        this.titulo = titulo
        this.alt = alt
        this.precio = precio
        this.descripcion = descripcion
        this.stock = stock
        this.marca = marca
    }
}

//Array de Objetos //
const productosTienda = []

//Push de Objetos para incorporar al Array //
productosTienda.push(new Productos(1,'gatito_2_kg.png','Gatito 2 kg', 'Gatito 2 kg', 1300,'Ünik Alimento Premium para gatito , defensas naturales reforzadas para la etapa de inmunización y crecimiento del gatito, seguridad digestiva con proteínas de muy alta digestibilidad que colaboran al equilibrio intestinal y reducción del olor fecal.', 10, 'UNIK Gato'))
productosTienda.push(new Productos(2,'gatito_7,5_kg.png','Gatito 7,5 kg','Gatito 7,5 kg', 3900, 'Ünik Alimento Premium para gatito , defensas naturales reforzadas para la etapa de inmunización y crecimiento del gatito, seguridad digestiva con proteínas de muy alta digestibilidad que colaboran al equilibrio intestinal y reducción del olor fecal.', 10, 'UNIK Gato'))
productosTienda.push(new Productos(3,'gato_adulto_2_kg.png','Gato Adulto 2 kg','Gato Adulto 2 kg', 1148, 'Ünik Alimento Premium para gato adulto cubre las necesidades del gato a partir del año de edad manteniendo su peso ideal y regulando las bolas de pelo, ofreciendo una nutrición específica y promoviendo su salud óptima y bienestar general.', 10, 'UNIK Gato'))
productosTienda.push(new Productos(4,'gato_adulto_7,5_kg.png','Gato Adulto 7,5 kg', 'Gato Adulto 7,5 kg', 1500, 'Ünik Alimento Premium para gato adulto cubre las necesidades del gato a partir del año de edad manteniendo su peso ideal y regulando las bolas de pelo, ofreciendo una nutrición específica y promoviendo su salud óptima y bienestar general.', 10,'UNIK Gato'))
productosTienda.push(new Productos(5,'perro_cachorro_de_talla_pequena_3kg.png','Perro Cachorro de talla pequeña 3 kg', 'Perro Cachorro de talla pequeña 3 kg', 2992, 'Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar a los perros una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10, 'UNIK Perro'))
productosTienda.push(new Productos(6,'perro_cachorro_de_talla_pequena_7,5kg.png', 'Perro Cachorro de talla pequeña 7,5 kg','Perro Cachorro de talla pequeña 7,5 kg', 1300, 'Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar a los perros una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10,'UNIK Perro'))
productosTienda.push(new Productos(7,'perro_adulto_de_talla_pequena_3kg.png', 'Perro Adulto de talla pequeña 3 kg', 'Perro Adulto de talla pequeña 3 kg', 2801, 'Ünik Alimento Premium para perro adulto talla pequeña cubre las reales necesidades del perro adulto, manteniendo su peso ideal. Alimento premium. Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar a los perros una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10, 'UNIK Perro'))
productosTienda.push(new Productos(8,'perro_adulto_de_talla_pequena_7,5_kg.png','Perro Adulto de talla pequeña 7,5 kg', 'Perro Adulto de talla pequeña 7,5 kg', 1400, 'Ünik Alimento Premium para perro adulto talla pequeña cubre las reales necesidades del perro adulto, manteniendo su peso ideal. Alimento premium. Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar a los perros una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10, 'UNIK Perro') )
productosTienda.push(new Productos(9,'perro_cachorro_de_talla_mediana_y_grande_3_kg.png', 'Perro Cachorro de talla mediana y grande 3 kg', 'Perro Cachorro de talla mediana y grande 3 kg', 4501, 'Ünik Alimento Premium para cachorro talla mediana y grande cubre las reales necesidades del mismo en su etapa de crecimiento, colaborando a alcanzar su estado ideal en etapa adulta. Alimento premium. Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar al cachorro una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10,'UNIK Perro'))
productosTienda.push(new Productos(10,'perro_cachorro_de_talla_mediana_y_grande_15_kg.png','Perro Cachorro de talla mediana y grande 15 kg', 'Perro Cachorro de talla mediana y grande 15 kg', 1151, 'Ünik Alimento Premium para cachorro talla mediana y grande cubre las reales necesidades del mismo en su etapa de crecimiento, colaborando a alcanzar su estado ideal en etapa adulta. Alimento premium. Se trata de un alimento altamente digestible y palatable, con ingredientes rigurosamente seleccionados para proporcionar al cachorro una nutrición equilibrada, de alta calidad y para satisfacer sus necesidades nutricionales.', 10, 'UNIK Perro'))
productosTienda.push(new Productos(11,'perro_adulto_de_talla_mediana_y_grande_3_kg.png','Perro Adulto de talla mediana y grande 3 kg', 'Perro Adulto de talla mediana y grande 3 kg', 3992, 'Ünik Alimento Premium para perro adulto talla mediana y grande cubre las reales necesidades del perro adulto, manteniendo su peso ideal.', 10, 'UNIK Perro'))
productosTienda.push(new Productos(12,'perro_adulto_de_talla_mediana_y_grande_15_kg.png', 'Perro Adulto de talla mediana y grande 15 kg', 'Perro Adulto de talla mediana y grande 15 kg', 3190,'Ünik Alimento Premium para perro adulto talla mediana y grande cubre las reales necesidades del perro adulto, manteniendo su peso ideal.', 10, 'UNIK Perro'))
productosTienda.push(new Productos(13,'optimus_perro_adulto_20_kg.png','Optimus Perro adulto 20 kg','Optimus Perro adulto 20 kg', 3500, 'Nutrición completa para perros adultos. Proporciona la nutrición equilibrada que necesitan los perros adultos para mantenerse saludables, fuertes y activos. Esta fórmula fue diseñada para adaptarse como dieta única y cubre los requisitos en la etapa de adultez.', 10, 'Optimus Perro'))
productosTienda.push(new Productos(14,'optimus_gato_adulto_2_kg.png', 'Optimus Gato Adulto 2 kg', 'Optimus Gato Adulto 2 kg',  690, 'Optimus nutrición completa para gatos adultos destaca como ventajas nutricionales principales: la salud del tracto urinario mediante el control del pH de la orina y los niveles moderados de magnesio, la piel y el pelo gracias al aporte de ácidos grasos esenciales Omega 3 y 6 y su gran palatabilidad.', 10, 'Optimus Gato'))
productosTienda.push(new Productos(15,'optimus_gato_adulto_7,5_kg.png','Optimus Gato Adulto 7,5 kg', 'Optimus Gato Adulto 7,5 kg', 1990, 'Optimus nutrición completa para gatos adultos destaca como ventajas nutricionales principales: la salud del tracto urinario mediante el control del pH de la orina y los niveles moderados de magnesio, la piel y el pelo gracias al aporte de ácidos grasos esenciales Omega 3 y 6 y su gran palatabilidad.', 10, 'Optimus Gato'))
productosTienda.push(new Productos(16,'pet_deli_perro_adulto_20_kg.png','Pet Deli perro adulto 20 kg', 'Pet Deli perro adulto 20 kg', 2510, 'Nutrición completa gracias a su fórmula completa y balanceada cubre las necesidades de los perros adultos en mantenimiento. Aporta todos los nutrientes que un perro adulto necesita.', 10, 'Pet Deli Perro'))

//Conecto con IDs el HTML con el JS//

const contenedorProductos = document.getElementById('producto')
const contenedorCarrito = document.getElementById('carritoContenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const selectFiltro = document.getElementById('filtro')

// Conexión de las cards con Javascript//

mostrarArrayProductos(productosTienda)

function mostrarArrayProductos(array) {
contenedorProductos.innerHTML = ' '
    array.forEach( (producto) => {
        const div = document.createElement('div'); 
        div.classList.add('marginCards')
        div.classList.add('col-md-4')
        div.classList.add('col-xs-12') 
        div.classList.add('producto')
        div.innerHTML = `
        <div class='card h-100'><a href='#'><img class='card-img-top' src='imagenes/${producto.imagenes}' alt='${producto.alt}'></a>
        <div class='card-body'>
            <h5 class='card-title'><a href='#'>${producto.titulo}</a></h5>
            <h5> ${producto.marca}</h5>
            <h5> $${producto.precio}</h5>
            <h5> Stock:${producto.stock}</h5>
            <p class='card-text'>${producto.descripcion}</p>
        </div>
        <div class='card-footer'>
        <button onclick=agregarAlCarrito(${producto.id}) class='btn btn-primary'>Agregar <i class='fas fa-shopping-cart'></i></button>
        </div>
        </div>
        <br>
        `
contenedorProductos.appendChild(div)
} )
}

//Selección de marca a través de un filtro//

function filtrar() {
let valorFiltro = selectFiltro.value
  if (valorFiltro == 'all') {
    mostrarArrayProductos(productosTienda)
} else {
    mostrarArrayProductos(productosTienda.filter( el => el.marca == selectFiltro.value))
}
}
selectFiltro.addEventListener('change', ()=>{
    filtrar()
})

//Comienzo de desarrollo del carrito de compras//

const carrito = [] 

//Función para agregar productos al carrito//

function agregarAlCarrito(itemID) {
  let itemEnCarrito = carrito.find( el => el.id == itemID)
  if (itemEnCarrito){
    itemEnCarrito.cantidad += 1
  } else {
    let {id, titulo, precio,marca} = productosTienda.find( el => el.id == itemID)
    carrito.push({id: id, titulo: titulo, precio: precio, marca:marca, cantidad: 1})
  }

//Guardo el item en el local Storage con JSON//

localStorage.setItem('carrito', JSON.stringify(carrito))
actualizarCarrito()
}

//Función para eliminar productos del carrito//

function eliminarProducto(id) {
let productoAEliminar = carrito.find( el => el.id == id )
productoAEliminar.cantidad --

if (productoAEliminar.cantidad == 0) {
  let indice = carrito.indexOf(productoAEliminar)
  carrito.splice(indice, 1)
  }
actualizarCarrito()
}

//Función para actualizar el carrito//

function actualizarCarrito() {
contenedorCarrito.innerHTML= ''
carrito.forEach( (producto) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <p>Producto: ${producto.titulo}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Precio: $${producto.precio * producto.cantidad}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick=eliminarProducto(${producto.id}) class='boton-eliminar'><i class='fas fa-trash-alt'></i></button>`
contenedorCarrito.appendChild(div)
})
contadorCarrito.innerText = carrito.length

//Arrow function de reduce para sumar los productos en el carrito//

precioTotal.innerText = carrito.reduce( (acc, el) => acc +(el.precio * el.cantidad), 0 )
}
//Botón Mostrar Total Carrito//

function mostrarTotal() {
alert( 'El total de tu compra es de $' +  carrito.reduce((acc, el) => acc += el.precio, 0))
}

//Formulario con DOM, eventos, leyenda y color//

document.getElementById("campoEdad").addEventListener("change",enviarFormulario)

function enviarFormulario(){
  let edad = document.getElementById("campoEdad")
if (edad.value < 18){
  document.getElementById("leyenda").innerHTML ="Sos menor de edad, no podés ser parte del mundo UNIK."
  edad.style.background ="red";
} else {
  document.getElementById("leyenda2").innerHTML ="Muchas gracias por haber ingresado tus datos!"
  edad.style.background ="green";
}
}

//Filtro botón por marca //
let botones = document.getElementsByClassName("botonDeFiltro")
for(let boton of botones){
  boton.addEventListener("click",e=>{
    console.log(e.target.textContent);
    magaFiltrarMarca(e.target.textContent)
  })
}

function magaFiltrarMarca(nombredeMarca){

  let nuevoArray = productosTienda.filter((element) => element.marca == nombredeMarca);
  contenedorProductos.innerHTML = ' '
  nuevoArray.forEach( (producto) => {
    const div = document.createElement('div'); 
      div.classList.add('col-md-4')
      div.classList.add('col-xs-12') 
      div.classList.add('producto')
      div.innerHTML = `
      <div class='card h-100'><a href='#'><img class='card-img-top' src='imagenes/${producto.imagenes}' alt='${producto.alt}'></a>
      <div class='card-body'>
        <h5 class='card-title'><a href='#'>${producto.titulo}</a></h5>
        <h5> ${producto.marca}</h5>
        <h5> $${producto.precio}</h5>
        <h5> Stock:${producto.stock}</h5>
        <p class='card-text'>${producto.descripcion}</p>
      </div>
      <div class='card-footer'>
      <button onclick=agregarAlCarrito(${producto.id}) class='btn btn-primary'>Agregar <i class='fas fa-shopping-cart'></i></button>
      </div>
      </div>
      <br>
      `
contenedorProductos.appendChild(div)
} )
}

//Estilo en el formulario con JQuery //

$(window).ready(function(){
	$("#campoNombre").css("background", "#CEF6F5");
  $("#campoApellido").css("background", "#CEF6F5");
  $("#campoTelefono").css("background", "#CEF6F5");
  $("#campoEmail").css("background", "#CEF6F5");
  $("#campoEdad").css("background", "#CEF6F5");
  $("#campoMensaje").css("background", "#CEF6F5");
});

//Botón JQuery con animación fadeOut //
$("#JqueryAnimacion").click(function () { 
  $("#JqueryAnimacion").fadeOut(600, function(){
  console.log("zaraza")
  });
});

//Botón Jquery de Preguntas frecuentes con animaciones //
$("#boton-show").on("click", function () { 
    $("#boton").show();
});
$("#boton-show2").on("click", function () { 
  $("#boton2").toggle(300);
});
$("#boton-show3").on("click", function () { 
  $("#boton3").slideDown(600);
});

//Formulario de Pedido con Número ascendentes//

const nombreFormularioPedido = $('input#campoPedidoNombre')
const telefonoFormularioPedido = $('input#campoPedidoTelefono')
const emailFormularioPedido = $('input#campoPedidoMail')

const opciones = $('#tituloProducto')
const formularioPedido = $('form')
const botonFormularioPedido = $('#botonPedido')
const listaDePedidos = $('#contenedorPedidos')

let numeroDePedido = 1
/* 
formularioPedido.addEventListener("sumit", ) */

formularioPedido.on('submit', (e)=>{
  e.preventDefault()

  const nombre = nombreFormularioPedido.val().trim()
  const telefono = telefonoFormularioPedido.val().trim()
  const email = emailFormularioPedido.val()
  const pedido = opciones.val()

  if ((nombre.length > 2 && nombre != '') && (telefono.length > 6) && (email.length > 10)) {
    listaDePedidos.append(`
      <li>
      <p>Detalle de su pedido:</p>
      <p>Número de Pedido: ${numeroDePedido}
      <p>Nombre: ${nombre}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Email: ${email}</p>
      <p>Producto Seleccionado: ${pedido}</p>
      </li>
    `)

  nombreFormularioPedido.val('')
  telefonoFormularioPedido.val('')
  emailFormularioPedido.val('')

  numeroDePedido++
  } else {
    alert('Datos inválidos')
  }
})

/* Jquery con API para traer una lista de perros por raza con foto y características del animal */

let breeds;

$('#breed_search').on('input', function(e) {
  let search_str = $(this).val();
  buscarRaza(search_str);
});

function buscarRaza(search_str) {
  let string_length = search_str.length // get the length of the search string so we know how many characters of the breed name to compare it to
  search_str = search_str.toLowerCase(); // ensure search string and breed name are same case otherwise they won't match
  for (let i = 0; i < breeds.length; i++) // loop through all the breeds in order
  {
    let breed_name_snippet = breeds[i].name.substr(0, string_length).toLowerCase(); // get the first few cahracters of the name
    if (breed_name_snippet == search_str) {
      getDogByBreed(breeds[i].id) // show the breed just as we did in the Select demo
      return; // return the function so we don't keep searching
    }
  }
}

// Setup the Controls
let $breed_select = $('select.breed_select');
$breed_select.change(function() {
  let id = $(this).children(":selected").attr("id");
  getDogByBreed(id)
});

// Load all the Breeds
function getBreeds() {
  ajax_get('https://api.thedogapi.com/v1/breeds', function(data) {
    populateBreedsSelect(data)
    breeds = data
  });
}

// Put the breeds in the Select control
function populateBreedsSelect(breeds) {
  $breed_select.empty().append(function() {
    let output = '';
    $.each(breeds, function(key, value) {
      output += '<option id="' + value.id + '">' + value.name + '</option>';
    });
    return output;
  });
}
// triggered when the breed select control changes
function getDogByBreed(breed_id) {
  // search for images that contain the breed (breed_id=) and attach the breed object (include_breed=1)
  ajax_get('https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' + breed_id, function(data) {

    if (data.length == 0) {
      // if there are no images returned
      clearBreed();
      $("#breed_data_table").append("<tr><td>Sorry, no Image for that breed yet</td></tr>");
    } else {
      //else display the breed image and data
      displayBreed(data[0])
    }
  });
}
// clear the image and table
function clearBreed() {
  $('#breed_image').attr('src', "");
  $("#breed_data_table tr").remove();
}
// display the breed image and data
function displayBreed(image) {
  $('#breed_image').attr('src', image.url);
  $("#breed_data_table tr").remove();

  var breed_data = image.breeds[0]
  $.each(breed_data, function(key, value) {
    // as 'weight' and 'height' are objects that contain 'metric' and 'imperial' properties, just use the metric string
    if (key == 'weight' || key == 'height') value = value.metric
    // add a row to the table
    $("#breed_data_table").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
  });
}

// make an Ajax request

function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// call the getBreeds function which will load all the Dog breeds into the select control
getBreeds();

/* async function traerDatosBusqueda(){
  let response = await fetch("/data.json");
  let data = await response.json();
  console.log(data);
} */

/* https://api.mercadopago.com */
/* 
async function generarLinkDePago(){
  const response = await fetch ('https://api.mercadopago.com/checkout/preferences', {
    method:"POST",
    headers: {
      'Authorization': 'Bearer TEST-6430332962331713-051915-962f1aa6a9927024cbed90febb8b9494-604399104',
    },
    body: JSON.stringify({
      items: [
        {
        title: "Dummy Title",
        description: "Dummy description",
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id: "cat123",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 10,
        },
      ],
    }),
  });
  const data = await response.json()
  window.open(data.init_point, "_blank");
} */

/* mercadopago TOTO */
async function generarLinkDePago() {
  const productsToMP = carrito.map((element) => {
    let nuevoElemento = {
      title: element.titulo,
      description: element.descripcion,
      picture_url: element.imagenes,
      category_id: element.id,
      quantity: Number(element.cantidad),
      currency_id: "ARS",
      unit_price: Number(element.precio),
    };
    return nuevoElemento;
  });
  console.log(productsToMP);
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        'Authorization': 'Bearer TEST-6430332962331713-051915-962f1aa6a9927024cbed90febb8b9494-604399104',
      },
      body: JSON.stringify({
        items: productsToMP,
      }),
    }
  );
  const data = await response.json();
  window.open(data.init_point, "_blank");
}


