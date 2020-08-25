using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class IdentificacionEmisor
    {
        private string Identificacionemisor;
        private string Tipo;

        public string Identificacionemisor1 { get => Identificacionemisor; set => Identificacionemisor = value; }
        public string Tipo1 { get => Tipo; set => Tipo = value; }
        public string Actualiza_identificacionEmisor()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC UPDATE_9 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(Identificacionemisor1, "string");
                    objeto_conexion.nuevo_parametro(Tipo1,"string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se modificó la identificación : " + Identificacionemisor1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_identificacionEmisor()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC DELETE_10 ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(Identificacionemisor1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó la identificación : " + Identificacionemisor1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_identificacionEmisor()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC INSERT_9 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(Identificacionemisor1, "string");
                    objeto_conexion.nuevo_parametro(Tipo1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó la identificación : " + Identificacionemisor1;
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