var urlaconectarse = "https://localhost:44336/api/";

function creadortarjetadecarga(titulo, texto, id) {

    return "<div class='card text-center' id='" + id + "'><div class='card-header'><h5 class='card-title'>" + titulo + "</h5></div><div class='card-body'><img src = 'Img/cargando1.gif' class='rounded'> </div><div class='card-footer text-muted'><p class='card-text'>" + texto + "</p></div></div>";
}

function creadordenav() {
    var navegador = "";
    navegador += "<nav class='navbar navbar-expand-lg navbar-dark bg-primary'><a class='navbar-brand' href='Fe_Index.html'>Factura electronica</a><button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>";
    navegador += "<div class='collapse navbar-collapse' id='navbarNavAltMarkup'><div class='navbar-nav'><a class='nav-link' href='Fe_Codigocomercial.html'>Codigo comercial</a><a class='nav-link' href='Fe_Codigotipomoneda.html'>Codigo tipo moneda</a><a class='nav-link' href='Fe_Descuento.html'>Descuento</a><a class='nav-link' href='Fe_Exoneracion.html'>Exoneracion</a><a class='nav-link' href='Fe_Fax.html'>Fax</a><a class='nav-link' href='Fe_Identificacionpersona.html'>Identificacion Persona</a><a class='nav-link' href='Fe_Impuesto.html'>Impuesto</a><a class='nav-link' href='Fe_LineaDetalle.html'>Linea Detalle</a><a class='nav-link' href='Fe_Persona.html'>Persona</a><a class='nav-link' href='Fe_Telefono.html'>Telefono</a><a class='nav-link' href='Fe_Tipodocumento.html'>Tipo de documento</a><a class='nav-link' href='Fe_Ubicacion.html'>Ubicacion</a></div></div></div></nav>";
    return navegador
}

function creadorfooter() {

    var footer = "";
    footer += "<footer class='d-block p-2 bg-primary text-white'><div class='footer-copyright text-center py-3'>Creado por:<a href='Fe_Index.html'style='color:white;'> Ky Cascante Sancho</a></div></footer >";
    return footer
}

/////////////////////////////////////Tabla Impuesto////////////////////////////////////////////////////////
var impuesto = new Object();

impuesto.codigo = "";
impuesto.codigotarifa = "";
impuesto.tarifa = "";
impuesto.factoriva = "";
impuesto.monto = "";
impuesto.montoexportacion = "";

