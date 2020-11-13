function cargar(pagina){
    $('#formularios').load(pagina);
}
//FUNCIONES DE PAIS
function enviarpais()
{
		var nombre=$("#txtnombre").val();
		
		$.post("registrarpais.php",{"nombre":nombre},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			consultarpais();
		});
}
function consultarpais()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarpais.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarpais(nombre)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+nombre);
		if (opcion == true) {
		$.post("eliminarpais.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{
		
	}
}

//FUNCIONES ESTADO
function enviarestado()
{
		var estado=$("#txtestado").val();
		var pais = $("#txtpais").val();

		$.post("registrarestado.php",{"estado":estado,"pais":pais},function(respuesta){
			$("#txtestado").val("");
			$("#txtpais").val("");
			consultarestado();
		});
}
function consultarestado()
{
		var estado=$("#txtestado").val();
		$.post("buscarestado.php",{"estado":estado},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtestado").val("");

		});
}
function eliminarestado(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarestado.php",{"estado":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{
		
	}
}
function cargaestados()
{
		var pais=$("#txtpais").val();
		$.post("cargarestado.php",{"pais":pais},function(respuesta){
			consultaestados.innerHTML = respuesta;
		});

}
//FUNCIONES CIUDAD
function enviarciudad()
{
	 	var estado=$("#txtestado").val();
		var ciudad=$("#txtciudad").val();
		var cp=$("#txtcp").val();
		if(estado==""||ciudad==""||cp==""){
			alert ("Falta llenar un Campo");
		}else{

			$.post("registrarciudad.php",{"estado":estado,"ciudad":ciudad,"cp":cp},function(respuesta){
			alert(respuesta);
			$("#txtciudad").val("");
			$("#txtcp").val("");
			consultarciudad();
		});
		}
				
}
function consultarciudad()
{

		var ciudad=$("#txtciudad").val();
		$.post("buscarciudad.php",{"ciudad":ciudad},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtciudad").val("");

		});
}
function eliminarciudad(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarciudad.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{
		
	}
}
function cargarciudad()
{	
		var estado=$("#txtestado").val();
		$.post("cargarciudad.php",{"estado":estado},function(respuesta){
			consultaciudad.innerHTML = respuesta;
		});
}
function cargarciudadcp()
{	
		var CP=$("#txtcp").val();
		$.post("cargacp.php",{"CP":CP},function(respuesta){
			consultaciudad.innerHTML = respuesta;
		});
}
//FUNCIONES COLONIA
function enviarcolonia()
{
	 	var ciudad=$("#txtciudad").val();
		var colonia=$("#txtcolonia").val();

		if(ciudad==""||colonia==""){
			alert ("Falta llenar un Campo");
		}else{

			$.post("registrarcolonia.php",{"ciudad":ciudad,"colonia":colonia},function(respuesta){
			alert(respuesta);
			$("#txtcolonia").val("");
			consultarcolonia();
		});
		}
				
}
function consultarcolonia()
{

		var colonia=$("#txtcolonia").val();
		$.post("buscarcolonia.php",{"colonia":colonia},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtcolonia").val("");

		});
}
function eliminarcolonia(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarcolonia.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function cargarcolonia()
{	
		var ciudad=$("#txtciudad").val();
		$.post("cargarcolonia.php",{"ciudad":ciudad},function(respuesta){
			consultacolonia.innerHTML = respuesta;
		});
}

function cargarcosto()
{	
		var material=$("#txtmaterial").val();
		$.post("cargarcostounitario.php",{"material":material},function(respuesta){
			cargarcostounitario.innerHTML = respuesta;
		});
}
function calcular()
{	
	var costo = $("#txtcosto").val(); 
	var cantidad= $("#txtcantidad").val();
	var total=(costo*cantidad);
	document.getElementById("txtsubtotal").value = total;	
}
//FUNCIONES CALLE
function enviarcalle()
{
	 	var colonia=$("#txtcolonia").val();
		var calle=$("#txtcalle").val();

		if(colonia==""||calle==""){
			alert ("Falta llenar un Campo");
		}else{

			$.post("registrarcalle.php",{"colonia":colonia,"calle":calle},function(respuesta){
			alert(respuesta);
			$("#txtcalle").val("");
			consultarcalle();
		});
		}
				
}
function consultarcalle()
{

		var calle=$("#txtcalle").val();
		$.post("buscarcalle.php",{"calle":calle},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtcalle").val("");

		});
}
function eliminarcalle(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarcalle.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function cargarcalle()
{	
		var colonia=$("#txtcolonia").val();
		$.post("cargarcalle.php",{"colonia":colonia},function(respuesta){
			consultacalle.innerHTML = respuesta;
		});
}
//FUNCIONES DE USUARIO
function enviarusuario()
{
		var nombre=$("#txtnombre").val();
		var apellidos=$("#txtapellidos").val();
		var fechanac=$("#txtfechanac").val();
		var genero=$("#txtgenero").val();
		var correo=$("#txtcorreo").val();
		var telefono=$("#txttelefono").val();
		var contrasena=$("#txtcontrasena").val();
		var calle=$("#txtcalle").val();
		var numero=$('#txtnumero').val();
		var tipo=$("#txttipo").val();
		var status=$("#txtstatus").val();
		var terminos=$("#txtterminos").val();

		$.post("registrarusuario.php",{"nombre":nombre,"apellidos":apellidos,"fechanac":fechanac,"genero":genero,"correo":correo,"telefono":telefono,"contrasena":contrasena,"calle":calle,"numero":numero,"tipo":tipo,"status":status,"terminos":terminos},function(respuesta){
			alert(respuesta);
			$("#txtnombre").val("");
			$("#txtapellidos").val("");
			$("#txtfechanac").val("");
			$("#txtgenero").val("");
			$("#txtcorreo").val("");
			$("#txttelefono").val("");
			$("#txtcontrasena").val("");
			$("#txtcontrasena2").val("");
			$("#txtciudad").val("");
			$("#txtcolonia").val("");
			$("#txtcalle").val("");
			$("#txtnumero").val("");
			$("#txtstatus").val("");
			$("#txtterminos").val("");
			consultausuarios();
		});
}
function consultausuario()
{
		var nombre=$("#txtnombre").val();
		$.post("buscarusuario.php",{"nombre":nombre},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtnombre").val("");

		});
}
function eliminarusuario(id)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
		$.post("eliminarusuario.php",{"id":id},function(respuesta){
			consulta.innerHTML = respuesta;


		});
	}else{

	}
}
function actualizarusuario(celular)
{
		$.post("actualizarusuario.php",{"celular":celular},function(respuesta){
			frm.innerHTML = respuesta;

		});
}
function enviarusuario2()
{
		var nombre=$("#txtnombre").val();
		var apellidos=$("#txtapellidos").val();
		var fechanac=$("#txtfechanac").val();
		var genero=$("#txtgenero").val();
		var correo=$("#txtcorreo").val();
		var telefono=$("#txttelefono").val();
		var contrasena=$("#txtcontrasena").val();
		var cp=$("#txtcp").val();
		var calle=$("#txtcalle").val();
		var numero=$('#txtnumero').val();
		var tipo=$("#txttipo").val();
		var status=$("#txtstatus").val();
		if (cp=="")
		{
			$.post("updateusuario.php",{"nombre":nombre,"apellidos":apellidos,"fechanac":fechanac,"genero":genero,"correo":correo,"telefono":telefono
				,"contrasena":contrasena,"tipo":tipo,"status":status},function(respuesta){
			frm.innerHTML = respuesta;
		});
		}else{
			$.post("updateusuario2.php",{"nombre":nombre,"apellidos":apellidos,"fechanac":fechanac,"genero":genero,"correo":correo,"telefono":telefono
				,"contrasena":contrasena,"calle":calle,"numero":numero,"tipo":tipo,"status":status},function(respuesta){
			frm.innerHTML = respuesta;
		});
		}
		
}
//FUNCIONES MATERIAL
function enviarmaterial()
{
		var material=$("#txtmaterial").val();
		var costo = $("#txtcosto").val();
		var costo2 = $("#txtcosto2").val();
		var costo3 = $("#txtcosto3").val();

		$.post("registrarmaterial.php",{"material":material,"costo":costo,"costo2":costo2,"costo3":costo3},function(respuesta){
			alert(respuesta);
			$("#txtmaterial").val("");
			$("#txtcosto").val("");
			$("#txtcosto2").val("");
			$("#txtcosto2").val("");
			consultarmaterial();
		});
}
function consultarmaterial()
{
		var material=$("#txtmaterial").val();
		$.post("buscarmaterial.php",{"material":material},function(respuesta){
			consulta.innerHTML = respuesta;
			$("#txtmaterial").val("");
		});
}

