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
    public class TipoDocumentoController : ApiController
    {
        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            TipoDocumento tipoDocumento = new TipoDocumento();

            tipoDocumento.Tipodocumento1 = form.Get("tipoDocumento");
            tipoDocumento.NumeroIdentidadTercero1 = form.Get("numeroIdentidadTercero");

            string[] respuesta = new string[2];
            respuesta[0] = tipoDocumento.Inserta_TipoDocumento();
            respuesta[1] = form.Get("tipoDocumento");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            TipoDocumento tipoDocumento = new TipoDocumento();

            tipoDocumento.Tipodocumento1 = form.Get("tipoDocumento");

            string[] respuesta = new string[2];
            respuesta[0] = tipoDocumento.Elimina_TipoDocumento();
            respuesta[1] = form.Get("tipoDocumento");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
    }
}