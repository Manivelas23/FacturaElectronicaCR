        const ruta = "https://localhost:44314/api/";
        var i = 0;
    
        ///FUNCIONAL
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
                 <nav class="navbar navbar-expand-lg navbar-light ">
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
                                                <a href="LineaDetalle.html" id="RFAC" class="aMenu">Línea Detalle</a>
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
             //   var  pageZoom =  document.body.style.zoom="80%";
                var vectorCargar = [navBar];
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

        //DECLARACION DE OBJETOS
        var Ubicacion = new Object; Ubicacion.idUbicacion = "", Ubicacion.Provincia = "", Ubicacion.Canton = "", Ubicacion.Distrito = "", Ubicacion.Barrio = "", Ubicacion.otrasSenas = "";
        var Descuento = new Object; Descuento.montoDescuento = "", Descuento.naturalezaDescuento = "";
        var Exoneracion = new Object; Exoneracion.tipoDocumento = "", Exoneracion.numeroDocumento = "", Exoneracion.nombreInstitucion = "", Exoneracion.fechaEmision = "", Exoneracion.porcentajeExoneracion = "", Exoneracion.montoExoneracion = "";
        var Fax = new Object; Fax.numFax = "", Fax.codigoPais = "";
        var CTM = new Object; CTM.codigoMoneda = "", CTM.tipoCambio = "";
        var idPersona = new Object; idPersona.identificacionPersona = "", idPersona.tipo = "";
        var Telefono = new Object; Telefono.numTelefono = "", Telefono.codigoPais = "";
        var codComercial = new Object; codComercial.tipo = "", codComercial.codigo = "";
        var TD = new Object; TD.numeroIdentidadTercero = "", TD.tipoDocumento = "";
        var TD=new Object;TD.numeroIdentidadTercero="",TD.tipoDocumento="";
        var Impuesto = new Object; Impuesto.codigoImpuesto = "", Impuesto.codigoTarifa = "", Impuesto.tarifa = "", Impuesto.factor_Iva = "", Impuesto.monto = "", Impuesto.montoExportacion = "";
        var persona = new Object; persona.nombre = "", persona.idPersona = "", persona.numTelefono = "", persona.numFax = "", persona.idUbicacion = "", persona.nombreComercial = "", persona.correoElectronico = "", persona.idExtranjero = "", persona.otrasSenasExtranjero = "";

        var Lineadetalle_impuesto_exoneracion = new Object();
        Lineadetalle_impuesto_exoneracion.Lineadetalleconsecutivo = "";
        Lineadetalle_impuesto_exoneracion.Impuestocodigo = "";
        Lineadetalle_impuesto_exoneracion.Tipodocumento = "";
        Lineadetalle_impuesto_exoneracion.Numerodocumento = "";

        var LineaDetalle = new Object();
        LineaDetalle.Numerolinea = "";
        LineaDetalle.Partidaarancelaria = "";
        LineaDetalle.Codigo = "";
        LineaDetalle.Cantidad = "";
        LineaDetalle.Unidadmedida = "";
        LineaDetalle.Unidadmedidacomercial = "";
        LineaDetalle.Detalle = "";
        LineaDetalle.Preciounitario = "";
        LineaDetalle.Montototal = "";
        LineaDetalle.Subtotal = "";
        LineaDetalle.Baseimponible = "";
        LineaDetalle.Impuestoneto = "";
        LineaDetalle.Montototallinea = "";
        LineaDetalle.Consecutivo = "";
        LineaDetalle.Codigocomercialtipo = "";
        LineaDetalle.Codigocomercialcodigo = "";
        LineaDetalle.Descuentomonto = "";
        LineaDetalle.Descuentonaturaleza = "";
        LineaDetalle.listaLineadetalle_impuesto_exoneracion = [];

        var impuestoscargados = [];
        var exoneracionescargadas = [];

        //SETTERS      
        var method = ["POST", "PUT", "DELETE", "OPTIONS"];
        function globalFunction(Controller, VecPos, Objeto) {
                                var realMethod = method[VecPos];
                                console.log(Objeto)
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

        ///GETTERS 
        function cargarImpuesto() {
            var tabla = document.getElementById('tabla');
            $.ajax({
                url: ruta + 'Impuesto',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    if (data.length > 0) {
                        tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                        var filacabezaTabla = document.getElementById('filacabezaTabla');
                        filacabezaTabla.innerHTML +=
                            `
                                    <th scope="col">Código Impuesto</th>
                                    <th scope="col">Código Tarifa</th>
                                    <th scope="col">Tarifa</th>
                                    <th scope="col">Factor IVA</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Monto Exortación</th>  
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
                                      <td>${data[z].CodigoImpuesto1}</td>
                                      <td>${data[z].CodigoTarifa1}</td>
                                      <td>${data[z].Tarifa1}</td>
                                      <td>${data[z].Factor_Iva1}</td>
                                      <td>${data[z].Monto1}</td>
                                      <td>${data[z].MontoExportacion1}</td>
                                      <td><input class="btn  btn-warning" type="button" value="Modificar" onclick="cargaDatosFormulario(${objetoSerializadoComillas})" /></td>
                                      <td><input class="btn  btn-danger" type="button"  value="Eliminar" onclick="verificaEliminar(${data[z].CodigoImpuesto1})"/></td>
                                   </tr>`;
                        }
                    }

                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }
            });
}
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
        function cargarPersonas() {
            var tabla = document.getElementById('tabla');
            $.ajax({
                url: ruta + 'Persona',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    if (data.length > 0) {
                        tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                        var filacabezaTabla = document.getElementById('filacabezaTabla');
                        filacabezaTabla.innerHTML +=
                            `
                                    <th scope="col">Identificación</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Fax</th>
                                    <th scope="col">Ubicación</th>
                                    <th scope="col">Nombre Comercial</th>  
                                    <th scope="col">Correo Electrónico</th>  
                                    <th scope="col">Identificación Extranjero</th>  
                                    <th scope="col">Otras Senas Extranjero</th>  
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
                                      <td>${data[z].identificacionPersona.identificacionPersona1}</td>
                                      <td>${data[z].Nombre1}</td>
                                      <td>${data[z].ObjTelefono1.NumTelefono1}</td>
                                      <td>${data[z].ObjFax1.NumFax1}</td>
                                      <td>${data[z].ObjUbicacion.IdUbicacion1}</td>
                                      <td>${data[z].NombreComercial1}</td>
                                      <td>${data[z].CorreoElectronico1}</td>
                                      <td>${data[z].IdentificacionExtranjero1}</td>
                                      <td>${data[z].OtrasSenasExtranjero1}</td>
                                      <td><input class="btn  btn-warning" type="button" value="Modificar" onclick="cargaDatosFormulario(${objetoSerializadoComillas})" /></td>
                                      <td><input class="btn  btn-danger" type="button"  value="Eliminar" onclick="verificaEliminar(${data[z].identificacionPersona.identificacionPersona1})"/></td>
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
        function cargarExoneracion() {
            var tabla = document.getElementById('tabla');
            $.ajax({
                url: ruta + 'Exoneracion',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    if (data.length > 0) {
                        tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`;
                        var filacabezaTabla = document.getElementById('filacabezaTabla');
                        filacabezaTabla.innerHTML +=
                            `
                                        <th scope="col">Tipo Documento</th>
                                        <th scope="col">Número de Documento</th>
                                        <th scope="col">Nombre Institución</th>
                                        <th scope="col">Fecha Emisión</th>
                                        <th scope="col">Procentaje Exoneración</th>
                                        <th scope="col">Monto Exoneración</th>  
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
                                          <td>${data[z].TipoDocumento1}</td>
                                          <td>${data[z].NumeroDocumento1}</td>
                                          <td>${data[z].NombreInstitucion1}</td>
                                          <td>${data[z].FechaEmision1}</td>
                                          <td>${data[z].PorcentajeExoneracion1}</td>
                                          <td>${data[z].MontoExoneracion1}</td>
                                          <td><input class="btn  btn-warning" type="button" value="Modificar" onclick="cargaDatosFormulario(${objetoSerializadoComillas})" /></td>
                                          <td><input class="btn  btn-danger" type="button"  value="Eliminar" onclick="verificaEliminar(${data[z].TipoDocumento1},${data[z].NumeroDocumento1})"/></td>
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

        function cargarTelefono() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'Telefono', type: 'GET', dataType: 'json', data: Telefono, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Teléfono</th><th scope="col">Código País</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].NumTelefono1}</td><td>${data[z].CodigoPais1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].NumTelefono1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
        function cargarCC() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'CodigoComercial', type: 'GET', dataType: 'json', data: codComercial, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Tipo</th><th scope="col">Código</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].Tipo1}</td><td>${data[z].Codigo1}</td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].Tipo1} , ${data[z].Codigo1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
        function cargarFax() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'Fax', type: 'GET', dataType: 'json', data: Ubicacion, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Fax:</th><th scope="col">Código País</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].NumFax1}</td><td>${data[z].CodigoPais1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].NumFax1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
        function cargarTD() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'TipoDocumento', type: 'GET', dataType: 'json', data: TD, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Tipo de Documento</th><th scope="col">Número de Identidad de Tercero</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].Tipodocumento1}</td><td>${data[z].NumeroIdentidadTercero1}</td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].Tipodocumento1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
        function cargaridPersona() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'IdentificacionPersona', type: 'GET', dataType: 'json', data: idPersona, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Identificación Persona</th><th scope="col">Tipo</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].identificacionPersona1}</td><td>${data[z].Tipo1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].identificacionPersona1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }
        function cargarCTM() { var tabla = document.getElementById('tabla'); $.ajax({ url: ruta + 'CodigoTipoMoneda', type: 'GET', dataType: 'json', data: Ubicacion, success: function (data, textStatus, xhr) { if (data.length > 0) { tabla.innerHTML += `<thead id="cabezaTabla"><tr id="filacabezaTabla"></tr></thead>`; var filacabezaTabla = document.getElementById('filacabezaTabla'); filacabezaTabla.innerHTML += `<th scope="col">Código Moneda</th><th scope="col">Tipo de Cambio</th>`; tabla.innerHTML += `<tbody id="cuerpoTabla"></tbody>`; for (var z in data) { var objetoSerializado = JSON.stringify(data[z]); var objetoSerializadoComillas = ""; for (var j in objetoSerializado) { objetoSerializadoComillas += objetoSerializado[j].replace('"', "'"); } document.getElementById('cuerpoTabla').innerHTML += `<tr><td>${data[z].CodigoMoneda1}</td><td>${data[z].TipoCambio1}</td><td><input class="btn btn-warning"type="button"value="Modificar"onclick="cargaDatosFormulario(${objetoSerializadoComillas})"/></td><td><input class="btn btn-danger"type="button"value="Eliminar"onclick="verificaEliminar(${data[z].CodigoMoneda1})"/></td></tr>`; } } }, error: function (xhr, textStatus, errorThrown) { alert(xhr); } }); }

        function verificaExistenciaPersona(persona) {
                    $.ajax({
                        url: ruta + 'Persona?id=' + persona.idPersona,
                        type: 'GET',
                        dataType: 'json',
                        data: persona,
                        success: function (data, textStatus, xhr) {
                            disableInputs()
                            switch (data.Nombre1) {
                                case "NO EXISTE": 
                                    console.log('no existe')
                                    break;                   
                                case "Error": 
                                    alert("Error en la base de datos")
                                    break;                             
                                default: 
                                    rellenaDatos(data)
                                    break;
                            }
                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    });
} 

        function getUbicacionesSelect(selectElement) {
                    $.ajax({
                        url: ruta + 'Ubicacion',
                        type: 'GET',
                        dataType: 'json',
                        data: null,
                        success: function (data, textStatus, xhr) {
                            for (var i in data) {    
                                selectElement.innerHTML += `<option id="${data[i].IdUbicacion1}" value="${data[i].IdUbicacion1}"> Prov:${data[i].Provincia1} -Cant: ${data[i].Canton1} -Dist:${data[i].Distrito1} -Barrio:${data[i].Barrio1}</option>`;
                            }
                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    });
}
        function getDescuentosSelect(selectElement) {
            $.ajax({
                url: ruta + 'Descuento',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    console.log(data)
                    for (var i in data) {
                        selectElement.innerHTML += `<option id="${data[i].MontoDescuento1 + data[i].NaturalezaDescuento1}" value="${data[i].MontoDescuento1 + data[i].NaturalezaDescuento1}"> Monto:${data[i].MontoDescuento1} Naturaleza: ${data[i].NaturalezaDescuento1} </option>`;
                    }
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
}
        function getCodComercialSelect(selectElement) {
            $.ajax({
                url: ruta + 'CodigoComercial',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    for (var i in data) {
                        selectElement.innerHTML += `<option id="${data[i].TipoDocumento1 + data[i].NumeroDocumento1}" value="${data[i].TipoDocumento1 + data[i].NumeroDocumento1}">Tipo de Documento${data[i].TipoDocumento1} Número de Documento: ${data[i].NumeroDocumento1} </option>`;
                    }
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
        }
        function getFaxSelect(selectElement) {
            $.ajax({
                url: ruta + 'Fax',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    for (var i in data) {
                        selectElement.innerHTML += `<option id="${data[i].NumFax1}" value="${data[i].NumFax1}">${data[i].NumFax1}</option>`;
                    }
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
}
        function getTelefonSelect(selectElement) {
            $.ajax({
                url: ruta + 'Telefono',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    for (var i in data) {
                        selectElement.innerHTML += `<option id="${data[i].NumTelefono1}" value="${data[i].NumTelefono1}">${data[i].NumTelefono1}</option>`;
                    }
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
}

        function getImpuestosSelect(idTabla) {
            $.ajax({
                url: ruta + 'Impuesto',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                        impuestoscargados = data;
                        document.getElementById(idTabla).innerHTML = "";
                        document.getElementById(idTabla).innerHTML = `<thead id="listadoCabeza"> <tr id="filalistadocabeza"></tr></thead>`;
                    document.getElementById("filalistadocabeza").innerHTML += 
                    `<th scope='col'>Código</th>
                    <th scope='col'>Código de Tarífa</th>
                    <th scope='col'>Tarífa</th>
                    <th scope='col'>Factor de IVA</th>
                    <th scope='col'>Monto</th>
                    <th scope='col'>Monto de Exportación</th>
                    <th scope='col'>Para seleccionar</th>`

                    document.getElementById(idTabla).innerHTML += `<tbody id="listadocuerpo"></tbody>`

                    for (var i in data) {
                        document.getElementById("listadocuerpo").innerHTML += `<tr><td>${data[i].CodigoImpuesto1}</td><td>${data[i].CodigoTarifa1}</td><td>${data[i].Tarifa1}</td><td>${data[i].Factor_Iva1}</td><td>${data[i].Monto1}</td><td>${data[i].MontoExportacion1}</td><td><input type="button" value="Seleccionar" id="btSeleccionar" class="btn btn-primary" onClick="Seleccionarimpuesto(${data[i].CodigoImpuesto1})"></td></tr>`
                    }
                    $('#' + idTabla).DataTable();
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
}
        function getExoneracionesSelect(idTabla) {
            $.ajax({
                url: ruta + 'Exoneracion',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    exoneracionescargadas = data;
                    document.getElementById(idTabla).innerHTML = "";
                    document.getElementById(idTabla).innerHTML = `<thead id="listadoCabeza"> <tr id="filalistadocabeza"></tr></thead>`;
                    document.getElementById("filalistadocabeza").innerHTML +=
                        `<th scope='col'>Tipo de Documento</th>
                            <th scope='col'>Número de Documento</th>
                            <th scope='col'>Nombre de Institución</th>
                            <th scope='col'>Fecha de Emisión</th>
                            <th scope='col'>Porcentaje de Exoneración</th>
                            <th scope='col'>Monto de Exoneración</th>
                            <th scope='col'>Para seleccionar</th>`

                    document.getElementById(idTabla).innerHTML += `<tbody id="listadocuerpo"></tbody>`

                    for (var i in data) {
                        document.getElementById("listadocuerpo").innerHTML += `<tr><td>${data[i].TipoDocumento1}</td><td>${data[i].NumeroDocumento1}</td><td>${data[i].NombreInstitucion1}</td><td>${data[i].FechaEmision1}</td><td>${data[i].PorcentajeExoneracion1}</td><td>${data[i].MontoExoneracion1}</td><td><input type="button" value="Seleccionar" id="btSeleccionar" class="btn btn-primary" onClick="seleccionarExoneracion(${data[i].TipoDocumento1},${data[i].NumeroDocumento1})"></td></tr>`
                    }
                    $('#' + idTabla).DataTable();
                },
                error: function (xhr, textStatus, erroThrown) {
                    alert(xhr);
                }
            });
}
        function Seleccionarimpuesto(id)
        {
            Lineadetalle_impuesto_exoneracion.Impuestocodigo = id;
            Lineadetalle_impuesto_exoneracion.Lineadetalleconsecutivo = LineaDetalle.Consecutivo;
            Lineadetalle_impuesto_exoneracion.Tipodocumento = "";
            Lineadetalle_impuesto_exoneracion.Numerodocumento = "";

}

        function descuentosselect(controlselect) {
            $.ajax({
                url: ruta + 'Descuento',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {

                    console.log(data, "Descuentos")
                    if (data.length > 0) {


                        for (var indice in data) {
                            controlselect.innerHTML += '<option id = ' + data[indice].NaturalezaDescuento1 + ' value =' + data[indice].MontoDescuento1 + '>Monto: ' + data[indice].MontoDescuento1 + ' - Naturaleza: ' + data[indice].NaturalezaDescuento1 + '</option>';

                        }
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
        }
        function impuestosselec(iddelatabla) {
            var idtabla = iddelatabla.id;
            $.ajax({
                url: ruta + 'Impuesto',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    console.log(data, "Impuestos")
                    if (data.length > 0) {
                        impuestoscargados = data;
                        document.getElementById(idtabla).innerHTML += '<thead class"thead bg-primary text-white" id="listadocabeza"><tr id="filalistadocabeza"></tr></thead>';

                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Código</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Código de tarifa</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Tarifa</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Factor de IVA</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Monto</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Monto de exportación</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para seleccionar</th>';


                        document.getElementById(idtabla).innerHTML += '<tbody id="listadocuerpo"></tbody>';


                        for (var indice in data) {


                            document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].CodigoImpuesto1 + '</td><td>' + data[indice].CodigoTarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Factor_Iva1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].MontoExportacion1 + '</td><td><input type="button" value="Seleccionar" id="btseleccionar" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalexos" onclick="Seleccionarimpuesto(' + data[indice].CodigoImpuesto1 + ')" /></td></tr>';


                        }
                        $(`#${idtabla}`).DataTable();
                    }
                }
                ,
                error: function (xhr, textStatus, errorThrown) {
                    $("#infodeimpuestocarga").remove();
                    alert(xhr);
                }

            });
        }
        function exoneracionesselec(iddelatabla) {
            $.ajax({
                url: ruta + 'Exoneracion',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    if (data.length > 0) {
                        exoneracionescargadas = data;
                        document.getElementById(iddelatabla.id).innerHTML += '<thead id="listadocabeza"><tr id="filalistadocabeza"></tr></thead>';

                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Tipo de documento</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Numero de documento</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Nombre de la institución</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Fecha de emisión</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Porcentaje exoneran</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Monto exoneracion</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para seleccionar</th>';
                        document.getElementById(iddelatabla.id).innerHTML += '<tbody id="listadocuerpo"></tbody>';

                        for (var indice in data) {
                            document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].TipoDocumento1 + '</td><td>' + data[indice].NumeroDocumento1 + '</td><td>' + data[indice].NombreInstitucion1 + '</td><td>' + data[indice].FechaEmision1 + '</td><td>' + data[indice].PorcentajeExoneracion1 + '</td><td>' + data[indice].MontoExoneracion1 + '</td><td><input type="button" value="Seleccionar" id="btnseleccionar" class="btn btn-primary btn-sm" data-dismiss="modal" onclick="Seleccionarlaexoneracion(' + data[indice].TipoDocumento1 + ',' + data[indice].NumeroDocumento1 + ')" /></td></tr>';
                        }
                    }
                }
                ,
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
        }
        function codigocomerciaselect(controlselect) {
            $.ajax({
                url: ruta + 'CodigoComercial',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    // alert(data[0]);
                    console.log(data, "Codigos Comerciales")
                    if (data.length > 0) {
                        for (var indice in data) {
                            controlselect.innerHTML += '<option id = ' + data[indice].Tipo1 + ' value =' + data[indice].Codigo1 + '>Tipo: ' + data[indice].Tipo1 + ' - Codigo: ' + data[indice].Codigo1 + '</option>';
                        }
                    }
                }
                ,
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }
            });
        }

        //CALCULOS
        function calculamontototal() {

            if (LineaDetalle.Cantidad != "" && LineaDetalle.Preciounitario != "") {

                LineaDetalle.Montototal = LineaDetalle.Cantidad * LineaDetalle.Preciounitario;

            }
        }
        function calculamontototaldescuento() {

            if (LineaDetalle.Descuentomonto == "") {
                LineaDetalle.Descuentomonto = "0";
            }

            if (LineaDetalle.Montototal == "") {
                LineaDetalle.Montototal = "0";
            }
            LineaDetalle.Subtotal = LineaDetalle.Montototal - LineaDetalle.Descuentomonto;
            LineaDetalle.Baseimponible = LineaDetalle.Montototal - LineaDetalle.Descuentomonto;
        }
        function calculaimpuestos() {
            var calculomontoimpuesto = 0;
            for (var indice in LineaDetalle.listaLineadetalle_impuesto_exoneracion) {
                for (var indiceimpuesto in impuestoscargados) {

                    if (LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo == impuestoscargados[indiceimpuesto].Codigoimpuesto1) {
                        calculomontoimpuesto = LineaDetalle.Subtotal * (impuestoscargados[indiceimpuesto].Tarifa1 / 100)
                        if (LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Numerodocumento != "") {
                            for (var indiceexoneraciones in exoneracionescargadas) {
                                if (exoneracionescargadas[indiceexoneraciones].TipoDocumento1 == LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Tipodocumento && exoneracionescargadas[indiceexoneraciones].NumeroDocumento1 == LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Numerodocumento) {

                                    calculomontoimpuesto = calculomontoimpuesto - (calculomontoimpuesto * (exoneracionescargadas[indiceexoneraciones].PorcentajeExoneracion1 / 100));
                                }


                            }
                        }
                    }
                }



            }

            LineaDetalle.Impuestoneto = calculomontoimpuesto;
            LineaDetalle.Montototallinea = LineaDetalle.Subtotal + calculomontoimpuesto;

        }
        function automatizaciondecalculos(controlmontototal, controlsubtotal, controlimpuestoneto, controlmontototallinea, controlbaseimponible) {

            calculamontototal();
            calculamontototaldescuento();
            calculaimpuestos();

            controlmontototal.value = LineaDetalle.Montototal;
            controlsubtotal.value = LineaDetalle.Subtotal;
            controlimpuestoneto.value = LineaDetalle.Impuestoneto;
            controlmontototallinea.value = LineaDetalle.Montototallinea;
            controlbaseimponible.value = LineaDetalle.Baseimponible;
}

       //IMPUESTOS
        function impuestosexoneracionseleccionados(tablaparamostrar) {

            tablaparamostrar.innerHTML = "";
            tablaparamostrar.innerHTML += '<thead id="listadocabezaimpexosel"><tr id="cabezaimpexose"></tr></thead>';

            document.getElementById("cabezaimpexose").innerHTML += '<th scope="col">Código de impuesto</th>';
            document.getElementById("cabezaimpexose").innerHTML += '<th scope="col">Exoneracion (si aplica)</th>';
            document.getElementById("cabezaimpexose").innerHTML += '<th scope="col">Tarifa</th>'
            document.getElementById("cabezaimpexose").innerHTML += '<th scope="col">Para eliminar</th>';

            tablaparamostrar.innerHTML += '<tbody id="listadocuerpoimpexose"></tbody>';

            for (var indice in LineaDetalle.listaLineadetalle_impuesto_exoneracion) {
                var tarifa = 0;
                var exotarifa = 0;
                for (var indicedelosimpuesto in impuestoscargados) {

                    if (LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo == impuestoscargados[indicedelosimpuesto].Codigoimpuesto1) {
                        tarifa = impuestoscargados[indicedelosimpuesto].Tarifa1;
                        break;
                    }
                }
                if (LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Numerodocumento != "") {


                    for (var indicedeexoneraciones in exoneracionescargadas) {
                        if (exoneracionescargadas[indicedeexoneraciones].TipoDocumento1 == LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Tipodocumento && exoneracionescargadas[indicedeexoneraciones].NumeroDocumento1 == LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Numerodocumento) {
                            exotarifa = exoneracionescargadas[indicedeexoneraciones].PorcentajeExoneracion1;
                            break;
                        }
                    }


                    document.getElementById("listadocuerpoimpexose").innerHTML += '<tr><td>' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo + '</td><td>' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Numerodocumento + ' ' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Tipodocumento + '</td><td> Tarifa del impuesto: ' + tarifa + '%, tarifa exonerada: ' + exotarifa + '%</td><td><input type="button" value="Elimina" id="btneliminar" class="btn btn-primary btn-sm" onclick="Eliminarimpuestoseleccionado(' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo + ')" /></td></tr>';
                }
                else {
                    document.getElementById("listadocuerpoimpexose").innerHTML += '<tr><td>' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo + '</td><td>No aplica</td><td> Tarifa del impuesto: ' + tarifa + '%</td><td><input type="button" value="Elimina" id="btneliminar" class="btn btn-primary btn-sm" onclick="Eliminarimpuestoseleccionado(' + LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo + ')" /></td></tr>';


                }
            }
            //  $('#' + iddelatabla).DataTable(); para seguir formato de https://datatables.net/ 

            $('#' + tablaparamostrar.id/*No se de donde es ese Id*/).DataTable();
            automatizaciondecalculos(document.getElementById("montototal"), document.getElementById("subtotal"), document.getElementById("impuestoneto"), document.getElementById("montototallinea"), document.getElementById("baseimponible"));
}
        function Eliminarimpuestoseleccionado(impcodigo) {
            for (var indice in LineaDetalle.listaLineadetalle_impuesto_exoneracion) {


                if (LineaDetalle.listaLineadetalle_impuesto_exoneracion[indice].Impuestocodigo == impcodigo) {
                    LineaDetalle.listaLineadetalle_impuesto_exoneracion.splice(indice, 1);
                    break;
                }
            }
            impuestosexoneracionseleccionados(document.getElementById('impuestos'));

        }
        function agregarimpuestoexoneracion() {
            var nuevoimpuestoexo = new Object();

            nuevoimpuestoexo.Lineadetalleconsecutivo = Lineadetalle_impuesto_exoneracion.Lineadetalleconsecutivo;
            nuevoimpuestoexo.Impuestocodigo = Lineadetalle_impuesto_exoneracion.Impuestocodigo;
            nuevoimpuestoexo.Tipodocumento = Lineadetalle_impuesto_exoneracion.Tipodocumento;
            nuevoimpuestoexo.Numerodocumento = Lineadetalle_impuesto_exoneracion.Numerodocumento;


            LineaDetalle.listaLineadetalle_impuesto_exoneracion.push(nuevoimpuestoexo);
            impuestosexoneracionseleccionados(document.getElementById('impuestos'));
}
        function Seleccionarlaexoneracion(tipo, numero) {
            Lineadetalle_impuesto_exoneracion.Tipodocumento = tipo;
            Lineadetalle_impuesto_exoneracion.Numerodocumento = numero;
            agregarimpuestoexoneracion();
}

        //FUNCIONALIDAD LINEADETALLE

        function guardarlineadetalle() {
            LineaDetalle.listaLineadetalle_impuesto_exoneracion = JSON.stringify(LineaDetalle.listaLineadetalle_impuesto_exoneracion);
            console.log(LineaDetalle+"LineaDetalle");
            $.ajax({
                url: ruta + 'LineaDetalle',
                type: 'PUT',
                dataType: 'json',
                data: LineaDetalle,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    location.href = 'LineaDetalle.html';
                }
               ,
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });

        }

        function cargarlineasdetalle() {
          
            document.getElementById("listalinea").innerHTML = "";
            $.ajax({
                url: ruta + 'LineaDetalle',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    // alert(data[0]);
                    console.log(data, "cargarlineasdetalle")
                    if (data.length > 0) {
                        document.getElementById("listalinea").innerHTML += '<thead id="listadocabeza" class="thead bg-primary text-white"><tr id="filalistadocabeza"></tr></thead>';

                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Consecutivo</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Numero de linea</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Partida arancelaria</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Código</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Código comercial</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Cantidad</th>';

                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Unidad de medida</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Unidad de medida comercial</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Detalle</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Precio unitario</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Monto total</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Descuento</th>';


                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Sub total</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Base imponible</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Impuesto neto</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Monto total de la linea</th>';


                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para modificar</th>';
                        document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para eliminar</th>';

                        document.getElementById("listalinea").innerHTML += '<tbody id="listadocuerpo"></tbody>';

                        for (var indice in data) {
                            var objetoserializado = JSON.stringify(data[indice]);
                            var objetoserializadocomillas = "";
                            for (var caracter in objetoserializado) {

                                objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");


                            }

                            document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Consecutivo1 + '</td><td>' + data[indice].Numlinea1 + '</td><td>' + data[indice].Partidaarancelaria1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigocomercial1.Tipo1 + ' ' + data[indice].Codigocomercial1.Codigo1 + '</td><td>' + data[indice].Cantidad1 + '</td><td>' + data[indice].Unidadmedida1 + '</td><td>' + data[indice].Unidadmedidacomercial1 + '</td><td>' + data[indice].Detalle1 + '</td><td>' + data[indice].Preciounitario1 + '</td><td>' + data[indice].Montototal1 + '</td><td>' + data[indice].objetoDescuento.NaturalezaDescuento1 + ' ' + data[indice].objetoDescuento.MontoDescuento1 + '</td><td>' + data[indice].Subtotal1 + '</td><td>' + data[indice].Baseimponible1 + '</td><td>' + data[indice].Impuestoneto1 + '</td><td>' + data[indice].Montototallinea1 + '</td></tr>';

                            //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';

                        }
                    }
                }


                ,
                error: function (xhr, textStatus, errorThrown) {
                    $("#infodelineasdedetallecarga").remove();
                    alert(xhr);
                }

            });
        }

        function eliminarlineadetalle(Linea) {
            $.ajax({
                url: urlaconectarse + "Lineadetalle",
                type: "DELETE",
                dataType: "json",
                data: Linea,
                success: function (data, textstatus, xhr) {
                    alert(data[0]);
                    $('#iinfodelineadetalleelimina' + data[1]).remove();
                },
                error: function (xhr, textstatus, errorthrown) {
                    $('#iinfodelineadetalleelimina' + data[1]).remove();
                    alert(xhr);
                }
            })
        }

        function cargarlineasdetalleparaseleccionar(idtabla) {
            controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las lineas de detalle', 'Se esta cargando el listado de lineas de detalle', 'infodelineasdedetallecarga');
            document.getElementById(idtabla).innerHTML = "";
            $.ajax({
                url: urlaconectarse + 'Lineadetalle',
                type: 'GET',
                dataType: 'json',
                data: null,
                success: function (data, textStatus, xhr) {
                    // alert(data[0]);
                    console.log(data, "Lineas Detalles")
                    if (data.length > 0) {

                        document.getElementById(idtabla).innerHTML += '<thead id="listadocabeza' + idtabla + '"><tr id="filalistadocabeza' + idtabla + '"></tr></thead>';

                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Consecutivo</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Numero de linea</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Partida arancelaria</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Código</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Código comercial</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Cantidad</th>';

                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Unidad de medida</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Unidad de medida comercial</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Detalle</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Precio unitario</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Monto total</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Descuento</th>';


                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Sub total</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Base imponible</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Impuesto neto</th>';
                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Monto total de la linea</th>';


                        document.getElementById("filalistadocabeza" + idtabla).innerHTML += '<th scope="col">Seleccionar</th>';


                        document.getElementById(idtabla).innerHTML += '<tbody id="listadocuerpo' + idtabla + '"></tbody>';


                        //document.getElementById("listado").innerHTML += '';
                        for (var indice in data) {
                            var objetoserializado = JSON.stringify(data[indice]);
                            var objetoserializadocomillas = "";
                            for (var caracter in objetoserializado) {

                                objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");


                            }
                            document.getElementById("listadocuerpo" + idtabla).innerHTML += '<tr><td>' + data[indice].Consecutivo1 + '</td><td>' + data[indice].Numlinea1 + '</td><td>' + data[indice].Partidaarancelaria1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigocomercial1.Tipo1 + ' ' + data[indice].Codigocomercial1.Codigo1 + '</td><td>' + data[indice].Cantidad1 + '</td><td>' + data[indice].Unidadmedida1 + '</td><td>' + data[indice].Unidadmedidacomercial1 + '</td><td>' + data[indice].Detalle1 + '</td><td>' + data[indice].Preciounitario1 + '</td><td>' + data[indice].Montototal1 + '</td><td>' + data[indice].Montodescuento1.NaturalezaDescuento1 + ' ' + data[indice].Montodescuento1.MontoDescuento1 + '</td><td>' + data[indice].Subtotal1 + '</td><td>' + data[indice].Baseimponible1 + '</td><td>' + data[indice].Impuestoneto1 + '</td><td>' + data[indice].Montototallinea1 + '</td><td><input type="button" value="Seleccionar" id="btnmodificar" class="btn btn-primary" onclick="paraseleccionarunalineadetalle(' + objetoserializadocomillas + ')" /></td></tr>';
                        }
                    }
                    else {

                    }


                    $("#infodelineasdedetallecarga").remove();
                    $('#' + idtabla).DataTable({
                        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
                    });
                }


                ,
                error: function (xhr, textStatus, errorThrown) {
                    $("#infodelineasdedetallecarga").remove();
                    alert(xhr);
                }

            });
        }

        function paraseleccionarunalineadetalle(objeto) {
            objeto.Numerolinea1 = parseInt(Factura.lineasdetalledelafactura.length) + 1
            var person = prompt("Desea cambiar la cantidad de unidades de la linea, actualmente es " + objeto.Cantidad1, "");

            if (person == null || person == "") {

            } else {
                objeto.Impuestoneto1 = (objeto.Impuestoneto1 / objeto.Cantidad1) * person;
                objeto.Cantidad1 = person;
                objeto.Montototal1 = objeto.Cantidad1 * objeto.Preciounitario1;
                objeto.Subtotal1 = objeto.Montototal1 - objeto.Descuento1.Montodescuento1;

                objeto.Montototallinea1 = objeto.Subtotal1 - objeto.Impuestoneto1;
            }
            agregarlineadetallealafactura(objeto);
        }


