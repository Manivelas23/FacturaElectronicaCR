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
    public class TelefonoController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            Telefono telefono = new Telefono();
            HttpResponseMessage response = Request.CreateResponse<List<Models.Telefono>>(HttpStatusCode.Created, telefono.Seleccionar_Todo_Telefono());
            return response;
        }
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            Telefono tel = new Telefono(); 
            tel.NumTelefono1 = Convert.ToInt32(form.Get("numTelefono"));
            tel.CodigoPais1 = Convert.ToInt32(form.Get("codigoPais"));

            string[] respuesta = new string[2];
            respuesta[0] = tel.Actualiza_telefono();
            respuesta[1] = form.Get("numTelefono");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            Telefono tel = new Telefono();
            tel.NumTelefono1 = Convert.ToInt32(form.Get("numTelefono"));
            tel.CodigoPais1 = Convert.ToInt32(form.Get("codigoPais"));

            string[] respuesta = new string[2];
            respuesta[0] = tel.Inserta_telefono();
            respuesta[1] = form.Get("numTelefono");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Telefono tel = new Telefono();
            tel.NumTelefono1 = Convert.ToInt32(form.Get("numTelefono"));

            string[] respuesta = new string[2];
            respuesta[0] = tel.Elimina_telefono();
            respuesta[1] = form.Get("numTelefono");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}


