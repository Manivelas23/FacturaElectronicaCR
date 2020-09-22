using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
    public class OtrosCargos
    {
        private string NombreTercero;
        private string Detalle;
        private decimal Porcentaje;
        private decimal MontoCargo;
        private int IdOtrosCargos;
        private TipoDocumento TipoDocumento;

        public string NombreTercero1 { get => NombreTercero; set => NombreTercero = value; }
        public string Detalle1 { get => Detalle; set => Detalle = value; }
        public decimal Porcentaje1 { get => Porcentaje; set => Porcentaje = value; }
        public decimal MontoCargo1 { get => MontoCargo; set => MontoCargo = value; }
        public int IdOtrosCargos1 { get => IdOtrosCargos; set => IdOtrosCargos = value; }
        public TipoDocumento TipoDocumento1 { get => TipoDocumento; set => TipoDocumento = value; }

        public string setOtrosCargos()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC I_OTROSCARGOS ?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(NombreTercero1, "string");
                    objConexion.nuevo_parametro(Detalle1, "string");
                    objConexion.nuevo_parametro(Porcentaje1, "decimal");
                    objConexion.nuevo_parametro(MontoCargo1, "decimal");
                    objConexion.nuevo_parametro(IdOtrosCargos1, "int");
                    objConexion.nuevo_parametro(TipoDocumento1.Tipodocumento1, "string");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se guardó otros cargos con el id {IdOtrosCargos1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string deleteOtrosCargos()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC D_OTROSCARGOS ?";
                    objConexion.nueva_consulta(query);

                    objConexion.nuevo_parametro(IdOtrosCargos1, "int");

                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se eliminó otros cargos con el id : {IdOtrosCargos1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        public string updateOtrosCargos()
        {
            ConexionconBD objConexion = new ConexionconBD();
            try
            {
                if (objConexion.activaBD())
                {
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    string query;
                    query = "EXEC U_OTROSCARGOS ?,?,?,?,?,?";
                    objConexion.nueva_consulta(query);
                    objConexion.nuevo_parametro(NombreTercero1, "string");
                    objConexion.nuevo_parametro(Detalle1, "string");
                    objConexion.nuevo_parametro(Porcentaje1, "decimal");
                    objConexion.nuevo_parametro(MontoCargo1, "decimal");
                    objConexion.nuevo_parametro(IdOtrosCargos1, "int");
                    objConexion.nuevo_parametro(TipoDocumento1.Tipodocumento1, "string");


                    CONTENEDOR = objConexion.busca();
                    objConexion.conexion.Close();
                    objConexion.conexion.Dispose();
                    CONTENEDOR.Close();

                    return $"Se modificó otros cargos con el id {IdOtrosCargos1}";
                }
                else return "Sin conexion con la base de datos";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}