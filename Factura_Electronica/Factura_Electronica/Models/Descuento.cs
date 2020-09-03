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

        public List<Descuento> Seleccionar_Todo_Descuento()
        {
            List<Descuento> listaDescuento = new List<Descuento>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC SELECCIONARTODODESCUENTO";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        Descuento descuento = new Descuento();
                        descuento.MontoDescuento1 = Convert.ToDecimal(CONTENEDOR["MONTODESCUENTO"].ToString());
                        descuento.NaturalezaDescuento1 = CONTENEDOR["_NATURALEZADESCUENTO"].ToString();
                        listaDescuento.Add(descuento);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaDescuento;
                }
                else
                    return listaDescuento;
            }
            catch
            {
                return listaDescuento;
            }
        }
        public string Elimina_descuento()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC DELETE_19 ?,?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(MontoDescuento1, "int" );
                    objeto_conexion.nuevo_parametro(NaturalezaDescuento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el descuento con el monto : " + MontoDescuento1 ;    
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
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC INSERT_18 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(MontoDescuento1, "int");
                    objeto_conexion.nuevo_parametro(NaturalezaDescuento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó el descuento con el monto: " + MontoDescuento1;
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
