using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class InformacionReferencia
    {
        private string TipoDoc;
        private string Numero;
        private DateTime FechaEmision;
        private string Codigo;
        private string Razon;
        private Factura1 objFactura;

        public string TipoDoc1 { get => TipoDoc; set => TipoDoc = value; }
        public string Numero1 { get => Numero; set => Numero = value; }
        public DateTime FechaEmision1 { get => FechaEmision; set => FechaEmision = value; }
        public string Codigo1 { get => Codigo; set => Codigo = value; }
        public string Razon1 { get => Razon; set => Razon = value; }
        public Factura1 ObjFactura { get => objFactura; set => objFactura = value; }


        public string setInformacionReferencia()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_INFORMACIONREFERENCIA ?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(TipoDoc1, "string");
                    objConexion.nuevo_parametro(Numero1, "string");
                    objConexion.nuevo_parametro(FechaEmision1, "date");
                    objConexion.nuevo_parametro(Codigo1, "string");
                    objConexion.nuevo_parametro(Razon1, "string");
                    objConexion.nuevo_parametro(ObjFactura.Clave1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó la informacion de referencia con la clave {ObjFactura.Clave1}";
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
                    query = "EXEC D_INFORMACIONREFERENCIA ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(objFactura.Clave1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó la informacion de referencia con la clave  {objFactura.Clave1}";
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
                    query = "EXEC U_INFORMACIONREFERENCIA ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(TipoDoc1, "string");
                    objConexion.nuevo_parametro(Numero1, "string");
                    objConexion.nuevo_parametro(FechaEmision1, "date");
                    objConexion.nuevo_parametro(Codigo1, "string");
                    objConexion.nuevo_parametro(Razon1, "string");
                    objConexion.nuevo_parametro(ObjFactura.Clave1, "string");


                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó la informacion de referencia con la clave  {ObjFactura.Clave1}";
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