﻿ using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class Exoneracion
    {
        private string TipoDocumento;
        private string NumeroDocumento;
        private string NombreInstitucion;
        private DateTime FechaEmision;
        private int PorcentajeExoneracion;
        private decimal MontoExoneracion;

        public string TipoDocumento1 { get => TipoDocumento; set => TipoDocumento = value; }
        public string NumeroDocumento1 { get => NumeroDocumento; set => NumeroDocumento = value; }
        public string NombreInstitucion1 { get => NombreInstitucion; set => NombreInstitucion = value; }
        public DateTime FechaEmision1 { get => FechaEmision; set => FechaEmision = value; }
        public int PorcentajeExoneracion1 { get => PorcentajeExoneracion; set => PorcentajeExoneracion = value; }
        public decimal MontoExoneracion1 { get => MontoExoneracion; set => MontoExoneracion = value; }

        public string Actualiza_exoneracion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC UPDATE_19 ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query); 

                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NombreInstitucion1, "string");
                    objeto_conexion.nuevo_parametro(FechaEmision1, "date");
                    objeto_conexion.nuevo_parametro(PorcentajeExoneracion1, "int");
                    objeto_conexion.nuevo_parametro(MontoExoneracion1, "decimal");

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
        public string Elimina_exoneracion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD()) ///verificamos si el metodo activaBD está en true
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC DELETE_15 ?,?"; 
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");

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
        public string Inserta_exoneracion()
        {
            string respuesta = "0";
            ConexionconBD objeto_conexion = new ConexionconBD();

            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXC INSERT_19 ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(TipoDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NumeroDocumento1, "string");
                    objeto_conexion.nuevo_parametro(NombreInstitucion1, "string");
                    objeto_conexion.nuevo_parametro(FechaEmision1, "date");
                    objeto_conexion.nuevo_parametro(PorcentajeExoneracion1, "int");
                    objeto_conexion.nuevo_parametro(MontoExoneracion1, "decimal");

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