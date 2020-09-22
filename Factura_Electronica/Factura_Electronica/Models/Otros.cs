using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Otros
    {
        private string  OtroTexto;
        private string OtroContenido;
        private Factura objFactura;

        public string OtroTexto1 { get => OtroTexto; set => OtroTexto = value; }
        public string OtroContenido1 { get => OtroContenido; set => OtroContenido = value; }
        public Factura ObjFactura { get => objFactura; set => objFactura = value; }

        public string setOtros()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_OTROS ?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(OtroTexto1, "string");
                    objConexion.nuevo_parametro(OtroContenido1, "string");
                    objConexion.nuevo_parametro(ObjFactura.Clave1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó Otros con la clave {ObjFactura.Clave1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string deleteOtros()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC D_OTROS ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(ObjFactura.Clave1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó Otros con la clave {ObjFactura.Clave1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string updateOtros()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_OTROS ?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(OtroTexto1, "string");
                    objConexion.nuevo_parametro(OtroContenido1, "string");
                    objConexion.nuevo_parametro(ObjFactura.Clave1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó Otros con la clave {ObjFactura.Clave1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}

