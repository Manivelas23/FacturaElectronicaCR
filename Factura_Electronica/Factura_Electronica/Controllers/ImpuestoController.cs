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
    public class ImpuestoController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            Impuesto impuesto = new Impuesto();
            HttpResponseMessage response = Request.CreateResponse<List<Models.Impuesto>>(HttpStatusCode.Created, impuesto.Seleccionar_Todo_Impuesto());
            return response;
        }

        [HttpPost]
        public HttpResponseMessage Post(FormDataCollection form)
        {
            Impuesto impuesto = new Impuesto();
            impuesto.CodigoImpuesto1 = form.Get("codigoImpuesto");
            impuesto.CodigoTarifa1 = form.Get("codigoTarifa");
            impuesto.Tarifa1 = Convert.ToDecimal(form.Get("tarifa"));
            impuesto.Factor_Iva1 = Convert.ToDecimal(form.Get("factor_Iva"));
            impuesto.Monto1 = Convert.ToDecimal(form.Get("monto"));
            impuesto.MontoExportacion1 = Convert.ToDecimal(form.Get("montoExportacion"));

            string[] respuesta = new string[2];
            respuesta[0] = impuesto.Actualiza_Impuesto();
            respuesta[1] = form.Get("codigoImpuesto");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            Impuesto impuesto = new Impuesto();
            impuesto.CodigoImpuesto1 = form.Get("codigoImpuesto");
            impuesto.CodigoTarifa1 = form.Get("codigoTarifa");
            impuesto.Tarifa1 = Convert.ToDecimal(form.Get("tarifa"));
            impuesto.Factor_Iva1 = Convert.ToDecimal(form.Get("factor_Iva"));
            impuesto.Monto1 = Convert.ToDecimal(form.Get("monto"));
            impuesto.MontoExportacion1 = Convert.ToDecimal(form.Get("montoExportacion"));

            string[] respuesta = new string[2];
            respuesta[0] = impuesto.Inserta_Impuesto();
            respuesta[1] = form.Get("numFax");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Impuesto impuesto = new Impuesto();
            impuesto.CodigoImpuesto1 = form.Get("codigoImpuesto");

            string[] respuesta = new string[2];
            respuesta[0] = impuesto.Elimina_Impuesto();
            respuesta[1] = form.Get("codigoImpuesto");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}