function eliminarmaterial(material)
{
	 	var opcion = confirm("Realmente quieres eliminar el registro: "+material);
		if (opcion == true) {
		$.post("eliminarmaterial.php",{"material":material},function(respuesta){
			consulta.innerHTML = respuesta;
		});
	}else{
		
	}
}
function actualizarmaterial(material)
{
		$.post("actualizarmaterial.php",{"material":material},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function enviarmaterial2()
{
		var material=$("#txtmaterial").val();
		var costo=$("#txtcosto").val();
		var costo2 = $("#txtcosto2").val();
		var costo3 = $("#txtcosto3").val();

		$.post("updatematerial.php",{"costo":costo,"costo2":costo2,"costo3":costo3,"material":material},function(respuesta){
			frm.innerHTML = respuesta;
			consultarmaterial();
			alert ("Datos Actualizados");
		});
}
//FUNCIONES PEDIDO
function nuevopedido()
{
	
		var correo=$("#txtusuario").val();
		$.post("registrarpedido.php",{"correo":correo},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function eliminarpedido(pedido)
{
		var opcion = confirm("Realmente quieres eliminar el registro: "+pedido);
		if (opcion == true) {
		$.post("eliminarpedido.php",{"pedido":pedido},function(respuesta){
			frm.innerHTML = respuesta;

		});
	}else{

	}
}
function actualizarpedido(pedido)
{
		var correo=$("#txtusuario").val();
		$.post("actualizarpedidomaterial.php",{"pedido":pedido,"correo":correo},function(respuesta){
			frm.innerHTML = respuesta;
		});
}
function actualizastatus(pedido)
{
	var status=$("#txtstatus").val();
	alert (status);
		$.post("actualizarpedido.php",{"pedido":pedido,"status":status},function(respuesta){
			alert ("Status del pedido se modifico"+respuesta);
		});
}
function enviarpedidomaterial()
{
		var pedido=$("#txtpedido").val();
		var material=$("#txtmaterial").val();
		var costo = $("#txtcosto").val();
		var cantidad = $("#txtcantidad").val();
		var subtotal = $("#txtsubtotal").val();

		$.post("registrarpedidomaterial.php",{"pedido":pedido,"material":material,"costo":costo,"cantidad":cantidad,"subtotal":subtotal},function(respuesta){
			$("#txtcantidad").val("");
			$("#txtsubtotal").val("");
			alert ("Material Registrado");
			consultarpedidomaterial();
		});
}
function consultarpedidomaterial()
{
		var pedido=$("#txtpedido").val();
		$.post("buscarpedidomaterial.php",{"pedido":pedido},function(respuesta){
			consulta.innerHTML = respuesta;
		});
}

function eliminarpedidomaterial(id)
{
		var opcion = confirm("Realmente quieres eliminar el registro: "+id);
		if (opcion == true) {
			$.post("eliminarpedidomaterial.php",{"id":id},function(respuesta){
			pedidos.innerHTML = respuesta;	
		});
	}else{
		alert ("error");

	}
}


function cargarpedidos()
{
		var usuario2=$("#txtusuario2").val();
		document.getElementById("txtusuario").value = usuario2;	
		$.post("cargarpedidos.php",{"usuario2":usuario2},function(respuesta){
			pedidos.innerHTML = respuesta;
		});
}
//FUNCIONES DE RUTA
function guardarruta(pedido)
{
		var usuario=$("#txtusuario").val();
		var fecha = $("#txtfecha").val();
		var status = $("#txtstatus").val();
		$.post("registrarruta.php",{"usuario":usuario,"pedido":pedido,"fecha":fecha},function(respuesta){
			alert (respuesta);
			});
		$.post("actualizarpedido.php",{"pedido":pedido,"status":status},function(respuesta){
			alert ("Datos Actualizados");
			consultarruta();
		});
			
		
}

function consultarruta()
{
		var usuario=$("#txtusuario").val();
		$.post("buscarruta.php",{"usuario":usuario},function(respuesta){
			pedidos.innerHTML = respuesta;
		});
}
function pedidosderuta()
{	
		var usuario=$("#txtusuario").val();

		$.post("pedidosderuta.php",{"usuario":usuario},function(respuesta){
			pedidos.innerHTML = respuesta;
		});
}