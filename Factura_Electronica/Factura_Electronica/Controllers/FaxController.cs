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
    public class FaxController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            Fax fax = new Fax();
            fax.NumFax1 = Convert.ToInt32(form.Get("numFax"));
            fax.CodigoPais1 = Convert.ToInt32(form.Get("codigoPais"));

            string[] respuesta = new string[2];
            respuesta[0] = fax.Actualiza_fax();
            respuesta[1] = form.Get("numFax");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            Fax fax = new Fax();
            fax.NumFax1 = Convert.ToInt32(form.Get("numFax"));
            fax.CodigoPais1 = Convert.ToInt32(form.Get("codigoPais"));

            string[] respuesta = new string[2];
            respuesta[0] = fax.Inserta_fax();
            respuesta[1] = form.Get("numFax");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Fax fax = new Fax();
            fax.NumFax1 = Convert.ToInt32(form.Get("numFax"));

            string[] respuesta = new string[2];
            respuesta[0] = fax.Elimina_fax();
            respuesta[1] = form.Get("numFax");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}

