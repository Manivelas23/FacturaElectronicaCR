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
            IdentificacionPersona idPersona = new IdentificacionPersona();
            Telefono telefono = new Telefono();
            Fax fax = new Fax();
            Ubicacion ubicacion = new Ubicacion();

            persona.Nombre1 = form.Get("nombre");

            idPersona.identificacionPersona1 = form.Get("idPersona").ToString();
            persona.identificacionPersona = idPersona;

            telefono.NumTelefono1 = Convert.ToInt32(form.Get("numTelefono").ToString());
            persona.ObjTelefono1 = telefono;

            fax.NumFax1 = Convert.ToInt32(form.Get("numFax").ToString());
            persona.ObjFax1 = fax;

            ubicacion.IdUbicacion1 = Convert.ToInt32(form.Get("idUbicacion").ToString());
            persona.ObjUbicacion = ubicacion;

            persona.NombreComercial1 = form.Get("nombreComercial").ToString();
            persona.CorreoElectronico1 = form.Get("correoElectronico").ToString();
            persona.IdentificacionExtranjero1 = form.Get("idExtranjero").ToString();
            persona.OtrasSenasExtranjero1 = form.Get("otrasSenasExtranjero").ToString();
    

            string[] respuesta = new string[2];
            respuesta[0] = persona.setPersona();
            respuesta[1] = form.Get("idPersona").ToString();
            HttpResponseMessage res = Request.CreateResponse<string[]>(HttpStatusCode.Created, respuesta);
            return res;

        }

        [HttpGet]
        public HttpResponseMessage Get([FromUri] String id)
        {
            Persona persona = new Persona();
            IdentificacionPersona idPersona = new IdentificacionPersona();

            idPersona.identificacionPersona1 = id;
            persona.identificacionPersona = idPersona;
            HttpResponseMessage res = Request.CreateResponse<Models.Persona>(HttpStatusCode.Created, persona.getPersonaById());
            return res;
        }

    }
}