﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Persona
    {
        public Persona() { }

        private string Nombre;
        private IdentificacionPersona IdPersona;
        private Telefono objTelefono;
        private Fax objFax;
        private Ubicacion objUbicacion;
        private string NombreComercial;
        private string CorreoElectronico;
        private string IdentificacionExtranjero;
        private string OtrasSenasExtranjero;

        public string Nombre1 { get => Nombre; set => Nombre = value; }
        public IdentificacionPersona identificacionPersona { get => IdPersona; set => IdPersona = value; }
        public Telefono ObjTelefono1 { get => objTelefono; set => objTelefono = value; }
        public Fax ObjFax1 { get => objFax; set => objFax = value; }
        public Ubicacion ObjUbicacion { get => objUbicacion; set => objUbicacion = value; }
        public string NombreComercial1 { get => NombreComercial; set => NombreComercial = value; }
        public string CorreoElectronico1 { get => CorreoElectronico; set => CorreoElectronico = value; }
        public string IdentificacionExtranjero1 { get => IdentificacionExtranjero; set => IdentificacionExtranjero = value; }
        public string OtrasSenasExtranjero1 { get => OtrasSenasExtranjero; set => OtrasSenasExtranjero = value; }
        public string setPersona()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {

                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_PERSONA ?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Nombre1, "string");
                    objConexion.nuevo_parametro(identificacionPersona.identificacionPersona1, "string");
                    objConexion.nuevo_parametro(ObjTelefono1.NumTelefono1, "int");
                    objConexion.nuevo_parametro(ObjFax1.NumFax1, "int");
                    objConexion.nuevo_parametro(ObjUbicacion.IdUbicacion1, "int");
                    objConexion.nuevo_parametro(NombreComercial1, "string");
                    objConexion.nuevo_parametro(CorreoElectronico1, "string");
                    objConexion.nuevo_parametro(IdentificacionExtranjero1, "string");
                    objConexion.nuevo_parametro(OtrasSenasExtranjero1, "string");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó la Persona con la Identificación : {identificacionPersona.identificacionPersona1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string updatePersona()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {

                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_PERSONA ?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Nombre1, "string");
                    objConexion.nuevo_parametro(identificacionPersona.identificacionPersona1, "string");
                    objConexion.nuevo_parametro(ObjTelefono1.NumTelefono1, "int");
                    objConexion.nuevo_parametro(ObjFax1.NumFax1, "int");
                    objConexion.nuevo_parametro(ObjUbicacion.IdUbicacion1, "int");
                    objConexion.nuevo_parametro(NombreComercial1, "string");
                    objConexion.nuevo_parametro(CorreoElectronico1, "string");
                    objConexion.nuevo_parametro(IdentificacionExtranjero1, "string");
                    objConexion.nuevo_parametro(OtrasSenasExtranjero1, "string");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó la Persona con la Identificación : {identificacionPersona.identificacionPersona1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string deletePersona()
        {
            System.Data.OleDb.OleDbDataReader CONTENEDOR;
            ConexionconBD objConexion = new ConexionconBD();

            Persona persona = new Persona();

            if (objConexion.activaBD())
            {
                string query;
                query = "EXEC D_PERSONA ?";
                objConexion.nueva_consulta(query);
                objConexion.nuevo_parametro(persona.identificacionPersona, "string");

                CONTENEDOR = objConexion.busca();
                CONTENEDOR.Close();
                CONTENEDOR.Dispose();
                return $"Se ha eliminado la persona con la identificación : {persona.identificacionPersona}";

            }
            return $"Error en la base de datos";

        }
        public Persona getPersonaById()
        {
            ConexionconBD objConexion = new ConexionconBD();
            Persona persona = new Persona();
            persona.Nombre1 = "NO EXISTE";

            if (objConexion.activaBD())
            {
                try
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC S_PERSONA ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(identificacionPersona.identificacionPersona1, "string");

                    CONTENEDOR = objConexion.busca();

                    if (CONTENEDOR.HasRows)
                    {
                        while (CONTENEDOR.Read())
                        {
                            persona.Nombre1 = CONTENEDOR["NOMBRE"].ToString();

                            IdentificacionPersona idPersona = new IdentificacionPersona();
                            idPersona.identificacionPersona1 = CONTENEDOR["IDENTIFICACION"].ToString();
                            persona.identificacionPersona = idPersona;

                            Telefono telefono = new Telefono();
                            telefono.NumTelefono1 = Convert.ToInt32(CONTENEDOR["NUMTELEFONO"].ToString());
                            persona.ObjTelefono1 = telefono;

                            Fax fax = new Fax();
                            fax.NumFax1 = Convert.ToInt32(CONTENEDOR["NUMFAX"].ToString());
                            persona.ObjFax1 = fax;

                            Ubicacion ubicacion = new Ubicacion();
                            ubicacion.IdUbicacion1 = Convert.ToInt32(CONTENEDOR["IDUBICACION"].ToString());
                            persona.ObjUbicacion = ubicacion;

                            persona.NombreComercial1 = CONTENEDOR["NOMBRECOMERCIAL"].ToString();
                            persona.CorreoElectronico1 = CONTENEDOR["CORREOELECTRONICO"].ToString();
                            persona.IdentificacionExtranjero1 = CONTENEDOR["IDENTIFICACIONEXTRANJERO"].ToString();
                            persona.OtrasSenasExtranjero1 = CONTENEDOR["OTRASSENASEXTRANJERO"].ToString();
                        }
                    }
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return persona;
                }
                catch 
                {
                    return persona;
                }
            }
            else { return persona; }
        }
        public List<Persona> getPersonas()
        {
            List<Persona> listaPersona = new List<Persona>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC S_T_PERSONA";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        Persona persona = new Persona();

                        persona.Nombre1 = CONTENEDOR["NOMBRE"].ToString();

                        IdentificacionPersona identificacionPersona = new IdentificacionPersona();
                        identificacionPersona.identificacionPersona1 = CONTENEDOR["IDENTIFICACION"].ToString();
                        persona.identificacionPersona = identificacionPersona;

                        Telefono telefono = new Telefono();
                        telefono.NumTelefono1 = Convert.ToInt32(CONTENEDOR["NUMTELEFONO"].ToString());
                        persona.ObjTelefono1 = telefono;

                        Fax fax = new Fax();
                        fax.NumFax1 = Convert.ToInt32(CONTENEDOR["NUMFAX"].ToString());
                        persona.ObjFax1 = fax;

                        Ubicacion ubicacion = new Ubicacion();
                        ubicacion.IdUbicacion1 = Convert.ToInt32(CONTENEDOR["IDUBICACION"].ToString());
                        persona.ObjUbicacion = ubicacion;
                        //persona.ObjUbicacion = ubicacion.getUbicacionById(ubicacion.IdUbicacion1);

                        persona.NombreComercial1 = CONTENEDOR["NOMBRECOMERCIAL"].ToString();
                        persona.CorreoElectronico1 = CONTENEDOR["CORREOELECTRONICO"].ToString();
                        persona.IdentificacionExtranjero1 = CONTENEDOR["IDENTIFICACIONEXTRANJERO"].ToString();
                        persona.OtrasSenasExtranjero1 = CONTENEDOR["OTRASSENASEXTRANJERO"].ToString();
                        listaPersona.Add(persona);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaPersona;
                }
                else
                    return listaPersona;
            }
            catch
            {
                return listaPersona;
            }
        }
    }
}
  
        


