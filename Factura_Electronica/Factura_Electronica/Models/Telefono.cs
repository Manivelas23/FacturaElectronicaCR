using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Telefono
    {
        private int NumTelefono;
        private int CodigoPais;

        public int NumTelefono1 { get => NumTelefono; set => NumTelefono = value; }
        public int CodigoPais1 { get => CodigoPais; set => CodigoPais = value; }
        public string Actualiza_telefono()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC UPDATE_12 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(NumTelefono1, "int");
                    objeto_conexion.nuevo_parametro(CodigoPais1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se modificó el teléfono con el número : " + NumTelefono1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Elimina_telefono()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC DELETE_13 ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(NumTelefono1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se eliminó el teléfono con el número : " + NumTelefono1;
                }
                else
                    return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_telefono()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC INSERT_12 ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(NumTelefono1, "int");
                    objeto_conexion.nuevo_parametro(CodigoPais1,"int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se guardó el teléfono con el número : " + NumTelefono1;
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