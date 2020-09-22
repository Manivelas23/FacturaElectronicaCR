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

        public List<TipoDocumento> Seleccionar_Todo_TipoDocumento()
        {
            List<TipoDocumento> listaTipoDocumento = new List<TipoDocumento>();

            ConexionconBD objeto_conexion = new ConexionconBD();

            if (objeto_conexion.activaBD())
            {
                String query;
                System.Data.OleDb.OleDbDataReader CONTENEDOR;

                query = "EXEC SELETODOTD";
                objeto_conexion.nueva_consulta(query);
                CONTENEDOR = objeto_conexion.busca();
                while (CONTENEDOR.Read())
                {
                    TipoDocumento tipoDocumento = new TipoDocumento();
                    tipoDocumento.NumeroIdentidadTercero1 = CONTENEDOR["NUMEROIDENTIDADTERCERO"].ToString();
                    tipoDocumento.Tipodocumento1 = CONTENEDOR["TIPODOCUMENTO"].ToString();
                    listaTipoDocumento.Add(tipoDocumento);
                }
                objeto_conexion.conexion.Close();
                objeto_conexion.conexion.Dispose();
                CONTENEDOR.Close();
                return listaTipoDocumento;
            }
            else
                return listaTipoDocumento;
        }
        public string Elimina_TipoDocumento()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_TIPODOCUMENTO ?"; 
                    objeto_conexion.nueva_consulta(query); 
                    objeto_conexion.nuevo_parametro(Tipodocumento1, "string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el Tipo de Documento : "+ Tipodocumento1;
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
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_TIPODOCUMENTO ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(NumeroIdentidadTercero1, "string");
                    objeto_conexion.nuevo_parametro(Tipodocumento1,"string");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó el Tipo de Documento : " + Tipodocumento1;
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