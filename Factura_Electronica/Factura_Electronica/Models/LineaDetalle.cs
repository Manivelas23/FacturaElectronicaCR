using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class LineaDetalle
    {
        private int NumeroLinea;
        private string PartidaArancelaria;
        private string Codigo;
        private decimal Cantidad;
        private string UnidadMedida;
        private string UnidadMedidaComercial;
        private string Detalle;
        private decimal PrecioUnitario;
        private decimal MontoTotal;
        private decimal SubTotal;
        private decimal BaseImponible;
        private decimal ImpuestoNeto;
        private decimal MontoTotalLinea;
        private int Consecutivo;
        CodigoComercial CodigoComercial;
        Descuento Descuento;
        //private List<LineaDetalle_Impuesto_Exoneracion> lineaDetalle_impuesto_exoneracion;

        public int NumeroLinea1 { get => NumeroLinea; set => NumeroLinea = value; }
        public string PartidaArancelaria1 { get => PartidaArancelaria; set => PartidaArancelaria = value; }
        public string Codigo1 { get => Codigo; set => Codigo = value; }
        public decimal Cantidad1 { get => Cantidad; set => Cantidad = value; }
        public string UnidadMedida1 { get => UnidadMedida; set => UnidadMedida = value; }
        public string UnidadMedidaComercial1 { get => UnidadMedidaComercial; set => UnidadMedidaComercial = value; }
        public string Detalle1 { get => Detalle; set => Detalle = value; }
        public decimal PrecioUnitario1 { get => PrecioUnitario; set => PrecioUnitario = value; }
        public decimal MontoTotal1 { get => MontoTotal; set => MontoTotal = value; }
        public decimal SubTotal1 { get => SubTotal; set => SubTotal = value; }
        public decimal BaseImponible1 { get => BaseImponible; set => BaseImponible = value; }
        public decimal ImpuestoNeto1 { get => ImpuestoNeto; set => ImpuestoNeto = value; }
        public decimal MontoTotalLinea1 { get => MontoTotalLinea; set => MontoTotalLinea = value; }
        public int Consecutivo1 { get => Consecutivo; set => Consecutivo = value; } 
        public CodigoComercial CodigoComercial1 { get => CodigoComercial; set => CodigoComercial = value; }
        public Descuento Descuento1 { get => Descuento; set => Descuento = value; }
       // public List<LineaDetalle_Impuesto_Exoneracion> LineaDetalle_impuesto_exoneracion { get => lineaDetalle_impuesto_exoneracion; set => lineaDetalle_impuesto_exoneracion = value; }

        public string setResumenFactura()
        {
            try
            {
                ConexionconBD objConexion = new ConexionconBD();
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_LINEADETALLE ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(NumeroLinea1, "int");
                    objConexion.nuevo_parametro(PartidaArancelaria1, "string");
                    objConexion.nuevo_parametro(Codigo1, "string");
                    objConexion.nuevo_parametro(Cantidad1, "decimal");
                    objConexion.nuevo_parametro(UnidadMedida1, "string");
                    objConexion.nuevo_parametro(UnidadMedidaComercial1, "string");
                    objConexion.nuevo_parametro(Detalle1, "string");
                    objConexion.nuevo_parametro(PrecioUnitario1, "decimal");
                    objConexion.nuevo_parametro(MontoTotal1, "decimal");
                    objConexion.nuevo_parametro(SubTotal1, "decimal");
                    objConexion.nuevo_parametro(BaseImponible1, "decimal");
                    objConexion.nuevo_parametro(ImpuestoNeto1, "decimal");
                    objConexion.nuevo_parametro(MontoTotalLinea1, "decimal");
                    objConexion.nuevo_parametro(Consecutivo1, "int");
                    objConexion.nuevo_parametro(CodigoComercial1.Tipo1, "string");
                    objConexion.nuevo_parametro(CodigoComercial1.Codigo1, "string");
                    objConexion.nuevo_parametro(Descuento1.MontoDescuento1, "decimal");
                    objConexion.nuevo_parametro(Descuento1.NaturalezaDescuento1, "string");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó la Linea Detalle con el consecutivo : {Consecutivo1}";
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
                    query = "EXEC D_LINEADETALLE ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(Consecutivo1, "int");


                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó la Linea Detalle con el consecutivo : {Consecutivo1}";
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
                    query = "EXEC U_LINEADETALLE ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(NumeroLinea1, "int");
                    objConexion.nuevo_parametro(PartidaArancelaria1, "string");
                    objConexion.nuevo_parametro(Codigo1, "string");
                    objConexion.nuevo_parametro(Cantidad1, "decimal");
                    objConexion.nuevo_parametro(UnidadMedida1, "string");
                    objConexion.nuevo_parametro(UnidadMedidaComercial1, "string");
                    objConexion.nuevo_parametro(Detalle1, "string");
                    objConexion.nuevo_parametro(PrecioUnitario1, "decimal");
                    objConexion.nuevo_parametro(MontoTotal1, "decimal");
                    objConexion.nuevo_parametro(SubTotal1, "decimal");
                    objConexion.nuevo_parametro(BaseImponible1, "decimal");
                    objConexion.nuevo_parametro(ImpuestoNeto1, "decimal");
                    objConexion.nuevo_parametro(MontoTotalLinea1, "decimal");
                    objConexion.nuevo_parametro(Consecutivo1, "int");
                    objConexion.nuevo_parametro(CodigoComercial1.Tipo1, "string");
                    objConexion.nuevo_parametro(CodigoComercial1.Codigo1, "string");
                    objConexion.nuevo_parametro(Descuento1.MontoDescuento1, "decimal");
                    objConexion.nuevo_parametro(Descuento1.NaturalezaDescuento1, "string");

                    CONTENEDOR = objConexion.busca();

                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó la Linea Detalle con el consecutivo : {Consecutivo1}";
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
