var ruta = "https://localhost:44314/api/";

/////////////////////////////////////////////////////////////////////////////////////////

    var Ubicacion = new Object;
    Ubicacion.idUbicacion = "";
    Ubicacion.Provincia = "";
    Ubicacion.Canton = "";
    Ubicacion.Distrito = "";
    Ubicacion.Barrio = "";
    Ubicacion.otrasSenas = "";

   function guardarUbicacion(Ubicacion, Progreso) {
                        $.ajax({
                            url: ruta + "Ubicacion",  
                            type: 'PUT',
                            dataType: 'json',
                            data:Ubicacion,
                            success: function (data, textStatus, xhr) {
                                alert(data[0]);
                              /*  Progreso.innerHTML += `
                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                  <strong>$</strong>
                                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>`*/
                            },
                            error: function (xhr, textStatus, erroThrown) {
                               /*` <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Error</strong> 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`*/
                                alert(xhr);
                            }
                        })
                    }
  /* function eliminarUbicacion(Ubicacion, Progreso) {
                    $.ajax({
                        url: ruta + "Ubicacion",
                        type: 'DELETE',
                        dataType: 'json',
                        data: Ubicacion,
                        success: function (data, textStatus, xhr) {
                            alert(data[0])
                        },
                        error: function (xhr, textStatus, erroThrown) {
                            alert(err);
                        }
                    })
}
 function modificarUbicacion(sUbicacion, Progreso){
                        $.ajax({
                            url: ruta + "Ubicacion",
                            type: 'POST',
                            dataType: 'json',
                            data: Ubicacion,
                            success: function (data, textStatus, xhr) {
                                alert(data[0]);
                                Progreso.innerHTML += `<span id='InfoUbicacionModifica' Modificar Ubicación: ${Ubicacion.IdUbicacion}/> 
                                                         <br> 
                                                        <img src='../Views/img/guardar.gif' /> `;
                                $('#InfoUbicacionModifica' + data[1]).remove()
                            },
                            error: function (xhr, textStatus, erroThrown) {
                                alert(err);
                            }
                        })
}
*/
///////////////////////////////////////////////////////////////////////////////////////////