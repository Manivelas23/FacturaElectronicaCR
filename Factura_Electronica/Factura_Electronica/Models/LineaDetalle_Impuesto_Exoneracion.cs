using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Factura_Electronica.Models;
namespace FECR.Models
{
    public class Lineadetalle_Impuesto_Exoneracion
    {
        private LineaDetalle Lineadetalleconsecutivo;
        private Impuesto Impuestocodigo;
        private Exoneracion Tipodocumento;
        private Exoneracion Numerodocumento;

        public LineaDetalle Lineadetalleconsecutivo1 { get => Lineadetalleconsecutivo; set => Lineadetalleconsecutivo = value; }
        public Impuesto Impuestocodigo1 { get => Impuestocodigo; set => Impuestocodigo = value; }
        public Exoneracion Tipodocumento1 { get => Tipodocumento; set => Tipodocumento = value; }
        public Exoneracion Numerodocumento1 { get => Numerodocumento; set => Numerodocumento = value; }


        /*   public string insertar_Lineadetalle_impuesto_exoneracion_en_BD()
           {
               String respuesta = "0";

               ConexionconBD conx_detalles = new ConexionconBD();


               try
               {
                   if (conx_detalles.inicializaBD())
                   {
                       string CONSULTA;
                       System.Data.OleDb.OleDbDataReader CONTENEDOR;

                       CONSULTA = "EXEC INSERTAR_LINEADETALLE_IMPUESTO_EXONERACION ?,?,?,?";
                       conx_detalles.annadir_consulta(CONSULTA);
                       conx_detalles.annadir_parametro(Lineadetalleconsecutivo1.Consecutivo1, 1);
                       conx_detalles.annadir_parametro(Impuestocodigo1.Codigo1, 2);
                       if (ExoneracionNumerodocumento1.Numerodocumento1 != "")
                       {
                           conx_detalles.annadir_parametro(Exoneraciontipo1.Tipodocumento1, 2);
                           conx_detalles.annadir_parametro(ExoneracionNumerodocumento1.Numerodocumento1, 2);
                       }
                       else
                       {
                           conx_detalles.annadir_parametro(DBNull.Value, 2);
                           conx_detalles.annadir_parametro(DBNull.Value, 2);
                       }

                       CONTENEDOR = conx_detalles.busca();
                       //  System.Threading.Thread.Sleep(5000);
                       conx_detalles.conexion.Close();
                       conx_detalles.conexion.Dispose();
                       CONTENEDOR.Close();
                       return "Se ha insertado el detalle de impuestos y exoneraciones de la linea de detalle" + Lineadetalleconsecutivo1.Consecutivo1.ToString() + " de forma correcta";
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



           }*/

        public List<Lineadetalle_Impuesto_Exoneracion> todaslaslineasdetalleIMPEXO_x_lineadetalle(Int32 consecutivolineadetalle)
        {
            List<Lineadetalle_Impuesto_Exoneracion> listadeLineadetalle_impuesto_exoneracionadevolver = new List<Lineadetalle_Impuesto_Exoneracion>();

            ConexionconBD objeto_conexion = new ConexionconBD();


            try
            {
                if (objeto_conexion.activaBD())
                {
                    string query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC S_LINEADETALLE_IMPUESTO_EXONERACION ?";
                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(consecutivolineadetalle, "int");
                    CONTENEDOR = objeto_conexion.busca();

                    while (CONTENEDOR.Read())
                    {
                        Lineadetalle_Impuesto_Exoneracion lineadetalle_impuesto_exoneracion = new Lineadetalle_Impuesto_Exoneracion();
                        Exoneracion exoneracion = new Exoneracion();
                        if (CONTENEDOR["TIPODOCUMENTO"] != DBNull.Value)
                        {
                            exoneracion.TipoDocumento1 = CONTENEDOR["TIPODOCUMENTO"].ToString();
                            exoneracion.NumeroDocumento1 = CONTENEDOR["NUMERODOCUMENTO"].ToString();
                        }

                        Impuesto impuesto = new Impuesto();
                        impuesto.CodigoImpuesto1 = CONTENEDOR["IMPUESTOCODIGO"].ToString();
                        LineaDetalle lineadetalle = new LineaDetalle();
                        lineadetalle.Consecutivo1 = Convert.ToInt32(CONTENEDOR["LINEADETALLECONSECUTIVO"].ToString());
                        lineadetalle_impuesto_exoneracion.Numerodocumento1 = exoneracion;
                        lineadetalle_impuesto_exoneracion.Tipodocumento1 = exoneracion;
                        lineadetalle_impuesto_exoneracion.Impuestocodigo1 = impuesto;
                        lineadetalle_impuesto_exoneracion.Lineadetalleconsecutivo1 = lineadetalle;

                        listadeLineadetalle_impuesto_exoneracionadevolver.Add(lineadetalle_impuesto_exoneracion);
                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listadeLineadetalle_impuesto_exoneracionadevolver;
                }
                else
                {


                    return listadeLineadetalle_impuesto_exoneracionadevolver;
                }
            }
            catch 
            {
                return listadeLineadetalle_impuesto_exoneracionadevolver;
            }


        }
    }
}