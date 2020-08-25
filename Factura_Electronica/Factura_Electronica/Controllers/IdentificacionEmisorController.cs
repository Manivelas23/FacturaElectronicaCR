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
    public class IdentificacionEmisorController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            IdentificacionEmisor idEmisor = new IdentificacionEmisor();
            idEmisor.Identificacionemisor1 = form.Get("identificacionEmisor");
            idEmisor.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = idEmisor.Actualiza_identificacionEmisor();
            respuesta[1] = form.Get("identificacionEmisor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            IdentificacionEmisor idEmisor = new IdentificacionEmisor();
            idEmisor.Identificacionemisor1 = form.Get("identificacionEmisor");
            idEmisor.Tipo1 = form.Get("tipo");

            string[] respuesta = new string[2];
            respuesta[0] = idEmisor.Inserta_identificacionEmisor();
            respuesta[1] = form.Get("identificacionEmisor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            IdentificacionEmisor idEmisor = new IdentificacionEmisor();

            idEmisor.Identificacionemisor1 = form.Get("identificacionEmisor");

            string[] respuesta = new string[2];
            respuesta[0] = idEmisor.Elimina_identificacionEmisor();
            respuesta[1] = form.Get("identificacionEmisor");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}
