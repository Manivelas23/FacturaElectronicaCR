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
    public class PersonaController : ApiController
    {
        [HttpPut]

        public HttpResponseMessage Put(FormDataCollection form)
        {
            Persona persona = new Persona();

            persona.Nombre1 = form.Get("nombre");
            persona.ObjIdPersona.identificacionPersona1 = form.Get("idPersona");
            persona.ObjTelefono.NumTelefono1 = Convert.ToInt32(form.Get("numTelefono"));
            persona.ObjFax.NumFax1 = Convert.ToInt32(form.Get("numFax"));
            persona.ObjUbicacion.IdUbicacion1 = Convert.ToInt32(form.Get("idUbicacion"));
            persona.NombreComercial1 = form.Get("nombreComercial");
            persona.CorreoElectronico1 = form.Get("correoElectronico");
            persona.IdentificacionExtranjero1 = form.Get("idExtranjero");
            persona.OtrasSenasExtranjero1 = form.Get("otrasSenasExtranjero");

            string[] respuesta = new string[2];
            respuesta[0] = 
            respuesta[1] = persona.setPersona();
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }
    }
}