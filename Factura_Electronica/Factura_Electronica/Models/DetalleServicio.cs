using FECR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace Factura_Electronica.Models
{
    public class DetalleServicio
    {
        private Factura1 Clave;
        private List<LineaDetalle> lineasdetalledelafactura;
        public Factura1 Clave1 { get => Clave; set => Clave = value; }
        public List<LineaDetalle> Lineasdetalledelafactura { get => lineasdetalledelafactura; set => lineasdetalledelafactura = value; }

        public DetalleServicio()
        {

        }

        public string insertar_detalleservicio_en_BD()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    string CONSULTA;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    CONSULTA = "EXEC I_DETALLESERVICIO ?";
                    objeto_conexion.nueva_consulta(CONSULTA);
                    objeto_conexion.nuevo_parametro(Clave1.Clave1, "string");


                    CONTENEDOR = objeto_conexion.busca();
                    foreach (LineaDetalle item in Lineasdetalledelafactura)
                    {
                        CONSULTA = "EXEC I_DETALLESERVICIO_LINEADETALLE ?,?";
                        objeto_conexion.nueva_consulta(CONSULTA);
                        objeto_conexion.nuevo_parametro(Clave1.Clave1, "string");
                        objeto_conexion.nuevo_parametro(item.Consecutivo1, "int");

                        CONTENEDOR = objeto_conexion.busca();
                    }

                    //  System.Threading.Thread.Sleep(5000);
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Se ha insertado el detalle servicio " + Clave1.Clave1 + " de forma correcta";
                }
                else
                {
                    return "No hay conexión con la base de datos";
                }
            }
            catch (Exception error)
            {
                return error.Message;
            }
        }
    }
}