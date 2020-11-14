using Factura_Electronica.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace FECR.Controllers
{
    public class LineadetalleController : ApiController
    {
        public class Lineadetalle_impuesto_exoneracionlocal
        {
            [JsonProperty("Lineadetalleconsecutivo")]
            public String Lineadetalleconsecutivo;
            [JsonProperty("Impuestocodigo")]
            public String Impuestocodigo;
            [JsonProperty("Tipodocumento")]
            public String Tipodocumento;
            [JsonProperty("Numerodocumento")]
            public String Numerodocumento;

        }

        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {


            Models.LineaDetalle _lineaDetalle = new Models.LineaDetalle();

            _lineaDetalle.Numlinea1 = Convert.ToInt32(form.Get("Numerolinea"));
            _lineaDetalle.Partidaarancelaria1 = form.Get("Partidaarancelaria");
            _lineaDetalle.Codigo1 = form.Get("Codigo");
            _lineaDetalle.Cantidad1 = Convert.ToDecimal(form.Get("Cantidad").Replace('.', ','));
            _lineaDetalle.Unidadmedida1 = form.Get("Unidadmedida");
            _lineaDetalle.Unidadmedidacomercial1 = form.Get("Unidadmedidacomercial");
            _lineaDetalle.Detalle1 = form.Get("Detalle");
            _lineaDetalle.Preciounitario1 = Convert.ToDecimal(form.Get("Preciounitario").Replace('.', ','));
            _lineaDetalle.Montototal1 = Convert.ToDecimal(form.Get("Montototal").Replace('.', ','));
            _lineaDetalle.Subtotal1 = Convert.ToDecimal(form.Get("Subtotal").Replace('.', ','));
            _lineaDetalle.Baseimponible1 = Convert.ToDecimal(form.Get("Baseimponible").Replace('.', ','));
            _lineaDetalle.Impuestoneto1 = Convert.ToDecimal(form.Get("Impuestoneto").Replace('.', ','));
            _lineaDetalle.Montototallinea1 = Convert.ToDecimal(form.Get("Montototallinea").Replace('.', ','));
            _lineaDetalle.Consecutivo1 = Convert.ToInt32(form.Get("Consecutivo"));

            CodigoComercial codigoComercial = new CodigoComercial();
            codigoComercial.Tipo1 = form.Get("Codigocomercialtipo").ToString();
            codigoComercial.Codigo1 = form.Get("Codigocomercialcodigo").ToString();
            _lineaDetalle.Codigocomercial1 = codigoComercial;


            Descuento descuento = new Descuento();
            descuento.MontoDescuento1 = Convert.ToDecimal(form.Get("Descuentomonto").Replace('.', ','));
            descuento.NaturalezaDescuento1 = form.Get("Descuentonaturaleza");
            _lineaDetalle.objetoDescuento = descuento;



            JArray jObject = JArray.Parse(form.Get("listaLineadetalle_impuesto_exoneracion"));
            JToken jUser = jObject;
            var lista = jUser.ToObject<List<Lineadetalle_impuesto_exoneracionlocal>>();

            List<Models.Lineadetalle_Impuesto_Exoneracion> lineadetalle_Impuesto_s = new List<Models.Lineadetalle_Impuesto_Exoneracion>();
            foreach (var item in lista)
            {

                Impuesto impuesto = new Impuesto();
                impuesto.CodigoImpuesto1 = item.Impuestocodigo;

                Exoneracion exoneracion = new Exoneracion();
                exoneracion.TipoDocumento1 = item.Tipodocumento;
                exoneracion.NumeroDocumento1 = item.Numerodocumento;

                Models.Lineadetalle_Impuesto_Exoneracion lineadetalle_Impuesto_Exoneracion = new Models.Lineadetalle_Impuesto_Exoneracion();

                lineadetalle_Impuesto_Exoneracion.Numerodocumento1 = exoneracion;
                lineadetalle_Impuesto_Exoneracion.Tipodocumento1 = exoneracion;
                lineadetalle_Impuesto_Exoneracion.Impuestocodigo1 = impuesto;
                lineadetalle_Impuesto_s.Add(lineadetalle_Impuesto_Exoneracion);

            }
            _lineaDetalle.Lista_lineadetalleImpuestoExoneracion1 = lineadetalle_Impuesto_s;
            string[] respuesta = new string[2];
            respuesta[0] = _lineaDetalle.Inserta_Lineadetalle();
            respuesta[1] = form.Get("Consecutivo");

            HttpResponseMessage response = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return response;


        }

        [HttpDelete]
        public HttpResponseMessage Delete(FormDataCollection forms)
        {
            Models.LineaDetalle _linea = new Models.LineaDetalle();


            _linea.Consecutivo1 = Convert.ToInt32(forms.Get("Consecutivo"));

            string[] respuesta = new string[2];
            respuesta[0] = _linea.Elimina_Lineadetalle();
            respuesta[1] = forms.Get("Consecutivo");

            HttpResponseMessage response = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return response;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {

            Models.LineaDetalle _lineaDetalle = new Models.LineaDetalle();

            HttpResponseMessage response = Request.CreateResponse<List<Models.LineaDetalle>>(HttpStatusCode.Created, _lineaDetalle.todaslaslineasdetalle());
            return response;


        }

    }
}
