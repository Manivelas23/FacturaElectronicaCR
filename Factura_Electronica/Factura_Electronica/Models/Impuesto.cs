using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Impuesto
    {
        private string CodigoImpuesto;
        private string CodigoTarifa;
        private decimal Tarifa;
        private decimal Factor_Iva;
        private decimal Monto;
        private decimal MontoExportacion;

        public string CodigoImpuesto1 { get => CodigoImpuesto; set => CodigoImpuesto = value; }
        public string CodigoTarifa1 { get => CodigoTarifa; set => CodigoTarifa = value; }
        public decimal Tarifa1 { get => Tarifa; set => Tarifa = value; }
        public decimal Factor_Iva1 { get => Factor_Iva; set => Factor_Iva = value; }
        public decimal Monto1 { get => Monto; set => Monto = value; }
        public decimal MontoExportacion1 { get => MontoExportacion; set => MontoExportacion = value; }

        public List<Impuesto> Seleccionar_Todo_Impuesto()
        {
            List<Impuesto> listaImpuesto = new List<Impuesto>();
            try
            {
                ConexionconBD objeto_conexion = new ConexionconBD();
                if (objeto_conexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;
                    string query;
                    query = "EXEC SELETODOIMP";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        Impuesto impuesto = new Impuesto();
                        impuesto.CodigoImpuesto1 = CONTENEDOR["CODIGOIMPUESTO"].ToString();
                        impuesto.CodigoTarifa1 = CONTENEDOR["CODIGOTARIFA"].ToString();
                        impuesto.Tarifa1 = Convert.ToDecimal(CONTENEDOR["TARIFA"].ToString());
                        impuesto.Factor_Iva1 = Convert.ToDecimal(CONTENEDOR["FACTOR_IVA"].ToString());
                        impuesto.Monto1 = Convert.ToDecimal(CONTENEDOR["MONTO"].ToString());
                        impuesto.MontoExportacion1 = Convert.ToDecimal(CONTENEDOR["MONTOEXPORTACION"].ToString());
                        listaImpuesto.Add(impuesto);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaImpuesto;

                }
                else
                    return listaImpuesto;
            }
            catch
            {
                return listaImpuesto;
            }
        }
        public string Inserta_Impuesto()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_IMPUESTO ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoImpuesto1, "string");
                    objeto_conexion.nuevo_parametro(CodigoTarifa1, "string");
                    objeto_conexion.nuevo_parametro(Tarifa1, "string");
                    objeto_conexion.nuevo_parametro(Factor_Iva1, "int");
                    objeto_conexion.nuevo_parametro(Monto1, "int");
                    objeto_conexion.nuevo_parametro(MontoExportacion1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Impuesto: " + CodigoImpuesto1 + " Guardado Correctamente";
                }
                else
                    return "Sin Conexion a la Base de Datos";
            }
            catch(Exception error)
            {
                return error.Message;
            }

        }
        public string Elimina_Impuesto()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;
                    string query;
                    query = "EXEC D_IMPUESTO ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(CodigoImpuesto1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó correctamente el impuesto : " + CodigoImpuesto1;
                }
                else
                    return "Sin Conexión a la Base de Datos";
            }
            catch(Exception err )
            {
                return err.Message;
            }
        }
        public string Actualiza_Impuesto()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_IMPUESTO ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoImpuesto1, "string");
                    objeto_conexion.nuevo_parametro(CodigoTarifa1, "string");
                    objeto_conexion.nuevo_parametro(Tarifa1, "decimal");
                    objeto_conexion.nuevo_parametro(Factor_Iva1, "decimal");
                    objeto_conexion.nuevo_parametro(Monto1, "decimal");
                    objeto_conexion.nuevo_parametro(MontoExportacion1, "decimal");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return "Se Actualizó Correctamente el Impuesto : " + CodigoImpuesto1;
                }
                else
                    return "Sin conexion a la Base de Datos";
            }
            catch(Exception err)
            {
                return err.Message;
            }
        }
    }
}