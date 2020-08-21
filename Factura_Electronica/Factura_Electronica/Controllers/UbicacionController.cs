using Factura_Electronica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace Factura_Electronica.Controllers
{
    public class UbicacionController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            Ubicacion Ubicacion = new Ubicacion();
            Ubicacion.IdUbicacion1 = Convert.ToInt32(form.Get("idUbicacion"));
            Ubicacion.Provincia1 = form.Get("Provincia");
            Ubicacion.Canton1 = form.Get("Canton");
            Ubicacion.Barrio1 = form.Get("Barrio");
            Ubicacion.Distrito1 = form.Get("Distrito");
            Ubicacion.OtrasSenas1 = Convert.ToString(form.Get("otrasSenas"));

            Ubicacion.Actualiza_ubicacion();

            string[] VectorRespuesta = new string[2];
            VectorRespuesta[0] = Ubicacion.Actualiza_ubicacion();
            VectorRespuesta[1] = form.Get("IdUbicacion");

            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, VectorRespuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form) 
        {
            Ubicacion ubicacion = new Ubicacion();

            ubicacion.IdUbicacion1 = Convert.ToInt32(form.Get("idUbicacion"));
            ubicacion.Provincia1 = Convert.ToString(form.Get("Provincia"));
            ubicacion.Canton1 = Convert.ToString(form.Get("Canton"));
            ubicacion.Barrio1 = Convert.ToString(form.Get("Barrio"));
            ubicacion.Distrito1 = Convert.ToString(form.Get("Distrito"));
            ubicacion.OtrasSenas1 = Convert.ToString(form.Get("otrasSenas"));

            ubicacion.Inserta_ubicacion();

            string[] respuesta = new string[2];
            respuesta[0] = ubicacion.Inserta_ubicacion();
            respuesta[1] = form.Get("idUbicacion");
            HttpResponseMessage response = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return response;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Ubicacion Ubicacion = new Ubicacion();

            Ubicacion.IdUbicacion1 = Convert.ToInt16(form.Get("IdUbicacion"));

            Ubicacion.Elimina_ubicacion();

            string[] respuesta = new string[2];
            respuesta[0] = Ubicacion.Elimina_ubicacion();
            respuesta[1] = form.Get("IdUbicacion");

            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
    }
}

/*
   Ubicacion ubicacion = new Ubicacion
            {
                IdUbicacion1 = Convert.ToInt16(form.Get("idUbicacion")),
                Provincia1 = form.Get("Provincia"),
                Canton1 = form.Get("Canton"),
                Barrio1 = form.Get("Barrio"),
                Distrito1 = form.Get("Distrito"),
                OtrasSenas1 = form.Get("otrasSenas")
            };
 */
