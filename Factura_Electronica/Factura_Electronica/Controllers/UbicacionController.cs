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
            Ubicacion ubicacion = new Ubicacion();
            ubicacion.IdUbicacion1 = Convert.ToInt32(form.Get("idUbicacion"));
            ubicacion.Provincia1 = Convert.ToString(form.Get("Provincia"));
            ubicacion.Canton1 = Convert.ToString(form.Get("Canton"));
            ubicacion.Barrio1 = Convert.ToString(form.Get("Barrio"));
            ubicacion.Distrito1 = Convert.ToString(form.Get("Distrito"));
            ubicacion.OtrasSenas1 = Convert.ToString(form.Get("otrasSenas"));

            string[] respuesta = new string[2];
            respuesta[0] = ubicacion.Actualiza_ubicacion();
            respuesta[1] = form.Get("IdUbicacion");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
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
                string[] respuesta = new string[2];
                respuesta[0] = Ubicacion.Elimina_ubicacion();
                respuesta[1] = form.Get("IdUbicacion");

                HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
                return res;
       

        }
    }
}
