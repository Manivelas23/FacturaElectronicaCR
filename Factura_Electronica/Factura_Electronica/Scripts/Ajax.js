        const ruta = "https://localhost:44314/api/";
        var i = 0;

        function desabilitaGuardar() {
            document.getElementById('GuardarBtn').disabled = true;
}
        function habilitaGuardar() {
            document.getElementById('GuardarBtn').disabled = false;
}
        function mover() {
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("myBar");
                elem.style.visibility = "visible";
                var width = 1;
                var id = setInterval(frame, 10);
                function frame() {
                    if (width >= 100) {
                        clearInterval(id);
                        i = 0;
                        elem.style.visibility = "hidden";
                    } else {
                        width++;
                        elem.style.width = width + "%";
                    }
                }
            }   
        }
        function cargaNavBar() {
                var navBar = "";
                navBar +=
                            `
                 <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="Index.html">Inicio</a>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="ulMenu navbar-nav mr-auto mt-2 mt-lg-2">
                                <li class="  dropdown">
                                    <a class=" aMenu  nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Gestión de Descuentos y Impuestos
                                    </a>
                                    <div class="dropdown-menu  flex-column" aria-labelledby="navbarDropdown">
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">redeem</span>
                                            <a href="Descuento.html" id="DES" class="aMenu">Descuento</a>
                                        </div>                 
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">account_balance</span>
                                            <a href="Impuesto.html" id="IMP" class="aMenu">Impuesto</a>
                                        </div>
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">done</span>
                                            <a href="Exoneracion.html" id="EXO" class="aMenu">Exoneración</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item  dropdown">
                                        <a class=" aMenu  nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Factura
                                        </a>
                                        <div class="dropdown-menu flex-column" aria-labelledby="navbarDropdown">
                                            <div class="dropdown-item">
                                                <span class="material-icons spanMenu">description</span>
                                                <a href="ResumenFactura.html" id="RFAC" class="aMenu">Resumen de Factura</a>
                                            </div>                 
                                            <div class="dropdown-item">
                                                <span class="material-icons spanMenu">receipt</span>
                                                <a href="InformacionReferencia.html" id="INFREF" class="aMenu">Información de Referencia</a>
                                            </div>
                                            <div class="dropdown-item">
                                                <span class="material-icons spanMenu">add</span>
                                                <a href="Otros.html" id="OTR" class="aMenu">Otros</a>
                                            </div>
                                            <div class="dropdown-item">
                                            <span class="material-icons spanMenu">details</span>
                                            <a href="DetalleServicio.html" id="DETS" class="aMenu">Detalle Servicio</a>
                                            </div>
                                        </div>
                                    </li>

                             <li class="nav-item  dropdown">
                                    <a class=" aMenu  nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Gestión de Persona
                                    </a>
                                    <div class="dropdown-menu flex-column" aria-labelledby="navbarDropdown">
                                        <div class="dropdown-item">
                                           <span class="material-icons spanMenu">contact_mail</span>
                                            <a href="IdentificacionPersona.html" id="IDR" class="aMenu">Identificación Persona</a>
                                        </div>
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">phone</span>
                                            <a href="Telefono.html" id="TEL" class="aMenu">Teléfono</a>
                                        </div>
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">print</span>
                                            <a href="Fax.html"  id="FAX" class="aMenu">Fax</a>
                                        </div>
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">place</span>
                                            <a href="Ubicacion.html" class="aMenu"  id="UB">Ubicacion</a>
                                        </div>
                                        <div class="dropdown-item">
                                            <span class="material-icons spanMenu">accessibility</span>
                                            <a href="Persona.html" id="PERSONA" class="aMenu">Persona</a>
                                        </div>
                                    </div>
                            </li>
                            <li class="nav-item  dropdown ">
                                    <a class=" aMenu  nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Gestión de Documentos y Moneda
                                    </a>
                                    <div class="dropdown-menu flex-column" aria-labelledby="navbarDropdown">
                                        <div class="dropdown-item">
                                        <span class="material-icons spanMenu">article</span>
                                        <a href="TipoDocumento.html"  id="TD" class="aMenu">Tipo Documento</a>
                                        </div>                 
                                        <div class="dropdown-item">
                                        <span class="material-icons spanMenu">vpn_key</span>
                                        <a href="CodigoComercial.html" id="CC" class="aMenu">Código Comercial</a>
                                        </div>
                                        <div class="dropdown-item">
                                        <span class="material-icons spanMenu">monetization_on</span>
                                        <a href="CodigoTipoMoneda.html" id="CTM" class="aMenu">Tipo Moneda</a>
                                        </div>
                                    </div>
                            </li>
                        </ul>     
                    </div>
                </nav>
                 `
                var  pageZoom =  document.body.style.zoom="90%";
                var vectorCargar = [navBar,pageZoom];
                return vectorCargar;
}
        function disableInputs() {
            var inputNode = document.getElementById("formContainer").querySelectorAll(".form-control");
            for(var i in inputNode){
                inputNode[i].disabled = false;
            }
        }
        function eliminaValores() {
            var x = document.getElementById("formContainer").querySelectorAll(".form-control");     
            for (var i = 0; i < x.length; i++) {
                x[i].value = "";
            }
}

    /////////////////////////////////////////////////////////////////////////////////////////
        var Ubicacion = new Object;
        Ubicacion.idUbicacion = "";
        Ubicacion.Provincia = "";
        Ubicacion.Canton =   "";
        Ubicacion.Distrito = "";
        Ubicacion.Barrio = "";
        Ubicacion.otrasSenas = "";
       function cargarUbicacion() {
           var tabla = document.getElementById('tabla');
           $.ajax({
               url: ruta + 'Ubicacion',
               type: 'GET',
               dataType: 'json',
               data: Ubicacion,
               success: function (data, textStatus, xhr) {
                   if (data.length > 0) {
                       tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                       var filacabezaTabla = document.getElementById('filacabezaTabla');
                       filacabezaTabla.innerHTML +=
                           `
                            <th scope="col">Id Ubicación</th>
                            <th scope="col">Provincia</th>
                            <th scope="col">Canton</th>
                            <th scope="col">Distrito</th>
                            <th scope="col">Barrio</th>
                            <th scope="col">Otras Senas</th>  
                           `;
                       tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`;
                       for (var z in data) {
                           var objetoSerializado = JSON.stringify(data[z]);
                           var objetoSerializadoComillas = "";
                           for (var j in objetoSerializado) {
                               objetoSerializadoComillas += objetoSerializado[j].replace('"', "'");
                           }
                           document.getElementById('cuerpoTabla').innerHTML += `
                            <tr>
                              <td>${data[z].IdUbicacion1}</td>
                              <td>${data[z].Provincia1}</td>
                              <td>${data[z].Distrito1}</td>
                              <td>${data[z].Canton1}</td>
                              <td>${data[z].Barrio1}</td>
                              <td>${data[z].OtrasSenas1}</td>
                              <td><input class="btn  btn-warning" type="button" value="Modificar" onclick="cargaDatosFormulario(${objetoSerializadoComillas})" /></td>
                              <td><input class="btn  btn-danger" type="button"  value="Eliminar" onclick="verificaEliminar(${data[z].IdUbicacion1})"/></td>
                           </tr>
                       `;
                       }
                   }
    
               },
               error: function (xhr, textStatus, errorThrown) {
                   alert(xhr);
               }
           });
        }
    /////////////////////////////////////////////////////////////////////////////////////////
        var Descuento = new Object;
        Descuento.montoDescuento = "";
        Descuento.naturalezaDescuento = "";
        function cargarDescuento() {
        var tabla = document.getElementById('tabla');
        $.ajax({
            url: ruta + 'Descuento',
            type: 'GET',
            dataType: 'json',
            data: Descuento,
            success: function (data, textStatus, xhr) {
                if (data.length > 0) {
                    tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                    var filacabezaTabla = document.getElementById('filacabezaTabla');
                    filacabezaTabla.innerHTML +=
                        `
                                <th scope="col">Monto Descuento</th>
                                <th scope="col">Naturaleza Descuento</th>
                               `;
                    tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`;
                    for (var z in data) {
                        console.log(data)
                        document.getElementById('cuerpoTabla').innerHTML += `
                                <tr>
                                  <td>${data[z].MontoDescuento1}</td>           
                                  <td>${data[z].NaturalezaDescuento1}</td>
                                  <td><input class="btn  btn-danger" type="button"  value="Eliminar" onClick="verificaEliminar(${data[z].MontoDescuento1} , ${data[z].NaturalezaDescuento1})"/></td>
                               </tr>
                           `;
                    }
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(xhr);
            }
        });
 }
    ////////TODO: Terminar exoneracion //////////////////////////////////////////////////////////////////////////////////
        var Exoneracion = new Object;
        Exoneracion.tipoDocumento = "";
        Exoneracion.numeroDocumento = "";
        Exoneracion.nombreInstitucion = "";
        Exoneracion.fechaEmision = "";
        Exoneracion.porcentajeExoneracion = "";
        Exoneracion.montoExoneracion = "";
    ///////////////////////////////////////////////////////////////////////////////////////////
        var Fax = new Object;
        Fax.numFax = "";
        Fax.codigoPais = "";
        function cargarFax() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'Fax', type: 'GET', dataType: 'json', data: Ubicacion, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Fax:</th><th scope="col">Código País</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].NumFax1}</td><td>${data[z].CodigoPais1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].NumFax1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var CTM = new Object;
        CTM.codigoMoneda = "";
        CTM.tipoCambio = "";
        function cargarCTM() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'CodigoTipoMoneda', type: 'GET', dataType: 'json', data: Ubicacion, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Código Moneda</th><th scope="col">Tipo de Cambio</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].CodigoMoneda1}</td><td>${data[z].TipoCambio1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].CodigoMoneda1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var idPersona = new Object;
        idPersona.identificacionPersona = "";
        idPersona.tipo = "";    
        function cargaridPersona() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'IdentificacionPersona', type: 'GET', dataType: 'json', data: idPersona, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Identificación Persona</th><th scope="col">Tipo</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].identificacionPersona1}</td><td>${data[z].Tipo1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].identificacionPersona1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var Telefono = new Object;
        Telefono.numTelefono = "";
        Telefono.codigoPais = "";
        function cargarTelefono() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'Telefono', type: 'GET', dataType: 'json', data: Telefono, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Teléfono</th><th scope="col">Código País</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].NumTelefono1}</td><td>${data[z].CodigoPais1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].NumTelefono1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var codComercial = new Object;
        codComercial.tipo = "";
        codComercial.codigo = "";
        function cargarCC() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'CodigoComercial', type: 'GET', dataType: 'json', data: codComercial, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Tipo</th><th scope="col">Código</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].Tipo1}</td><td>${data[z].Codigo1}</td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].Tipo1} , ${data[z].Codigo1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var TD = new Object;
        TD.numeroIdentidadTercero = "";
        TD.tipoDocumento = "";
        function cargarTD() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'TipoDocumento', type: 'GET', dataType: 'json', data: TD, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Tipo de Documento</th><th scope="col">Número de Identidad de Tercero</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].Tipodocumento1}</td><td>${data[z].NumeroIdentidadTercero1}</td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].Tipodocumento1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
    /////////////////////////////////////////////////////////////////////////////////////////
        var Impuesto = new Object;
        Impuesto.codigoImpuesto = "";
        Impuesto.codigoTarifa = "";
        Impuesto.tarifa = "";
        Impuesto.factor_Iva = "";
        Impuesto.monto = "";
        Impuesto.montoExportacion = "";
        //TODO: terminar de cargar impuestos 12:29 /12/sep/2020
    /////////////////////////////////////////////////////////////////////////////////////////
        var persona = new Object;
        persona.nombre = "";
        persona.idPersona = "";
        persona.numTelefono = "";
        persona.numFax = "";
        persona.idUbicacion = "";
        persona.nombreComercial = "";
        persona.correoElectronico = "";
        persona.idExtranjero = "";
        persona.otrasSenasExtranjero = ""; 

        function verificaExistenciaPersona(persona) {
            $.ajax({
                url: ruta + 'Persona?id=' + persona.idPersona,
                type: 'GET',
                dataType: 'json',
                data: persona,
                success: function(data, textStatus, xhr) {                  
                    switch (data.Nombre1) {
                        case "NO EXISTE": {
                            eliminaValores()
                            break;
                        }
                        case "Error": {
                            alert("Error en la base de datos")
                            break;
                        }
                        default: {
                            rellenaDatos(persona)
                            break;
                        }
                    }
                },
                error: function(xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
        }

        var method = ["POST", "PUT", "DELETE", "OPTIONS"];
        function globalFunction(Controller, VecPos, Objeto) {
                            var realMethod = method[VecPos];
                                $.ajax({
                                    url: ruta + Controller,
                                    type: realMethod, 
                                    dataType: 'json',
                                    data: Objeto, 
                                    success: function (data, textStatus, xhr) {
                                        mover();
                                        eliminaValores();
                                        setTimeout(function () { alert(data[0]); }, 1000);
                                        setTimeout("document.location=document.location", 1100);
                                    },
                                    error: function (xhr, textStatus, erroThrown) {
                                        alert(xhr);
                                    }
                                });
                }       
        function paramOverload(object1, object2, controller1, controller2, VecPos) {                    
                                    var realMethod = method[VecPos];
                                    $.ajax({
                                        url: ruta + controller1,
                                        type: realMethod,
                                        dataType: 'json',
                                        data: object1,
                                        success: function (data, textStatus, xhr) { 
                                            globalFunction(controller2, VecPos, object2) 
                                            },
                                            error: function (xhr, textStatus, erroThrown) {
                                                alert(xhr);
                                            }
                                        });
                }       
        function rellenaDatos(objeto){
            var inputNode = document.getElementById("formContainer").querySelectorAll(".form-control")
            var llaves = Object.keys(objeto)
            console.log(llaves)
            for(var ele in inputNode){
                console.log(inputNode[ele])               
            }    

        }