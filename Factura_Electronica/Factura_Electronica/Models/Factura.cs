using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Factura
    {
        private string CodigoActividad;
        private string Clave;
        private IdentificacionPersona IdPersona;
        private string NumeroConsecutivo;
        private DateTime FechaEmision;
        private string CondicionVenta;
        private string PlazoCredito;
        private string MedioPago;

        public string CodigoActividad1 { get => CodigoActividad; set => CodigoActividad = value; }
        public string Clave1 { get => Clave; set => Clave = value; }
        public IdentificacionPersona IdPersona1 { get => IdPersona; set => IdPersona = value; }
        public string NumeroConsecutivo1 { get => NumeroConsecutivo; set => NumeroConsecutivo = value; }
        public DateTime FechaEmision1 { get => FechaEmision; set => FechaEmision = value; }
        public string CondicionVenta1 { get => CondicionVenta; set => CondicionVenta = value; }
        public string PlazoCredito1 { get => PlazoCredito; set => PlazoCredito = value; }
        public string MedioPago1 { get => MedioPago; set => MedioPago = value; }


        public string setFactura()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_FACTURA1 ?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(CodigoActividad1, "string");
                    objConexion.nuevo_parametro(Clave1, "string");
                    objConexion.nuevo_parametro(IdPersona1.identificacionPersona1, "string");
                    objConexion.nuevo_parametro(NumeroConsecutivo1, "string");
                    objConexion.nuevo_parametro(CodigoActividad1, "string");
                    objConexion.nuevo_parametro(FechaEmision1, "date");
                    objConexion.nuevo_parametro(CondicionVenta1, "string");
                    objConexion.nuevo_parametro(PlazoCredito1, "string");
                    objConexion.nuevo_parametro(MedioPago1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó la factura con la clave {Clave1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch(Exception e)
            {
                return e.Message;
            }
        }
        public string deleteFactura()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC D_FACTURA1 ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Clave1, "string");
                 
                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó la factura con la clave {Clave1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string updateFactura()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_FACTURA1 ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(CodigoActividad1, "string");
                    objConexion.nuevo_parametro(Clave1, "string");
                    objConexion.nuevo_parametro(IdPersona1.identificacionPersona1, "string");
                    objConexion.nuevo_parametro(NumeroConsecutivo1, "string");
                    objConexion.nuevo_parametro(CodigoActividad1, "string");
                    objConexion.nuevo_parametro(FechaEmision1, "date");
                    objConexion.nuevo_parametro(CondicionVenta1, "string");
                    objConexion.nuevo_parametro(PlazoCredito1, "string");
                    objConexion.nuevo_parametro(MedioPago1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó la factura con la clave {Clave1}";
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