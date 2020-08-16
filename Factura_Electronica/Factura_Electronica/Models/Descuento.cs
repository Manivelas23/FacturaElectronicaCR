using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Descuento
    {
        private decimal MontoDescuento;
        private string NaturalezaDescuento;

        public decimal MontoDescuento1 { get => MontoDescuento; set => MontoDescuento = value; }
        public string NaturalezaDescuento1 { get => NaturalezaDescuento; set => NaturalezaDescuento = value; }
        public string Elimina_descuento()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC DELETE_19 ?,?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(MontoDescuento1,"decimal" );
                    objeto_conexion.nuevo_parametro(NaturalezaDescuento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_descuento()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC INSERT_18 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(MontoDescuento1, "decimal");
                    objeto_conexion.nuevo_parametro(NaturalezaDescuento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
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