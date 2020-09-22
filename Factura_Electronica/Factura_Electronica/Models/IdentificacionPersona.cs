using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class IdentificacionPersona
    {
        private string IdPersona;
        private string Tipo;

        public string identificacionPersona1 { get => IdPersona; set => IdPersona = value; }
        public string Tipo1 { get => Tipo; set => Tipo = value; }
        public List<IdentificacionPersona> Seleccionar_Todo_IdentificacionPersona()
        {
            List<IdentificacionPersona> listaIR = new List<IdentificacionPersona>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC SELETODOIDPERSONA";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        IdentificacionPersona IdPersona = new IdentificacionPersona();
                        IdPersona.identificacionPersona1 = CONTENEDOR["IDENTIFICACION"].ToString();
                        IdPersona.Tipo1 = CONTENEDOR["TIPO"].ToString();
                        listaIR.Add(IdPersona);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaIR;
                }
                else
                    return listaIR;
            }
            catch
            {
                return listaIR;
            }
        }
        public string Actualiza_IdentificacionPersona()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC U_IDENTIFICACION ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(identificacionPersona1, "string");
                    objeto_conexion.nuevo_parametro(Tipo1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se modificó la identificación : " + identificacionPersona1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_IdentificacionPersona()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_IDENTIFICACION ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(identificacionPersona1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó la identificación : " + identificacionPersona1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_IdentificacionPersona()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_IDENTIFICACION ?,?";
                    objeto_conexion.nueva_consulta(query);
        
                    objeto_conexion.nuevo_parametro(identificacionPersona1, "string");
                    objeto_conexion.nuevo_parametro(Tipo1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó la identificación : " + identificacionPersona1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
              return  err.Message;
            }
        }
    }
}