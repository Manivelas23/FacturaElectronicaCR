using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Fax { 
        private int NumFax;
        private int CodigoPais;
        public int NumFax1 { get => NumFax; set => NumFax = value; }
        public int CodigoPais1 { get => CodigoPais; set => CodigoPais = value; }
        public List<Fax> Seleccionar_Todo_Fax()
        {
            List<Fax> listaFax = new List<Fax>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC S_T_FAX";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        Fax fax = new Fax();
                        fax.NumFax1 = Convert.ToInt32(CONTENEDOR["NUMFAX"].ToString());
                        fax.CodigoPais1 = Convert.ToInt32(CONTENEDOR["CODIGOPAIS"].ToString());
                        listaFax.Add(fax);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaFax;
                }
                else
                    return listaFax;
            }
            catch
            {
                return listaFax;
            }
        }
        public string Actualiza_fax()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC U_FAX ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoPais1, "int");
                    objeto_conexion.nuevo_parametro(NumFax1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se actualizó el fax con el número : " + NumFax1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_fax()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_FAX ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(NumFax1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el fax con el número : " + NumFax1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_fax()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_FAX ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoPais1, "int");
                    objeto_conexion.nuevo_parametro(NumFax1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se agregó el fax con el número : " + NumFax1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
    }
}