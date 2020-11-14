using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class CodigoComercial
    {
        private string Tipo;
        private string Codigo;
        public string Tipo1 { get => Tipo; set => Tipo = value; }
        public string Codigo1 { get => Codigo; set => Codigo = value; }

        public List<CodigoComercial> Seleccionar_Todo_CodigoComercial()
        {
            List<CodigoComercial> listaCC = new List<CodigoComercial>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC S_T_CC";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        CodigoComercial codigoComercial = new CodigoComercial();
                        codigoComercial.Tipo1 = CONTENEDOR["TIPO"].ToString();
                        codigoComercial.Codigo1 = CONTENEDOR["CODIGO"].ToString();
                        listaCC.Add(codigoComercial);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaCC;
                }
                else
                    return listaCC;
            }
            catch
            {
                return listaCC;
            }
        }
        public string Elimina_CodigoComercial()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_CODIGOCOMERCIAL ?,?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(Tipo1, "string");
                    objeto_conexion.nuevo_parametro(Codigo1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el Código Comercial : " + Codigo1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_CodigoComercial()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_CODIGOCOMERCIAL ?,?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(Tipo1, "string");
                    objeto_conexion.nuevo_parametro(Codigo1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó el Código Comercial : " + Codigo1;
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