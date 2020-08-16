using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class TipoDocumento
    {
        private string NumeroIdentidadTercero; 
        private string Tipodocumento;

        public string NumeroIdentidadTercero1 { get => NumeroIdentidadTercero; set => NumeroIdentidadTercero = value; }
        public string Tipodocumento1 { get => Tipodocumento; set => Tipodocumento = value; }


        public string Actualiza_TipoDocumento()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC UPDATE_3 ?,?"; 
                    objeto_conexion.nueva_consulta(query); 

                    objeto_conexion.nuevo_parametro(NumeroIdentidadTercero1, "string");
                    objeto_conexion.nuevo_parametro(Tipodocumento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Operación Realizada Con Éxito";
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch(Exception err)
            {
                return err.Message;
            }
        }
        
        public string Elimina_TipoDocumento()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC DELETE_4 ?"; 
                    objeto_conexion.nueva_consulta(query); 
                    objeto_conexion.nuevo_parametro(Tipodocumento1, "string");

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
        
        public string Inserta_TipoDocumento()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC INSERT_3 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(NumeroIdentidadTercero1, "string");
                    objeto_conexion.nuevo_parametro(Tipodocumento1,"string");

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