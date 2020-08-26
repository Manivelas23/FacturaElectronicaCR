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
    public class CodigoComercialController : ApiController
    {
        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
          CodigoComercial codigoComercial = new CodigoComercial();

          codigoComercial.Tipo1 = form.Get("tipo");
          codigoComercial.Codigo1 = form.Get("codigo");

            string[] respuesta = new string[2];
            respuesta[0] = codigoComercial.Inserta_CodigoComercial();
            respuesta[1] = form.Get("tipo");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
         CodigoComercial codigoComercial = new CodigoComercial();

        codigoComercial.Tipo1 = form.Get("tipo");
        codigoComercial.Codigo1 = form.Get("codigo");

        string[] respuesta = new string[2];
        respuesta[0] = codigoComercial.Elimina_CodigoComercial();
        respuesta[1] = form.Get("tipo");
        HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
    }
}
