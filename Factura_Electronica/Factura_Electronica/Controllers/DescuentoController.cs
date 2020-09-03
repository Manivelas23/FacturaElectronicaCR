using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Formatting;
using Factura_Electronica.Models;

namespace Factura_Electronica.Controllers
{
    public class DescuentoController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            Descuento descuento = new Descuento();

            HttpResponseMessage response = Request.CreateResponse<List<Models.Descuento>> (HttpStatusCode.Created, descuento.Seleccionar_Todo_Descuento());
            return response;
        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {
            Descuento descuento = new Descuento();

            descuento.MontoDescuento1 = Convert.ToInt32(form.Get("montoDescuento"));
            descuento.NaturalezaDescuento1 = form.Get("naturalezaDescuento");

            string[] respuesta = new string[2];
            respuesta[0] = descuento.Inserta_descuento();
            respuesta[1] = form.Get("MontoDescuento1");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection form)
        {
            Descuento descuento = new Descuento();

            descuento.MontoDescuento1 = Convert.ToDecimal(form.Get("montoDescuento"));
            descuento.NaturalezaDescuento1 = form.Get("naturalezaDescuento");

            string[] respuesta = new string[2];
            respuesta[0] = descuento.Elimina_descuento();
            respuesta[1] = form.Get("MontoDescuento1");
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;
        }
    }
}
