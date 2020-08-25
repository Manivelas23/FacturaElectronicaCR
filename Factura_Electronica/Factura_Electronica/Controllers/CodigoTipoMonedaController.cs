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
    public class CodigoTipoMonedaController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            CodigoTipoMoneda codigoTipoMoneda = new CodigoTipoMoneda();

            codigoTipoMoneda.CodigoMoneda1 = form.Get("codigoMoneda");
            codigoTipoMoneda.TipoCambio1 = Convert.ToDecimal(form.Get("tipoCambio"));
     
            string[] respuesta = new string[2];
            respuesta[0] = codigoTipoMoneda.Actualiza_CodigoTipoMoneda();
            respuesta[1] = form.Get("CodigoMoneda1");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            CodigoTipoMoneda codigoTipoMoneda = new CodigoTipoMoneda();

            codigoTipoMoneda.CodigoMoneda1 = form.Get("codigoMoneda");
            codigoTipoMoneda.TipoCambio1 = Convert.ToDecimal(form.Get("tipoCambio"));

            string[] respuesta = new string[2];
            respuesta[0] = codigoTipoMoneda.Inserta_CodigoTipoMoneda();
            respuesta[1] = form.Get("CodigoMoneda1");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            CodigoTipoMoneda codigoTipoMoneda = new CodigoTipoMoneda();

            codigoTipoMoneda.CodigoMoneda1 = form.Get("codigoMoneda");
         
            string[] respuesta = new string[2];
            respuesta[0] = codigoTipoMoneda.Elimina_CodigoTipoMoneda();
            respuesta[1] = form.Get("CodigoMoneda1");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
    }
}
