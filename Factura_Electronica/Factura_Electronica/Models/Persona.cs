using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Persona
    {
        public Persona(){}

        private string Nombre;
        private IdentificacionPersona objIdPersona;
        private Telefono objTelefono;
        private Fax objFax;
        private Ubicacion objUbicacion;
        private string NombreComercial;
        private string CorreoElectronico;
        private string IdentificacionExtranjero;
        private string OtrasSenasExtranjero;

        public string Nombre1 { get => Nombre; set => Nombre = value; }
        public IdentificacionPersona ObjIdPersona1 { get => objIdPersona; set => objIdPersona = value; }
        public Telefono ObjTelefono1 { get => objTelefono; set => objTelefono = value; }
        public Fax ObjFax { get => objFax; set => objFax = value; }
        public Ubicacion ObjUbicacion { get => objUbicacion; set => objUbicacion = value; }
        public string NombreComercial1 { get => NombreComercial; set => NombreComercial = value; }
        public string CorreoElectronico1 { get => CorreoElectronico; set => CorreoElectronico = value; }
        public string IdentificacionExtranjero1 { get => IdentificacionExtranjero; set => IdentificacionExtranjero = value; }
        public string OtrasSenasExtranjero1 { get => OtrasSenasExtranjero; set => OtrasSenasExtranjero = value; }

        public string setPersona()
        {
            try
            {
                ConexionconBD objConexion = new ConexionconBD();
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_PERSONA ?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Nombre1, "string");
                    objConexion.nuevo_parametro(ObjIdPersona1.identificacionPersona1, "string");
                    objConexion.nuevo_parametro(ObjTelefono1.NumTelefono1, "int");
                    objConexion.nuevo_parametro(ObjFax.NumFax1, "int");
                    objConexion.nuevo_parametro(ObjUbicacion.IdUbicacion1, "int");
                    objConexion.nuevo_parametro(NombreComercial1, "string");
                    objConexion.nuevo_parametro(CorreoElectronico1, "string");
                    objConexion.nuevo_parametro(IdentificacionExtranjero1, "string");
                    objConexion.nuevo_parametro(OtrasSenasExtranjero1, "string");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó la Persona con la Identificación : {objIdPersona.identificacionPersona1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch(Exception e)
            {
                return e.Message;
            }
        }

    }
}

