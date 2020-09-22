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

        public List<Telefono> Seleccionar_Todo_Telefono()
        {
            List<Telefono> listaTelefono = new List<Telefono>();

            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC SELETODOTEL";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        Telefono telefono = new Telefono();
                        telefono.NumTelefono1 = Convert.ToInt32(CONTENEDOR["NUMTELEFONO"].ToString());
                        telefono.CodigoPais1 = Convert.ToInt32(CONTENEDOR["CODIGOPAIS"].ToString());
                        listaTelefono.Add(telefono);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listaTelefono;
                }
                else
                    return listaTelefono;
            }
            catch
            {
                return listaTelefono;
            }
        }
        public string Actualiza_telefono()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC U_TELEFONO ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoPais1, "int");
                    objeto_conexion.nuevo_parametro(NumTelefono1, "int");

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

                    query = "EXEC D_TELEFONO ?";
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

                    query = "EXEC I_TELEFONO ?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(CodigoPais1,"int");
                    objeto_conexion.nuevo_parametro(NumTelefono1, "int");

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