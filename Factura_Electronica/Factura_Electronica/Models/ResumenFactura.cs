using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class ResumenFactura
    {
        private decimal TotalServGravados;
        private decimal TotalServExentos;
        private decimal TotalServExonerado;
        private decimal TotalMercanciasGravadas;
        private decimal TotalMercanciasExentas;
        private decimal TotalGravados;
        private decimal TotalExento;
        private decimal TotalExonerado;
        private decimal TotalVenta;
        private decimal TotalDescuentos;
        private decimal TotalVentaNeta;
        private decimal TotalImpuesto;
        private decimal TotalIVADevuelto;
        private decimal TotalOtrosCargos;
        private decimal TotalComprobante;
        private Factura Factura;
        private CodigoTipoMoneda CodigoTipoMoneda;

        public decimal TotalServGravados1 { get => TotalServGravados; set => TotalServGravados = value; }
        public decimal TotalServExentos1 { get => TotalServExentos; set => TotalServExentos = value; }
        public decimal TotalServExonerado1 { get => TotalServExonerado; set => TotalServExonerado = value; }
        public decimal TotalMercanciasGravadas1 { get => TotalMercanciasGravadas; set => TotalMercanciasGravadas = value; }
        public decimal TotalMercanciasExentas1 { get => TotalMercanciasExentas; set => TotalMercanciasExentas = value; }
        public decimal TotalGravados1 { get => TotalGravados; set => TotalGravados = value; }
        public decimal TotalExento1 { get => TotalExento; set => TotalExento = value; }
        public decimal TotalExonerado1 { get => TotalExonerado; set => TotalExonerado = value; }
        public decimal TotalVenta1 { get => TotalVenta; set => TotalVenta = value; }
        public decimal TotalDescuentos1 { get => TotalDescuentos; set => TotalDescuentos = value; }
        public decimal TotalVentaNeta1 { get => TotalVentaNeta; set => TotalVentaNeta = value; }
        public decimal TotalImpuesto1 { get => TotalImpuesto; set => TotalImpuesto = value; }
        public decimal TotalIVADevuelto1 { get => TotalIVADevuelto; set => TotalIVADevuelto = value; }
        public decimal TotalOtrosCargos1 { get => TotalOtrosCargos; set => TotalOtrosCargos = value; }
        public decimal TotalComprobante1 { get => TotalComprobante; set => TotalComprobante = value; }
        public Factura Factura1 { get => Factura; set => Factura = value; }
        public CodigoTipoMoneda CodigoTipoMoneda1 { get => CodigoTipoMoneda; set => CodigoTipoMoneda = value; }

        public string setResumenFactura()
        {
            try
            {
                ConexionconBD objConexion = new ConexionconBD();
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_RESUMENFACTURA ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(TotalServGravados1, "decimal");
                    objConexion.nuevo_parametro(TotalServExentos1, "decimal");
                    objConexion.nuevo_parametro(TotalServExonerado1, "decimal");
                    objConexion.nuevo_parametro(TotalMercanciasGravadas1, "decimal");
                    objConexion.nuevo_parametro(TotalMercanciasExentas1, "decimal");
                    objConexion.nuevo_parametro(TotalGravados1, "decimal");
                    objConexion.nuevo_parametro(TotalExento1, "decimal");
                    objConexion.nuevo_parametro(TotalExonerado1, "decimal");
                    objConexion.nuevo_parametro(TotalVenta1, "decimal");
                    objConexion.nuevo_parametro(TotalDescuentos1, "decimal");
                    objConexion.nuevo_parametro(TotalVentaNeta1, "decimal");
                    objConexion.nuevo_parametro(TotalImpuesto1, "decimal");
                    objConexion.nuevo_parametro(TotalIVADevuelto1, "decimal");
                    objConexion.nuevo_parametro(TotalOtrosCargos1, "decimal");
                    objConexion.nuevo_parametro(TotalComprobante1, "decimal");
                    objConexion.nuevo_parametro(Factura1.Clave1, "string");
                    objConexion.nuevo_parametro(CodigoTipoMoneda1.CodigoMoneda1, "decimal");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó el Resumen Factura con la clave : {Factura1.Clave1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string deleteResumenFactura()
        {
            try
            {
                ConexionconBD objConexion = new ConexionconBD();
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC D_RESUMENFACTURA ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Factura1.Clave1, "string");


                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó el Resumen Factura con la clave : {Factura1.Clave1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public string updateResumenFactura()
        {
            try
            {
                ConexionconBD objConexion = new ConexionconBD();
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_RESUMENFACTURA ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(TotalServGravados1, "decimal");
                    objConexion.nuevo_parametro(TotalServExentos1, "decimal");
                    objConexion.nuevo_parametro(TotalServExonerado1, "decimal");
                    objConexion.nuevo_parametro(TotalMercanciasGravadas1, "decimal");
                    objConexion.nuevo_parametro(TotalMercanciasExentas1, "decimal");
                    objConexion.nuevo_parametro(TotalGravados1, "decimal");
                    objConexion.nuevo_parametro(TotalExento1, "decimal");
                    objConexion.nuevo_parametro(TotalExonerado1, "decimal");
                    objConexion.nuevo_parametro(TotalVenta1, "decimal");
                    objConexion.nuevo_parametro(TotalDescuentos1, "decimal");
                    objConexion.nuevo_parametro(TotalVentaNeta1, "decimal");
                    objConexion.nuevo_parametro(TotalImpuesto1, "decimal");
                    objConexion.nuevo_parametro(TotalIVADevuelto1, "decimal");
                    objConexion.nuevo_parametro(TotalOtrosCargos1, "decimal");
                    objConexion.nuevo_parametro(TotalComprobante1, "decimal");
                    objConexion.nuevo_parametro(Factura1.Clave1, "string");
                    objConexion.nuevo_parametro(CodigoTipoMoneda1.CodigoMoneda1, "decimal");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó el Resumen Factura con la clave : {Factura1.Clave1}";
                }
                else return "Sin conexión con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }


    }

}