function guardarImpuesto(Impuesto, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando impuesto", "Se esta guardando la información relacionada al Impuesto #" + impuesto.codigo, "infodeimpuestoguarda" + impuesto.codigo);
    $.ajax({
        url: urlaconectarse + "Impuesto",
        type: "PUT",
        dataType: "json",
        data: Impuesto,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeimpuestoguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeimpuestoguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarImpuesto(Impuesto, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando impuesto", "Se esta guardando la nueva información relacionada al Impuesto #" + impuesto.codigo, "infodeimpuestoactualiza" + impuesto.codigo);
    $.ajax({
        url: urlaconectarse + "Impuesto",
        type: "POST",
        dataType: "json",
        data: Impuesto,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeimpuestoactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeimpuestoactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarImpuesto(Impuesto, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando impuesto", "Se esta eliminando la información relacionada al Impuesto #" + impuesto.codigo, "infodeimpuestoelimina" + impuesto.codigo);
    $.ajax({
        url: urlaconectarse + "Impuesto",
        type: "DELETE",
        dataType: "json",
        data: Impuesto,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeimpuestoelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeimpuestoelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function impuestosselec(controldondemostraravance, iddelatabla) {
    controldondemostraravance.innerHTML += creadortarjetadecarga('Cargando los impuestos', 'Se esta cargando el listado de los impuestos', 'infodeimpuestocarga');
    document.getElementById(iddelatabla).innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Impuesto',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {

            console.log(data, "Impuestos")
            if (data.length > 0) {
                impuestoscargados = data;
                document.getElementById(iddelatabla).innerHTML += '<thead class"thead bg-primary text-white" id="listadocabeza' + iddelatabla + '"><tr id="filalistadocabeza' + iddelatabla + '"></tr></thead>';

                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Código</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Código de tarifa</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Tarifa</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Factor de IVA</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Monto</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Monto de exportación</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Para seleccionar</th>';


                document.getElementById(iddelatabla).innerHTML += '<tbody id="listadocuerpo' + iddelatabla + '"></tbody>';


                for (var indice in data) {


                    document.getElementById("listadocuerpo" + iddelatabla).innerHTML += '<tr><td>' + data[indice].Codigoimpuesto1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Factoriva1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Seleccionar" id="btseleccionar" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalexos" onclick="Seleccionarimpuesto(' + data[indice].Codigoimpuesto1 + ')" /></td></tr>';


                }
                $('#' + iddelatabla).DataTable();
            }
            else {

            }


            $("#infodeimpuestocarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeimpuestocarga").remove();
            alert(xhr);
        }

    });
}
function impuestos(controldondemostraravance) {
    controldondemostraravance.innerHTML += creadortarjetadecarga('Cargando los impuestos', 'Se esta cargando el listado de los impuestos', 'infodeimpuestocarga');
    $.ajax({
        url: urlaconectarse + 'Impuesto',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Impuestos")
            if (data.length > 0) {

                document.getElementById("impuestos").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Código</th><th scope='col'>Código de tarifa</th><th scope='col'>Tarifa</th><th scope='col'>Factor de IVA</th><th scope='col'>Monto</th><th scope='col'>Monto de exportación</th></tr></thead>";
                document.getElementById("impuestos").innerHTML += "<tbody>";
                for (var indice in data) {

                    document.getElementById("impuestos").innerHTML += '<tr><td>' + data[indice].Codigoimpuesto1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Factoriva1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td></tr>';

                }

                document.getElementById("impuestos").innerHTML += "</tbody>";
            }
            else {
            }
            $("#infodeimpuestocarga").remove();
        }
        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeimpuestocarga").remove();
            alert(xhr);
        }

    });
}
/////////////////////////////////////////////////Tabla Ubicación////////////////////////////////////////////////

var ubicacion = new Object();

ubicacion.idubicacion = "";
ubicacion.provincia = "";
ubicacion.canton = "";
ubicacion.distrito = "";
ubicacion.barrio = "";
ubicacion.otrassenas = "";

function guardarUbicacion(Ubicacion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando Ubicación", "Se esta guardando la información relacionada a la Ubicación #" + ubicacion.idubicacion, "infodeubicacionguarda" + ubicacion.idubicacion);
    $.ajax({
        url: urlaconectarse + "Ubicacion",
        type: "PUT",
        dataType: "json",
        data: Ubicacion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeubicacionguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeubicacionguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarUbicacion(Ubicacion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando Ubicación", "Se esta guardando la nueva información relacionada a la Ubicación #" + ubicacion.idubicacion, "infodeubicacionactualiza" + ubicacion.idubicacion);
    $.ajax({
        url: urlaconectarse + "Ubicacion",
        type: "POST",
        dataType: "json",
        data: Ubicacion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeubicacionactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeubicacionactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarUbicacion(Ubicacion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando Ubicación", "Se esta eliminando la información relacionada a la Ubicación #" + ubicacion.idubicacion, "infodeubicacionelimina" + ubicacion.idubicacion);
    $.ajax({
        url: urlaconectarse + "Ubicacion",
        type: "DELETE",
        dataType: "json",
        data: Ubicacion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeubicacionelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeubicacionelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function cargarubicacionselect(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Ubicacion',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Ubicaciones")
            if (data.length > 0) {


                for (var indice in data) {
                    controlselect.innerHTML += '<option id = ' + data[indice].IdUbicacion1 + ' value =' + data[indice].IdUbicacion1 + '>' + data[indice].Provincia1 + ' ' + data[indice].Canton1 + ' ' + data[indice].Distrito1 + ' ' + data[indice].Barrio1 + ' ' + data[indice].OtrasSenas1 + '</option>';

                }
            }
            else {

            }


            $("#infodeubicacionescarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeubicacionescarga").remove();
            alert(xhr);
        }

    });
}
function ubicaciones(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Ubicacion',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Ubicaciones")
            if (data.length > 0) {

                document.getElementById("ubicaciones").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Id</th><th scope='col'>Provincia</th><th scope='col'>Canton</th><th scope='col'>Distrito1</th><th scope='col'>Barrio</th><th scope='col'>Otras señas</th></tr></thead>";
                document.getElementById("ubicaciones").innerHTML += "<tbody>";

                for (var indice in data) {
                    document.getElementById("ubicaciones").innerHTML += '<tr><td>' + data[indice].IdUbicacion1 + '</td><td>' + data[indice].Provincia1 + '</td><td>' + data[indice].Canton1 + '</td><td>' + data[indice].Distrito1 + '</td><td>' + data[indice].Barrio1 + '</td><td>' + data[indice].OtrasSenas1 + '</td></tr>';
                }
                document.getElementById("ubicaciones").innerHTML += "</tbody>";

            }
            else {

            }


            $("#infodeubicacionescarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeubicacionescarga").remove();
            alert(xhr);
        }

    });
}
/////////////////////////////////////////////////Tabla Exoneracion////////////////////////////////////////////////
var exoneracion = new Object();

exoneracion.tipodocumento = "";
exoneracion.numerodocumento = "";
exoneracion.nombreinstitucion = "";
exoneracion.fechaemision = "";
exoneracion.porcentajeexoneracion = "";
exoneracion.montoexoneracion = "";

function guardarExoneracion(Exoneracion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando exoneracion", "Se esta guardando la información relacionada a exoneracion #" + exoneracion.tipodocumento + exoneracion.numerodocumento, "infodeexoneracionguarda" + exoneracion.tipodocumento + exoneracion.numerodocumento);
    $.ajax({
        url: urlaconectarse + "Exoneracion",
        type: "PUT",
        dataType: "json",
        data: Exoneracion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeexoneracionguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeexoneracionguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarExoneracion(Exoneracion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando exoneracion", "Se esta guardando la nueva información relacionada a exoneracion #" + exoneracion.tipodocumento + exoneracion.numerodocumento, "infodeexoneracionactualiza" + exoneracion.tipodocumento + exoneracion.numerodocumento);
    $.ajax({
        url: urlaconectarse + "Exoneracion",
        type: "POST",
        dataType: "json",
        data: Exoneracion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeexoneracionactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            alert(xhr);
        }
    })
}

function eliminarExoneracion(Exoneracion, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando exoneracion", "Se esta eliminando la información relacionada a exoneracion  #" + exoneracion.tipodocumento + exoneracion.numerodocumento, "infodeexoneracionelimina" + exoneracion.tipodocumento + exoneracion.numerodocumento);
    $.ajax({
        url: urlaconectarse + "Exoneracion",
        type: "DELETE",
        dataType: "json",
        data: Exoneracion,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeexoneracionelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeexoneracionelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function exoneracionesselec(controldemastraravance, iddelatabla) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las exoneraciones', 'Se esta cargando el listado de las exoneraciones', 'infodeexoneracioncarga');
    document.getElementById(iddelatabla).innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Exoneracion',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {

            console.log(data, "Exoneraciones")
            if (data.length > 0) {
                exoneracionescargadas = data;
                document.getElementById(iddelatabla).innerHTML += '<thead id="listadocabeza' + iddelatabla + '"><tr id="filalistadocabeza' + iddelatabla + '"></tr></thead>';

                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Tipo de documento</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Numero de documento</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Nombre de la institución</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Fecha de emisión</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Porcentaje exoneran</th>';
                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Monto exoneracion</th>';

                document.getElementById("filalistadocabeza" + iddelatabla).innerHTML += '<th scope="col">Para seleccionar</th>';


                document.getElementById(iddelatabla).innerHTML += '<tbody id="listadocuerpo' + iddelatabla + '"></tbody>';


                //document.getElementById("listado").innerHTML += '';
                for (var indice in data) {


                    document.getElementById("listadocuerpo" + iddelatabla).innerHTML += '<tr><td>' + data[indice].TipoDocumento1 + '</td><td>' + data[indice].NumeroDocumento1 + '</td><td>' + data[indice].NombreInstitucion1 + '</td><td>' + data[indice].FechaEmision1 + '</td><td>' + data[indice].PorcentajeExoneracion1 + '</td><td>' + data[indice].MontoExoneracion1 + '</td><td><input type="button" value="Seleccionar" id="btnseleccionar" class="btn btn-primary btn-sm" data-dismiss="modal" onclick="Seleccionarlaexoneracion(' + data[indice].TipoDocumento1 + ',' + data[indice].NumeroDocumento1 + ')" /></td></tr>';

                }
                $('#' + iddelatabla).DataTable();
            }
            else {

            }


            $("#infodeexoneracioncarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeexoneracioncarga").remove();
            alert(xhr);

        }

    });
}

function exoneraciones(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las exoneraciones', 'Se esta cargando el listado de las exoneraciones', 'infodeexoneracioncarga');
    $.ajax({
        url: urlaconectarse + 'Exoneracion',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Exoneraciones")

            if (data.length > 0) {

                document.getElementById("exoneraciones").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Tipo de documento</th><th scope='col'>Numero de documento</th><th scope='col'>Nombre de la institución</th><th scope='col'>Fecha de emisión</th><th scope='col'>Porcentaje exoneran</th><th scope='col'>Monto exoneracion</th></tr></thead>";

                document.getElementById("exoneraciones").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("exoneraciones").innerHTML += '<tr><td>' + data[indice].TipoDocumento1 + '</td><td>' + data[indice].NumeroDocumento1 + '</td><td>' + data[indice].NombreInstitucion1 + '</td><td>' + data[indice].FechaEmision1 + '</td><td>' + data[indice].PorcentajeExoneracion1 + '</td><td>' + data[indice].MontoExoneracion1 + '</td></tr>';

                }
                document.getElementById("exoneraciones").innerHTML += "</tbody>";
            }
            else {
            }
            $("#infodeexoneracioncarga").remove();
        }
        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodeexoneracioncarga").remove();
            alert(xhr);

        }

    });
}

/////////////////////////////////////////////////Tabla Codigo comercial////////////////////////////////////////////////
var codigocomercial = new Object();

codigocomercial.tipo = "";
codigocomercial.codigo = "";

function guardarCodigocomercial(Codigocomercial, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando codigocomercial", "Se esta guardando la información relacionada a codigocomercial #" + codigocomercial.tipo + codigocomercial.codigo, "infodecodigocomercialguarda" + codigocomercial.tipo + codigocomercial.codigo);
    $.ajax({
        url: urlaconectarse + "Codigocomercial",
        type: "PUT",
        dataType: "json",
        data: Codigocomercial,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodecodigocomercialguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodecodigocomercialguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarCodigocomercial(Codigocomercial, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando codigocomercial", "Se esta eliminando la información relacionada a codigocomercial  #" + codigocomercial.tipo + codigocomercial.codigo, "infodecodigocomercialelimina" + codigocomercial.tipo + codigocomercial.codigo);
    $.ajax({
        url: urlaconectarse + "Codigocomercial",
        type: "DELETE",
        dataType: "json",
        data: Codigocomercial,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodecodigocomercialelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodecodigocomercialelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function codigocomerciaselect(controldemastraravance, controlselect) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando los codigo comerciales', 'Se esta cargando el listado de los codigo comerciales al cotrol respectivo', 'infodecodigocomercialcarga');

    $.ajax({
        url: urlaconectarse + 'Codigocomercial',
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
            else {

            }


            $("#infodecodigocomercialcarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodecodigocomercialcarga").remove();
            alert(xhr);
        }

    });
}
function codigoscomerciales(controldemastraravance, ) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando los codigo comerciales', 'Se esta cargando el listado de los codigo comerciales al cotrol respectivo', 'infodecodigocomercialcarga');

    $.ajax({
        url: urlaconectarse + 'Codigocomercial',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Codigos Comerciales")
            if (data.length > 0) {

                document.getElementById("codigocomercial").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Tipo</th><th scope='col'>Codigo</th></tr></thead>";
                document.getElementById("codigocomercial").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("codigocomercial").innerHTML += '<tr><th>' + data[indice].Tipo1 + '</th><th>' + data[indice].Codigo1 + '</th>' + '</tr>';

                }
                document.getElementById("codigocomercial").innerHTML += "</tbody>";
            }
            else {

            }


            $("#infodecodigocomercialcarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodecodigocomercialcarga").remove();
            alert(xhr);
        }

    });
}
////////////////////////////////////////////////Tabla Codigo tipomoneda////////////////////////////////////////////////////////////////////////
var codigotipomoneda = new Object();

codigotipomoneda.codigomoneda = "";
codigotipomoneda.tipocambio = "";

function guardarCodigotipomoneda(Codigotipomoneda, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando codigotipomoneda", "Se esta guardando la información relacionada a codigotipomoneda #" + codigotipomoneda.codigomoneda, "infodecodigotipomonedaguarda" + codigotipomoneda.codigomoneda);
    $.ajax({
        url: urlaconectarse + "Codigotipomoneda",
        type: "PUT",
        dataType: "json",
        data: Codigotipomoneda,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodecodigotipomonedaguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodecodigotipomonedaguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarCodigotipomoneda(Codigotipomoneda, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando codigotipomoneda", "Se esta guardando la nueva información relacionada a codigotipomoneda #" + codigotipomoneda.codigomoneda, "infodecodigotipomonedaactualiza" + codigotipomoneda.codigomoneda);
    $.ajax({
        url: urlaconectarse + "Codigotipomoneda",
        type: "POST",
        dataType: "json",
        data: Codigotipomoneda,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodecodigotipomonedaactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodecodigotipomonedaactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarCodigotipomoneda(Codigotipomoneda, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando codigotipomoneda", "Se esta eliminando la información relacionada a codigotipomoneda  #" + codigotipomoneda.codigomoneda, "infodecodigotipomonedaelimina" + codigotipomoneda.codigomoneda);
    $.ajax({
        url: urlaconectarse + "Codigotipomoneda",
        type: "DELETE",
        dataType: "json",
        data: Codigotipomoneda,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodecodigotipomonedaelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodecodigotipomonedaelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}
function codigostipomoneda(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando los codigo tipo moneda', 'Se esta cargando el listado de los codigo tipo moneda al cotrol respectivo', 'infodecodigocomercialcarga');

    $.ajax({
        url: urlaconectarse + 'Codigotipomoneda',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Codigos tipo moneda")
            if (data.length > 0) {

                document.getElementById("codigotipomoneda").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Tipo Moneda</th><th scope='col'>Tipo de cambio</th></tr></thead>";
                document.getElementById("codigotipomoneda").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("codigotipomoneda").innerHTML += '<tr><th>' + data[indice].CodigoMoneda1 + '</th><th>' + data[indice].TipoCambio1 + '</th>' + '</tr>';

                }
                document.getElementById("codigotipomoneda").innerHTML += "</tbody>";
            }
            else {

            }


            $("#infodecodigocomercialcarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodecodigocomercialcarga").remove();
            alert(xhr);
        }

    });
}
/////////////////////////////////////////////////Tabla Codigo Descuento////////////////////////////////////////////////////////////////////////
var descuento = new Object();

descuento.montodescuento = "";
descuento.naturalezadescuento = "";


function guardarDescuento(Descuento, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando descuento", "Se esta guardando la información relacionada a descuento #" + descuento.montodescuento + descuento.naturalezadescuento, "infodedescuentoguarda" + descuento.montodescuento + descuento.naturalezadescuento);
    $.ajax({
        url: urlaconectarse + "Descuento",
        type: "PUT",
        dataType: "json",
        data: Descuento,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodedescuentoguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodedescuentoguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarDescuento(Descuento, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando descuento", "Se esta eliminando la información relacionada a descuento  #" + descuento.montodescuento + descuento.naturalezadescuento, "infodedescuentoelimina" + descuento.montodescuento + descuento.naturalezadescuento);
    $.ajax({
        url: urlaconectarse + "Descuento",
        type: "DELETE",
        dataType: "json",
        data: Descuento,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodedescuentoelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodedescuentoelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function descuentosselect(controldemastraravance, controlselect) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando los descuentos', 'Se esta cargando el listado de los descuentos al cotrol respectivo', 'infodedescuentocarga');

    $.ajax({
        url: urlaconectarse + 'Descuento',
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
            else {

            }


            $("#infodedescuentocarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr);
        }

    });
}
function descuentos(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando los descuentos', 'Se esta cargando el listado de los descuentos al cotrol respectivo', 'infodedescuentocarga');

    $.ajax({
        url: urlaconectarse + 'Descuento',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {

            console.log(data, "Descuentos")

            if (data.length > 0) {

                document.getElementById("descuentos").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>NaturalezaDescuento1</th><th scope='col'>MontoDescuento1</th></tr></thead>";
                document.getElementById("descuentos").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("descuentos").innerHTML += '<tr><th>' + data[indice].NaturalezaDescuento1 + '</th><th>' + data[indice].MontoDescuento1 + '</th>' + '</tr>';

                }
                document.getElementById("descuentos").innerHTML += "</tbody>";
            }
            else {

            }


            $("#infodedescuentocarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr);
        }

    });
}
////////////////////////////////////////////////Tabla Fax////////////////////////////////////////////////////////////////////////
var fax = new Object();

fax.numfax = "";
fax.codigopais = "";


function guardarFax(Fax, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando fax", "Se esta guardando la información relacionada a fax #" + fax.numfax, "infodefaxguarda" + fax.numfax);
    $.ajax({
        url: urlaconectarse + "Fax",
        type: "PUT",
        dataType: "json",
        data: Fax,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodefaxguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodefaxguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarFax(Fax, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando fax", "Se esta guardando la nueva información relacionada a fax #" + fax.numfax, "infodefaxactualiza" + fax.numfax);
    $.ajax({
        url: urlaconectarse + "Fax",
        type: "POST",
        dataType: "json",
        data: Fax,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodefaxactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodefaxactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarFax(Fax, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando fax", "Se esta eliminando la información relacionada a fax  #" + fax.numfax, "infodefaxelimina" + fax.numfax);
    $.ajax({
        url: urlaconectarse + "Fax",
        type: "DELETE",
        dataType: "json",
        data: Fax,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodefaxelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodefaxelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function cargarfaxselect(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Fax',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Faxes")
            if (data.length > 0) {


                for (var indice in data) {
                    controlselect.innerHTML += '<option id = ' + data[indice].NumFax1 + ' value =' + data[indice].NumFax1 + '>' + '+' + data[indice].CodigoPais1 + ' ' + data[indice].NumFax1 + '</option>';

                }
            }
            else {
            } $("#infodefaxcarga").remove();
        },
        error: function (xhr, textStatus, errorThrown) {
            $("#infodefaxcarga").remove();
            alert(xhr);
        }

    });
}
function faxes(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Fax',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Faxes")

            if (data.length > 0) {

                document.getElementById("faxes").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Numero de fax</th><th scope='col'>Codigo del pais</th></tr></thead>";
                document.getElementById("faxes").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("faxes").innerHTML += '<tr><th>' + data[indice].NumFax1 + '</th><th>' + data[indice].CodigoPais1 + '</th>' + '</tr>';

                }
                document.getElementById("faxes").innerHTML += "</tbody>";
            }
            else {

            }
            $("#infodefaxcarga").remove();
        },
        error: function (xhr, textStatus, errorThrown) {
            $("#infodefaxcarga").remove();
            alert(xhr);
        }

    });
}

////////////////////////////////////////////////Tabla Telefono//////////////////////////////////////////////////////////////////////// 
var telefono = new Object();

telefono.codigopais = "";
telefono.numtelefono = "";

function guardarTelefono(Telefono, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando telefono", "Se esta guardando la información relacionada a telefono #" + telefono.numtelefono, "infodetelefonoguarda" + telefono.numtelefono);
    $.ajax({
        url: urlaconectarse + "Telefono",
        type: "PUT",
        dataType: "json",
        data: Telefono,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetelefonoguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetelefonoguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarTelefono(Telefono, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando telefono", "Se esta guardando la nueva información relacionada a telefono #" + telefono.numtelefono, "infodetelefonoactualiza" + telefono.numtelefono);
    $.ajax({
        url: urlaconectarse + "Telefono",
        type: "POST",
        dataType: "json",
        data: Telefono,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetelefonoactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetelefonoactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarTelefono(Telefono, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando telefono", "Se esta eliminando la información relacionada a telefono  #" + telefono.numtelefono, "infodetelefonoelimina" + telefono.numtelefono);
    $.ajax({
        url: urlaconectarse + "Telefono",
        type: "DELETE",
        dataType: "json",
        data: Telefono,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetelefonoelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetelefonoelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function cargartelefonoselect(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Telefono',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Telefonos")
            if (data.length > 0) {


                for (var indice in data) {
                    controlselect.innerHTML += '<option id = ' + data[indice].NumTelefono1 + ' value =' + data[indice].NumTelefono1 + '>' + '+' + data[indice].CodigoPais1 + ' ' + data[indice].NumTelefono1 + '</option>';

                }
            } $("#infodetelefonocarga").remove();
        },
        error: function (xhr, textStatus, errorThrown) {
            $("#infodetelefonocarga").remove();
            alert(xhr);
        }

    });
}
function telefonos(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Telefono',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Telefonos")

            if (data.length > 0) {

                document.getElementById("telefonos").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Numero de telefono</th><th scope='col'>Codigo del pais</th></tr></thead>";
                document.getElementById("telefonos").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("telefonos").innerHTML += '<tr><th>' + data[indice].NumTelefono1 + '</th><th>' + data[indice].CodigoPais1 + '</th>' + '</tr>';

                }
                document.getElementById("telefonos").innerHTML += "</tbody>";
                $("#infodetelefonocarga").remove();
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            $("#infodetelefonocarga").remove();
            alert(xhr);
        }

    });
}
////////////////////////Tabla Tipodocumento////////////////////////////////////////////////////////////////////////
var tipodocumento = new Object();

tipodocumento.numeroidentidad = "";
tipodocumento.tipodocumento = "";

function guardarTipodocumento(Tipodocumento, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando tipodocumento", "Se esta guardando la información relacionada a tipodocumento #" + tipodocumento.tipodocumento, "infodetipodocumentoguarda" + tipodocumento.tipodocumento);
    $.ajax({
        url: urlaconectarse + "Tipodocumento",
        type: "PUT",
        dataType: "json",
        data: Tipodocumento,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetipodocumentoguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetipodocumentoguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}

function actualizarTipodocumento(Tipodocumento, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando tipodocumento", "Se esta guardando la nueva información relacionada a tipodocumento #" + tipodocumento.tipodocumento, "infodetipodocumentoactualiza" + tipodocumento.tipodocumento);
    $.ajax({
        url: urlaconectarse + "Tipodocumento",
        type: "POST",
        dataType: "json",
        data: Tipodocumento,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetipodocumentoactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetipodocumentoactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}

function eliminarTipodocumento(Tipodocumento, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando tipodocumento", "Se esta eliminando la información relacionada a tipodocumento  #" + tipodocumento.tipodocumento, "infodetipodocumentoelimina" + tipodocumento.tipodocumento);
    $.ajax({
        url: urlaconectarse + "Tipodocumento",
        type: "DELETE",
        dataType: "json",
        data: Tipodocumento,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodetipodocumentoelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodetipodocumentoelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}
function tipodocumentos(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Tipodocumento',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Tipodocumentos")
            if (data.length > 0) {

                document.getElementById("tipodocumentos").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Numero Identidad Tercero</th><th scope='col'>Tipo de documento</th></tr></thead>";
                document.getElementById("tipodocumentos").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("tipodocumentos").innerHTML += '<tr><th>' + data[indice].NumeroIdentidadTercero1 + '</th><th>' + data[indice].Tipodocumento1 + '</th>' + '</tr>';

                }
                document.getElementById("tipodocumentos").innerHTML += "</tbody>";
                $("#infodetipodocumentos").remove();
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            $("#infodetipodocumentos").remove();
            alert(xhr);
        }

    });
}
//////////////////////// Tabla Identificacion Persona ////////////////////////////////////////////////////////////////////////
var identificacionpersona = new Object();

identificacionpersona.identificacion = "";

identificacionpersona.tipo = "";


function guardarIdentificacionpersona(Identificacionpersona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando identificacionpersona", "Se esta guardando la información relacionada a identificacionpersona #" + identificacionpersona.identificacion, "infodeidentificacionpersonaguarda" + identificacionpersona.identificacion);
    $.ajax({
        url: urlaconectarse + "Identificacionpersona",
        type: "PUT",
        dataType: "json",
        data: Identificacionpersona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeidentificacionpersonaguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeidentificacionpersonaguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}
function actualizarIdentificacionpersona(Identificacionpersona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando identificacionpersona", "Se esta guardando la nueva información relacionada a identificacionpersona #" + identificacionpersona.identificacion, "infodeidentificacionpersonaactualiza" + identificacionpersona.identificacion);
    $.ajax({
        url: urlaconectarse + "Identificacionpersona",
        type: "POST",
        dataType: "json",
        data: Identificacionpersona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeidentificacionpersonaactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeidentificacionpersonaactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}
function eliminarIdentificacionpersona(Identificacionpersona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando identificacionpersona", "Se esta eliminando la información relacionada a identificacionpersona  #" + identificacionpersona.identificacion, "infodeidentificacionpersonaelimina" + identificacionpersona.identificacion);
    $.ajax({
        url: urlaconectarse + "Identificacionpersona",
        type: "DELETE",
        dataType: "json",
        data: Identificacionpersona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodeidentificacionpersonaelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodeidentificacionpersonaelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function identificaciones(controlselect) {
    $.ajax({
        url: urlaconectarse + 'Identificacionpersona',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Identificaciones")

            if (data.length > 0) {

                document.getElementById("identificaciones").innerHTML += " <thead class='thead bg-primary text-white'><tr><th scope='col'>Tipo</th><th scope='col'>Identificacion</th></tr></thead>";
                document.getElementById("identificaciones").innerHTML += "<tbody>";

                for (var indice in data) {

                    document.getElementById("identificaciones").innerHTML += '<tr><th>' + data[indice].Tipo1 + '</th><th>' + data[indice].Identificacion1 + '</th>' + '</tr>';

                }
                document.getElementById("identificaciones").innerHTML += "</tbody>";
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr);
        }

    });
}
//////////////////////// Tabla Persona ////////////////////////////////////////////////////////////////////////////////////////////////
var persona = new Object();

persona.nombre = "";
persona.identificacion = "";
persona.numtelefono = "";
persona.numfax = "";
persona.idubicacion = "";
persona.nombrecomercial = "";
persona.correoelectronico = "";
persona.identificacionextranjero = "";
persona.otrassenasextranjero = "";

function guardarPersona(Persona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Guardando persona", "Se esta guardando la información relacionada a persona #" + persona.identificacion, "infodepersonaguarda" + persona.identificacion);
    $.ajax({
        url: urlaconectarse + "Persona",
        type: "PUT",
        dataType: "json",
        data: Persona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodepersonaguarda' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodepersonaguarda' + data[1]).remove();
            alert(xhr);
        }
    })
}
function actualizarPersona(Persona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Actualizando persona", "Se esta guardando la nueva información relacionada a persona #" + persona.identificacion, "infodepersonaactualiza" + persona.identificacion);
    $.ajax({
        url: urlaconectarse + "Persona",
        type: "POST",
        dataType: "json",
        data: Persona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodepersonaactualiza' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodepersonaactualiza' + data[1]).remove();
            alert(xhr);
        }
    })
}
function eliminarPersona(Persona, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando persona", "Se esta eliminando la información relacionada a persona  #" + persona.identificacion, "infodepersonaelimina" + persona.identificacion);
    $.ajax({
        url: urlaconectarse + "Persona",
        type: "DELETE",
        dataType: "json",
        data: Persona,
        success: function (data, textstatus, xhr) {
            alert(data[0]);
            $('#infodepersonaelimina' + data[1]).remove();
        },
        error: function (xhr, textstatus, errorthrown) {
            $('#infodepersonaelimina' + data[1]).remove();
            alert(xhr);
        }
    })
}

function verificaexistenciapersona(Persona, controldemastraravance) {

    controldemastraravance.innerHTML += creadortarjetadecarga("Verificando si la persona existe en la BD", "Se esta verificando la información correspondiente a la persona: #" + persona.identificacion, "infodepersonaverifica" + persona.identificacion);

    $.ajax({
        url: urlaconectarse + 'Persona?id=' + Persona.identificacion,
        type: 'GET',
        dataType: 'json',
        data: Persona,
        success: function (data, textStatus, xhr) {
            $("#infodepersonaverifica" + Persona.identificacion).remove();
            switch (data.Nombre1) {

                case "NO EXISTE":
                    {
                        alert("no existe");
                        break;
                    }
                case "Error":
                    {
                        alert("Hay una interrupción con la conexión a la base de datos, por favor intente mas tarde");
                        break;
                    }
                default:
                    {
                        alert("SI");
                        rellenadatosdepersonaexistente(data);
                        break;
                    }
            }
        }, error: function (xhr, textStatus, errorThrown) {
            $("#infodepersonaverifica" + Persona.identificacion).remove();
            alert(xhr);
        }
    });
}
function cargarpersonas(controldemastraravance) {

    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las personas', 'Se esta cargando el listado de las personas', 'infodepersonacarga');
    document.getElementById("listado").innerHTML = "";
    $.ajax({
        url: urlaconectarse + "Persona",
        type: "GET",
        dataType: "json",
        data: null,
        success: function (data, textStatus, xhr) {
            console.log(data, "Personas")
            document.getElementById("listado").innerHTML += '<thead class="thead bg-primary text-white"><tr><td scope="col">Nombre</td><td scope="col">Numero de identificación</td><td scope="col">Nombre comercial</td><td scope="col">Ubicación </td><td scope="col">Teléfono</td><td scope="col">Fax</td><td scope="col">Correo</td><td scope="col">Identificación de extranjero</td><td scope="col">Otras señas extranjero</td><td scope="col">Modificar</td><td scope="col">Eliminar</td></tr></thead><tbody id = "listadocuerpo">';
            if (data.length > 0) {
                for (var i in data) {

                    var objetoserializado = JSON.stringify(data[i]);
                    var objetoserializadocomillas = "";
                    for (var caracter in objetoserializado) {
                        objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");
                    }

                    document.getElementById('listadocuerpo').innerHTML += '<tr><td>' + data[i].Nombre1 + '</td><td>' + data[i].Identificacion1.Identificacion1 + '</td><td>' + data[i].Nombrecomercial1 + '</td><td>' + data[i].Idubicacion1.Provincia1 + ',' + data[i].Idubicacion1.Canton1 + ',' + data[i].Idubicacion1.Distrito1 + '</td><td>' + data[i].Numtelefono1.NumTelefono1 + '</td><td>' + data[i].Numfax1.NumFax1 + '</td><td>' + data[i].Correoelectronico1 + '</td><td>' + data[i].Identificacionextranjero1 + '</td><td>' + data[i].Otrassenasextranjero1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn - primary" onclick="cargardatosenelformulario(' + objetoserializadocomillas + ')"' + '/></td > <td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[i].Identificacion1.Identificacion1 + ')" /></td></tr >';

                }
            }
            else {

            }


            $("#infodepersonacarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodepersonacarga").remove();
            alert(xhr);
        }

    });
}

function cargarpersonasparaseleccionar(controldemastraravance, idllave) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las personas', 'Se esta cargando el listado de las personas', 'infodepersonacarga');
    document.getElementById(idllave).innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Persona',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            // alert(data[0]);
            console.log(data)
            if (data.length > 0) {

                document.getElementById(idllave).innerHTML += '<thead id="listadocabeza"><tr id="filalistadocabeza' + idllave + '"></tr></thead>';

                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Numero de identificación</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre comercial</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Ubicación </th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Teléfono</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Fax</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Correo</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Identificación de extranjero</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Seleccionar</th>';


                document.getElementById(idllave).innerHTML += '<tbody id="listadocuerpo' + idllave + '"></tbody>';


                //document.getElementById("listado").innerHTML += '';
                for (var indice in data) {
                    var objetoserializado = JSON.stringify(data[indice]);
                    var objetoserializadocomillas = "";
                    for (var caracter in objetoserializado) {

                        objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");


                    }


                    document.getElementById("listadocuerpo" + idllave).innerHTML += '<tr><td>' + data[indice].Nombre1 + '</td><td>' + data[indice].Identificacionnumero1.Numero1 + '</td><td>' + data[indice].Nombrecomercial1 + '</td><td>' + data[indice].Ubicacionid1.Provincia1 + ' ' + data[indice].Ubicacionid1.Canton1 + ' ' + data[indice].Ubicacionid1.Distrito1 + '</td><td>' + data[indice].Telefononumero1.Numtelefono1 + '</td><td>' + data[indice].Faxnumero1.Numtelefono1 + '</td><td>' + data[indice].Correoelectronico1 + '</td><td>' + data[indice].Identificacionextragenro1 + '</td><td><input type="button" value="Seleccionar" id="btn' + idllave + '" class="btn btn-primary" onclick="seleccionarpersona(' + objetoserializadocomillas + ')" /></td></tr>';

                    //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';

                }
            }
            else {

            }


            $("#infodepersonacarga").remove();
            $('#' + idllave).DataTable();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodepersonacarga").remove();
            alert(xhr);
        }

    });
}

function cargarpersonasparaseleccionaremisor(controldemastraravance, idllave) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las personas', 'Se esta cargando el listado de las personas', 'infodepersonacarga');
    document.getElementById(idllave).innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Persona',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            // alert(data[0]);
            console.log(data, "Emisores")
            if (data.length > 0) {

                document.getElementById(idllave).innerHTML += '<thead id="listadocabeza"><tr id="filalistadocabeza' + idllave + '"></tr></thead>';

                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Numero de identificación</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre comercial</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Ubicación </th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Teléfono</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Fax</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Correo</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Identificación de extranjero</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Seleccionar</th>';


                document.getElementById(idllave).innerHTML += '<tbody id="listadocuerpo' + idllave + '"></tbody>';


                //document.getElementById("listado").innerHTML += '';
                for (var indice in data) {
                    var objetoserializado = JSON.stringify(data[indice]);
                    var objetoserializadocomillas = "";
                    for (var caracter in objetoserializado) {

                        objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");


                    }


                    document.getElementById("listadocuerpo" + idllave).innerHTML += '<tr><td>' + data[indice].Nombre1 + '</td><td>' + data[indice].Identificacion1.Identificacion1 + '</td><td>' + data[indice].Nombrecomercial1 + '</td><td>' + data[indice].Idubicacion1.Provincia1 + ' ' + data[indice].Idubicacion1.Canton1 + ' ' + data[indice].Idubicacion1.Distrito1 + '</td><td>' + data[indice].Numtelefono1.NumTelefono1 + '</td><td>' + data[indice].Numfax1.NumFax1 + '</td><td>' + data[indice].Correoelectronico1 + '</td><td>' + data[indice].Identificacionextranjero1 + '</td><td><input type="button" value="Seleccionar" id="btn' + idllave + '" class="btn btn-primary" onclick="seleccionarpersonaemisor(' + objetoserializadocomillas + ')" /></td></tr>';

                    //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';

                }
            }
            $("#infodepersonacarga").remove();
            $('#' + idllave).DataTable();
        }
        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodepersonacarga").remove();
            alert(xhr);
        }

    });
}
function cargarpersonasparaseleccionarreceptor(controldemastraravance, idllave) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las personas', 'Se esta cargando el listado de las personas', 'infodepersonacarga');
    document.getElementById(idllave).innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Persona',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (data, textStatus, xhr) {
            // alert(data[0]);
            console.log(data, "Receptores")
            if (data.length > 0) {

                document.getElementById(idllave).innerHTML += '<thead id="listadocabeza"><tr id="filalistadocabeza' + idllave + '"></tr></thead>';

                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Numero de identificación</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Nombre comercial</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Ubicación </th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Teléfono</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Fax</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Correo</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Identificación de extranjero</th>';
                document.getElementById("filalistadocabeza" + idllave).innerHTML += '<th scope="col">Seleccionar</th>';


                document.getElementById(idllave).innerHTML += '<tbody id="listadocuerpo' + idllave + '"></tbody>';


                //document.getElementById("listado").innerHTML += '';
                for (var indice in data) {
                    var objetoserializado = JSON.stringify(data[indice]);
                    var objetoserializadocomillas = "";
                    for (var caracter in objetoserializado) {

                        objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");


                    }


                    document.getElementById("listadocuerpo" + idllave).innerHTML += '<tr><td>' + data[indice].Nombre1 + '</td><td>' + data[indice].Identificacion1.Identificacion1 + '</td><td>' + data[indice].Nombrecomercial1 + '</td><td>' + data[indice].Idubicacion1.Provincia1 + ' ' + data[indice].Idubicacion1.Canton1 + ' ' + data[indice].Idubicacion1.Distrito1 + '</td><td>' + data[indice].Numtelefono1.NumTelefono1 + '</td><td>' + data[indice].Numfax1.NumFax1 + '</td><td>' + data[indice].Correoelectronico1 + '</td><td>' + data[indice].Identificacionextranjero1 + '</td><td><input type="button" value="Seleccionar" id="btn' + idllave + '" class="btn btn-primary" onclick="seleccionarpersonareceptor(' + objetoserializadocomillas + ')" /></td></tr>';

                    //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';

                }
            }
            else {

            }


            $("#infodepersonacarga").remove();
            $('#' + idllave).DataTable();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodepersonacarga").remove();
            alert(xhr);
        }

    });
}

function seleccionarpersonaemisor(objeto) {

    document.getElementById("infoemisorsel").innerHTML = "Seleccione el emisor Emisor seleccionado actual: " + objeto.Nombre1;
    $('.collapseExample').collapse('hide');

    Factura.Emisorpersona = objeto.Identificacion1.Identificacion1;


}
function seleccionarpersonareceptor(objeto) {

    document.getElementById("inforeceptorsel").innerHTML = "Seleccione el receptor Receptor seleccionado actual: " + objeto.Nombre1;

    $('.collapseExample2').collapse('hide');
    Factura.Receptorpersona = objeto.Identificacion1.Identificacion1;
}

//////////////////////// Tabla linea detalle ////////////////////////////////////////////////////////////////////////////////////////////////

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

function guardarlineadetalle(controldemastraravance) {//revisar
    controldemastraravance.innerHTML += creadortarjetadecarga('Guardando linea detalle', 'Se esta guardando la información correspondiente a la linea detalle código: ' + LineaDetalle.Consecutivo, 'infodelineadetalleguarda' + LineaDetalle.Consecutivo);
    LineaDetalle.listaLineadetalle_impuesto_exoneracion = JSON.stringify(LineaDetalle.listaLineadetalle_impuesto_exoneracion);
    $.ajax({
        url: urlaconectarse + 'Lineadetalle',
        type: 'PUT',
        dataType: 'json',
        data: LineaDetalle,
        success: function (data, textStatus, xhr) {
            alert(data[0]);

            $("#infodelineadetalleguarda" + data[1]).remove();
            location.href = 'FE_LineaDetalle.html';
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodelineadetalleguarda" + data[1]).remove();
            alert(xhr);
        }

    });

}

function cargarlineasdetalle(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las lineas de detalle', 'Se esta cargando el listado de lineas de detalle', 'infodelineasdedetallecarga');
    document.getElementById("listalinea").innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Lineadetalle',
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

                    document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Consecutivo1 + '</td><td>' + data[indice].Numlinea1 + '</td><td>' + data[indice].Partidaarancelaria1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigocomercial1.Tipo1 + ' ' + data[indice].Codigocomercial1.Codigo1 + '</td><td>' + data[indice].Cantidad1 + '</td><td>' + data[indice].Unidadmedida1 + '</td><td>' + data[indice].Unidadmedidacomercial1 + '</td><td>' + data[indice].Detalle1 + '</td><td>' + data[indice].Preciounitario1 + '</td><td>' + data[indice].Montototal1 + '</td><td>' + data[indice].Montodescuento1.NaturalezaDescuento1 + ' ' + data[indice].Montodescuento1.MontoDescuento1 + '</td><td>' + data[indice].Subtotal1 + '</td><td>' + data[indice].Baseimponible1 + '</td><td>' + data[indice].Impuestoneto1 + '</td><td>' + data[indice].Montototallinea1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + objetoserializadocomillas + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Consecutivo1 + ')" /></td></tr>';

                    //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';

                }
            }
            else {

            }


            $("#infodelineasdedetallecarga").remove();
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodelineasdedetallecarga").remove();
            alert(xhr);
        }

    });
}

function eliminarlineadetalle(Linea, controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga("Eliminando linea detalle", "Se esta eliminando la información relacionada a linea detalle  #" + LineaDetalle.Consecutivo, "iinfodelineadetalleelimina" + LineaDetalle.Consecutivo);
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

function cargarlineasdetalleparaseleccionar(controldemastraravance, idtabla) {
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

//////////////////////// Tabla Factura1 ////////////////////////////////////////////////////////////////////////////////////////////////
var Factura = new Object();
Factura.Codigoactividad = "";
Factura.Clave = "";
Factura.Numeroconsecutivo = "";
Factura.Fechaemision = "";
Factura.Emisorpersona = "";
Factura.Receptorpersona = "";
Factura.Condicionventa = "";
Factura.Plazocredito = "";
Factura.Mediopago = "";
Factura.lineasdetalledelafactura = [];

function agregarlineadetallealafactura(objeto) {


    Factura.lineasdetalledelafactura.push(objeto);
    rellenatabladelineasdetallesseleccionados();


}
function rellenatabladelineasdetallesseleccionados() {

    document.getElementById("lineasdetalleagregados").innerHTML = "";

    document.getElementById("lineasdetalleagregados").innerHTML += '<thead id="listadocabezalineasdetalleagregados"><tr id="filalistadocabezalineasdetalleagregados"></tr></thead>';

    document.getElementById("filalistadocabezalineasdetalleagregados").innerHTML += '<th scope="col">Consecutivo</th>';
    document.getElementById("filalistadocabezalineasdetalleagregados").innerHTML += '<th scope="col">Cantidad</th>';
    document.getElementById("filalistadocabezalineasdetalleagregados").innerHTML += '<th scope="col">Detalle</th>';
    document.getElementById("filalistadocabezalineasdetalleagregados").innerHTML += '<th scope="col">Monto total</th>';

    document.getElementById("filalistadocabezalineasdetalleagregados").innerHTML += '<th scope="col">Eiminar</th>';

    document.getElementById("lineasdetalleagregados").innerHTML += '<tbody id="listadocuerpolineasdetalleagregado"></tbody>';

    var data = Factura.lineasdetalledelafactura;
    for (var indice in data) {

        document.getElementById("listadocuerpolineasdetalleagregado").innerHTML += '<tr><td>' + data[indice].Consecutivo1 + '</td><td>' + data[indice].Cantidad1 + '</td><td>' + data[indice].Detalle1 + '</td><td>' + data[indice].Montototallinea1 + '</td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="paraeliminarunalineadetalle(' + data[indice].Consecutivo1 + ')" /></td></tr>';
    }
    $('#lineasdetalleagregados').DataTable({
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]]
    });
}

function GuardarFactura(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Guardando la factura', 'Se esta guardando la información correspondiente a la factura clave: ' + Factura.Clave, 'infodefacturaguarda' + Factura.Clave);
    Factura.lineasdetalledelafactura = JSON.stringify(Factura.lineasdetalledelafactura);


    $.ajax({
        url: urlaconectarse + 'Factura',
        type: 'PUT',
        dataType: 'json',
        data: Factura,
        success: function (data, textStatus, xhr) {
            alert(data[0]);

            $("#infodefacturaguarda" + data[1]).remove();
            location.href = 'Fe_Index.html';
        }


        ,
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr);
            $("#infodefacturaguarda" + data[1]).remove();
        }

    });
}

function cargarfacturas(controldemastraravance) {
    controldemastraravance.innerHTML += creadortarjetadecarga('Cargando las facturas', 'Se esta cargando el listado de facturas', 'infodefacturascarga');
    document.getElementById("listado").innerHTML = "";
    $.ajax({
        url: urlaconectarse + 'Factura',
        type: 'GET',
        dataType: 'json',
        data: Factura,
        success: function (data, textStatus, xhr) {
            console.log(data, "Facturas")
            if (data.length > 0) {

                document.getElementById("listado").innerHTML += '<thead id="listadocabeza" class="thead bg-primary text-white"><tr id="filalistadocabeza"></tr></thead>';

                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Clave</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Numero de consecutivo</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Código de actividad</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Fecha de emisión</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Emisor</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Receptor</th>';

                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Condición de venta</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Plazo del cerdito</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Medio de pago</th>';

                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para modificar</th>';
                document.getElementById("filalistadocabeza").innerHTML += '<th scope="col">Para eliminar</th>';

                document.getElementById("listado").innerHTML += '<tbody id="listadocuerpo"></tbody>';

                for (var indice in data) {
                    var objetoserializado = JSON.stringify(data[indice]);
                    var objetoserializadocomillas = "";
                    for (var caracter in objetoserializado) {

                        objetoserializadocomillas += objetoserializado[caracter].replace('"', "'");
                    }
                    document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Clave1 + '</td><td>' + data[indice].Numeroconsecutivo1 + '</td><td>' + data[indice].Codigoactividad1 + '</td><td>' + data[indice].Fechaemision1 + '</td><td>' + data[indice].Identificacionemisor1.Nombre1 + '</td><td>' + data[indice].Identificacionreceptor1.Nombre1 + '</td><td>' + data[indice].Condicionventa1 + '</td><td>' + data[indice].Plazocredito1 + '</td><td>' + data[indice].Mediopago1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + objetoserializadocomillas + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Clave1 + ')" /></td></tr>';

                    //   document.getElementById("listadocuerpo").innerHTML += '<tr><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Codigotarifa1 + '</td><td>' + data[indice].Tarifa1 + '</td><td>' + data[indice].Codigo1 + '</td><td>' + data[indice].Monto1 + '</td><td>' + data[indice].Montoexportacion1 + '</td><td><input type="button" value="Modificar" id="btnmodificar" class="btn btn-primary" onclick="cargardatosenelformulario(' + data[indice] + ')" /></td><td><input type="button" value="Eliminar" id="btnelimina" class="btn btn-primary" onclick="verificareliminar(' + data[indice].Codigo1 + ')" /></td></tr>';


                }

                $("#infodefacturascarga").remove();
            } else {


                $("#infodefacturascarga").remove();
            }
        }

        ,
        error: function (xhr, textStatus, errorThrown) {
            $("#infodefacturascarga").remove();
            alert(xhr);
        }

    });
}