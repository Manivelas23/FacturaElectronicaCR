using FECR.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using Factura_Electronica.Models;
using FECR.Controllers;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace Factura_Electronica.Controllers
{
    public class FacturaController : ApiController
    {



        public class lineadetallelocal
        {
            [JsonProperty("Consecutivo1")]
            public String Consecutivo1;


        }


        [HttpPut]
        public HttpResponseMessage Put(FormDataCollection form)
        {

            Models.Factura1 factura = new Models.Factura1();
            Models.DetalleServicio detalleServicio = new Models.DetalleServicio();

            factura.Clave1 = form.Get("Clave");

            factura.Codigoactividad1 = form.Get("Codigoactividad");
            factura.Condicionventa1 = form.Get("Condicionventa");
            factura.Fechaemision1 = Convert.ToDateTime(form.Get("Fechaemision"));
            factura.Mediopago1 = form.Get("Mediopago");
            factura.Plazocredito1 = form.Get("Plazocredito");
            factura.Numeroconsecutivo1 = form.Get("Numeroconsecutivo");

            Persona persona = new Persona();
            IdentificacionPersona identificacion = new IdentificacionPersona();
            identificacion.identificacionPersona1 = form.Get("Emisorpersona");
            persona.identificacionPersona = identificacion;
            factura.Identificacionemisor1 = persona;

            Persona persona2 = new Persona();
            IdentificacionPersona identificacion2 = new IdentificacionPersona();
            identificacion2.identificacionPersona1 = form.Get("Receptorpersona");
            persona2.identificacionPersona = identificacion2;
            factura.Identificacionreceptor1 = persona2;

            var msgadevolver = factura.Inserta_Factura();

            DetalleServicio detalleServicio1 = new DetalleServicio();
            detalleServicio1.Clave1 = factura;


            JArray jObject = JArray.Parse(form.Get("lineasdetalledelafactura"));
            JToken jUser3 = jObject;
            var lista = jUser3.ToObject<List<lineadetallelocal>>();
            List<LineaDetalle> listalineadetalleobj = new List<LineaDetalle>();
            foreach (lineadetallelocal item in lista)
            {
                LineaDetalle lineaDetalle = new LineaDetalle();
                lineaDetalle.Consecutivo1 = Convert.ToInt32(item.Consecutivo1);
                listalineadetalleobj.Add(lineaDetalle);
            }
            detalleServicio1.Lineasdetalledelafactura = listalineadetalleobj;

            detalleServicio1.insertar_detalleservicio_en_BD();

            string[] respuesta = new string[2];
            respuesta[0] = msgadevolver;
            respuesta[1] = form.Get("Clave");

            HttpResponseMessage response = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return response;


        }


        [HttpGet]
        public HttpResponseMessage Get()
        {

            Factura1 factura = new Factura1();

            HttpResponseMessage response = Request.CreateResponse<List<Models.Factura1>>(HttpStatusCode.Created, factura.seleccionar_todas_las_facturas());
            return response;


        }


    }
}
