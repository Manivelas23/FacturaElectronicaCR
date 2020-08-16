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
                                alert(data[0]); ///'sirve el ajax'
                                console.log(Ubicacion);
                                Progreso.innerHTML += `<span id='InfoUbicacionGuarda' Guardar Ubicación: ${Ubicacion.IdUbicacion}/> 
                                                         <br> 
                                                        <img src='../Views/img/guardar.gif' /> `; 
                               /// $('#InfoUbicacionGuarda').remove();
                            },
                            error: function (xhr, textStatus, erroThrown) {
                                alert(xhr);
                            }
                        })
                    }
  /* function eliminarUbicacion(Ubicacion, Progreso) {
                    progreso.innerHTML += `<span id='InfoUbicacionElimina' Guardar Ubicación: ${Ubicacion.IdUbicacion}/> 
                                                         <br> 
                                                        <img src='../Views/img/guardar.gif' /> `;
                    $.ajax({
                        url: ruta + "Ubicacion",
                        type: 'DELETE',
                        dataType: 'json',
                        data: Ubicacion,
                        success: function (data, textStatus, xhr) {
                            alert(data[0])
                            $('#InfoUbicacionElimina' + data[1]).remove()
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