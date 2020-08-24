const ruta = "https://localhost:44314/api/";
var i = 0;
function eliminaValores() {
    var x = document.getElementById("formContainer").querySelectorAll(".form-control");
    for (var i = 0; i < x.length; i++) {
        x[i].value = "";
    }
}
function mover() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        elem.style.visibility = "visible"
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
                                mover();
                                eliminaValores();
                                setTimeout(function () { alert(data[0]); }, 1500);
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
                            mover();
                            eliminaValores();
                            setTimeout(function () { alert(data[0]); }, 1500);
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
                                mover();
                                eliminaValores();
                                setTimeout(function () { alert(data[0]); }, 1500);
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
                        mover();
                        eliminaValores();
                        setTimeout(function () { alert(data[0]); }, 1500);
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
                    mover();
                    eliminaValores();
                    setTimeout(function () { alert(data[0]); }, 1500);
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
            url: ruta + "Exoneracion",
            type: 'PUT',
            dataType: 'json',
            data: Exoneracion,
            success: function (data, textStatus, xhr) {
                alert(data[0]);
                eliminaValores();
                console.log(Exoneracion);
            },
            error: function (xhr, textStatus, erroThrown) {

                alert(xhr);
            }
        })
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
    var Fax = new Object;
    Fax.numFax = "";
    Fax.codigoPais = "";
    function guardarFax(Fax) {
        $.ajax({
            url: ruta + "Fax",
            type: 'PUT',
            dataType: 'json',
            data: Fax,
            success: function (data, textStatus, xhr) {
                mover();
                eliminaValores();
                setTimeout(function () { alert(data[0]); }, 1500);
               
            },
            error: function (xhr, textStatus, erroThrown) {

                alert(xhr);
            }
        })
    }
    function eliminarFax(Fax) {
        $.ajax({
            url: ruta + "Fax",
            type: 'DELETE',
            dataType: 'json',
            data: Fax,
            success: function (data, textStatus, xhr) {
                mover();
                eliminaValores();
                setTimeout(function () { alert(data[0]); }, 1500);

            },
            error: function (xhr, textStatus, erroThrown) {
                alert(xhr);
            }
        })
    }
    function modificarFax(Fax) {
    $.ajax({
        url: ruta + "Fax",
        type: 'POST',
        dataType: 'json',
        data: Fax,
        success: function (data, textStatus, xhr) {
            mover();
            eliminaValores();
            setTimeout(function () { alert(data[0]); }, 1500);
        },
        error: function (xhr, textStatus, erroThrown) {
            alert(xhr);
        }
    })
}
/////////////////////////////////////////////////////////////////////////////////////////