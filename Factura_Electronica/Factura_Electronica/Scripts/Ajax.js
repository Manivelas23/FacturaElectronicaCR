const ruta = "https://localhost:44314/api/";
function eliminaValores() {
    var x = document.getElementById("formContainer").querySelectorAll(".x");
    var i;
    for (i = 0; i < x.length; i++) {
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
   function guardarUbicacion(Ubicacion) {
                        $.ajax({
                            url: ruta + "Ubicacion",  
                            type: 'PUT',
                            dataType: 'json',
                            data:Ubicacion,
                            success: function (data, textStatus, xhr) {
                                alert(data[0]);
                                eliminaValores();
                            },
                            error: function (xhr, textStatus, erroThrown) {
                       
                                alert(xhr);
                            }
                        })
                    }
   function eliminarUbicacion(Ubicacion) {
                    $.ajax({
                        url: ruta + "Ubicacion",
                        type: 'DELETE',
                        dataType: 'json',
                        data: Ubicacion,
                        success: function (data, textStatus, xhr) {
                            alert(data[0]);
                            eliminaValores();
                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(xhr);
                        }
                    })
}
   function modificarUbicacion(Ubicacion){
                        $.ajax({
                            url: ruta + "Ubicacion",
                            type: 'POST',
                            dataType: 'json',
                            data: Ubicacion,
                            success: function (data, textStatus, xhr) {
                                alert(data[0]);
                                eliminaValores();
                            },
                            error: function (xhr, textStatus, erroThrown) {
                                alert(xhr);
                            }
                        })
}
/////////////////////////////////////////////////////////////////////////////////////////
    var Descuento = new Object;
    Descuento.montoDescuento = "";
    Descuento.naturalezaDescuento = "";
    function guardarDescuento(Descuento) {
                $.ajax({
                    url: ruta + 'Descuento',
                    type: 'PUT',
                    dataType: 'json',
                    data: Descuento,
                    success: function (data, textStatus, xhr) {
                        alert(data[0]);
                        eliminaValores();
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        alert(xhr);
                    }

                });
            }
    function eliminarDescuento(Descuento) {
            $.ajax({
                url: ruta + 'Descuento',
                type: 'DELETE',
                dataType: 'json',
                data: Descuento,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    eliminaValores();
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
        }
//////////////////////////////////////////////////////////////////////////////////////////
    var Exoneracion = new Object;
    Exoneracion.tipoDocumento = "";
    Exoneracion.numeroDocumento = "";
    Exoneracion.nombreInstitucion = "";
    Exoneracion.fechaEmision = "";
    Exoneracion.porcentajeExoneracion = "";
    Exoneracion.montoExoneracion = "";
    function guardarExoneracion(Exoneracion) {
            $.ajax({
                url: ruta + 'Exoneracion',
                type: 'PUT',
                dataType: 'json',
                data: Exoneracion,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    eliminaValores();
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
        }
    function eliminarExoneracion(Exoneracion) {
            $.ajax({
                url: ruta + 'Descuento',
                type: 'DELETE',
                dataType: 'json',
                data: Exoneracion,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    eliminaValores();
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
        }
    function actualizarExoneracion(Exoneracion) {
            $.ajax({
                url: ruta + 'Descuento',
                type: 'POST',
                dataType: 'json',
                data: Exoneracion,
                success: function (data, textStatus, xhr) {
                    alert(data[0]);
                    eliminaValores();
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert(xhr);
                }

            });
}
///////////////////////////////////////////////////////////////////////////////////////////