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
    public class IdentificacionReceptorController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            IdentificacionReceptor idReceptor = new IdentificacionReceptor();
            HttpResponseMessage response = Request.CreateResponse<List<Models.IdentificacionReceptor>>(HttpStatusCode.Created, idReceptor.Seleccionar_Todo_IdentificacionReceptor());
            return response;
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            IdentificacionReceptor idReceptor = new IdentificacionReceptor();
            idReceptor.Identificacionreceptor1 = form.Get("identificacionReceptor");
            idReceptor.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = idReceptor.Actualiza_identificacionreceptor();
            respuesta[1] = form.Get("identificacionReceptor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            IdentificacionReceptor idReceptor = new IdentificacionReceptor();
            idReceptor.Identificacionreceptor1 = form.Get("identificacionReceptor");
            idReceptor.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = idReceptor.Inserta_identificacionreceptor();
            respuesta[1] = form.Get("identificacionReceptor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            IdentificacionReceptor idReceptor = new IdentificacionReceptor();
            idReceptor.Identificacionreceptor1 = form.Get("identificacionReceptor");

            string[] respuesta = new string[2];
            respuesta[0] = idReceptor.Elimina_identificacionreceptor();
            respuesta[1] = form.Get("identificacionReceptor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}
