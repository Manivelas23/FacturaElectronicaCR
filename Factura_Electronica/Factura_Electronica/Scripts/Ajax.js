var ruta = "https://localhost:44314/api/";

/////////////////////////////////////////////////////////////////////////////////////////
    var Ubicacion = new Object;
    Ubicacion.idUbicacion = "";
    Ubicacion.Provincia = "";
    Ubicacion.Canton = "";
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
                            },
                            error: function (xhr, textStatus, erroThrown) {
                                alert(xhr);
                            }
                        })
}














/*` <div class="alert alert-dan
 * 
 * ger alert-dismissible fade show" role="alert">
                            <strong>Error</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`*/