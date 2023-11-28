let formulario = document.getElementById('miFormulario1');

formulario.addEventListener('submit', function(evento) {

    let categoria = formulario.elements['categoria'].value;
    let licencia = formulario.elements['licencia'].value;
    let nombreDelProducto = formulario.elements['NombreDelProducto'].value;
    let descripcionDelProducto = formulario.elements['DescripcionDelProducto'].value;
    let sku = formulario.elements['sku'].value;
    let precio = formulario.elements['precio'].value;
    let stock = formulario.elements['stock'].value;
    let descuento = formulario.elements['descuento'].value;
    let cuotas = formulario.elements['cuotas'].value;
    let imagenes = formulario.elements['Imagenes'].value;

    if (categoria === '' || licencia === '' || nombreDelProducto === '' || descripcionDelProducto === '' || sku === '' || precio === '' || stock === '' || descuento === '' || cuotas === '' || imagenes === '') {
        alert('¡Todos los campos deben estar llenos!');
        evento.preventDefault();
    }
   
});
