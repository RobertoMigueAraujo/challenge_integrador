document.addEventListener('DOMContentLoaded', function() {
    const archivoInput = document.getElementById('Imagenes');
    const aceptarBoton = document.getElementById('aceptarBoton');
    const resetearBoton = document.getElementById('resetearBoton');
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío automático del formulario

        // Obtener valores de los campos del formulario
        const categoria = document.getElementById('categoria').value;
        const licencia = document.getElementById('licencia').value;
        const nombreProducto = document.getElementById('NombreDelProducto').value;
        const descripcion = document.getElementById('DescripcionDelProducto').value;
        const sku = document.getElementById('sku').value;
        const precio = document.getElementById('precio').value;
        const stock = document.getElementById('stock').value;
        const descuento = document.getElementById('descuento').value;
        const cuotas = document.getElementById('cuotas').value;
        const imagenes = archivoInput.value;

        // Validar campos
        if (categoria === '' || licencia === '' || nombreProducto === '' || descripcion === '' || sku === '' || precio === '' || stock === '' || descuento === '' || cuotas === '' || imagenes === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            // Verificar si se ha seleccionado un archivo
            if (archivoInput.files.length === 0) {
                alert('Por favor, selecciona un archivo antes de enviar.'); // Mostrar mensaje de alerta si no se ha seleccionado archivo
            } else {
                // Si todos los campos están llenos y se ha seleccionado un archivo, se puede enviar el formulario
                console.log('Formulario enviado correctamente.');
                formulario.submit();
            }
        }
    });
      aceptarBoton.addEventListener('click', function(event) {
        console.log('El botón "Aceptar" ha sido clickeado.');
    });
    // Agregar un evento al hacer clic en el botón "Limpiar"
    resetearBoton.addEventListener('click', function(event) {
        console.log('El botón "Limpiar" ha sido clickeado.');
        // Aquí podrías añadir lógica para limpiar campos o realizar otras acciones de limpieza
    });
});
