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
    public class IdentificacionPersonaController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            IdentificacionPersona IdPersona = new IdentificacionPersona();
            HttpResponseMessage response = Request.CreateResponse<List<Models.IdentificacionPersona>>(HttpStatusCode.Created, IdPersona.Seleccionar_Todo_IdentificacionPersona());
            return response;
        }
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            IdentificacionPersona IdPersona = new IdentificacionPersona();
            IdPersona.identificacionPersona1 = form.Get("identificacionPersona");
            IdPersona.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = IdPersona.Actualiza_IdentificacionPersona();
            respuesta[1] = form.Get("identificacionPersona");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            IdentificacionPersona IdPersona = new IdentificacionPersona();
            IdPersona.identificacionPersona1 = form.Get("identificacionPersona");
            IdPersona.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = IdPersona.Inserta_IdentificacionPersona();
            respuesta[1] = form.Get("identificacionPersona");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            IdentificacionPersona IdPersona = new IdentificacionPersona();
            IdPersona.identificacionPersona1 = form.Get("identificacionPersona");

            string[] respuesta = new string[2];
            respuesta[0] = IdPersona.Elimina_IdentificacionPersona();
            respuesta[1] = form.Get("identificacionPersona");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}
