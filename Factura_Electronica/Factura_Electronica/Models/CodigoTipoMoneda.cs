using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class CodigoTipoMoneda
    {
       private string CodigoMoneda;
       private  decimal TipoCambio;

        public string CodigoMoneda1 { get => CodigoMoneda; set => CodigoMoneda = value; }
        public decimal TipoCambio1 { get => TipoCambio; set => TipoCambio = value; }

        public List<CodigoTipoMoneda> Seleccionar_Todo_CodigoTipoMoneda()
        {
            List<CodigoTipoMoneda> listaCTM = new List<CodigoTipoMoneda>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC SELECCIONARTODOCTM";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        CodigoTipoMoneda codigoTipoMoneda = new CodigoTipoMoneda();
                        codigoTipoMoneda.CodigoMoneda1 = CONTENEDOR["CODIGOMONEDA"].ToString();
                        codigoTipoMoneda.TipoCambio1 = Convert.ToDecimal(CONTENEDOR["TIPOCAMBIO"].ToString());
                        listaCTM.Add(codigoTipoMoneda);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaCTM;
                }
                else
                    return listaCTM;
            }
            catch
            {
                return listaCTM;
            }
        }
        public string Actualiza_CodigoTipoMoneda()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC UPDATE_6 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoMoneda1,"string");
                    objeto_conexion.nuevo_parametro(TipoCambio,"int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se actualizó el Código de Moneda : " + CodigoMoneda1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_CodigoTipoMoneda()
        {

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC DELETE_7 ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(CodigoMoneda1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el Código de Moneda : " + CodigoMoneda1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_CodigoTipoMoneda()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC INSERT_6 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoMoneda1, "string");
                    objeto_conexion.nuevo_parametro(TipoCambio1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó el Código de Moneda : " + CodigoMoneda1;
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