using System;
using Factura_Electronica.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FECR.Models
{
    public class LineaDetalle
    {
        private int Numlinea;
        private string Partidaarancelaria;
        private string Codigo;
        private decimal Cantidad;
        private string Unidadmedida;
        private string Unidadmedidacomercial;
        private string Detalle;
        private decimal Preciounitario;
        private decimal Montototal;
        private decimal Subtotal;
        private decimal Baseimponible;
        private decimal Impuestoneto;
        private decimal Montototallinea;
        private int Consecutivo;//llave primaria//
        private CodigoComercial Codigocomercial;
        private Descuento Montodescuento;
        private Descuento Naturalezadescuento;
        private List<Lineadetalle_Impuesto_Exoneracion> Lista_lineadetalleImpuestoExoneracion;

        public int Numlinea1 { get => Numlinea; set => Numlinea = value; }
        public string Partidaarancelaria1 { get => Partidaarancelaria; set => Partidaarancelaria = value; }
        public string Codigo1 { get => Codigo; set => Codigo = value; }
        public decimal Cantidad1 { get => Cantidad; set => Cantidad = value; }
        public string Unidadmedida1 { get => Unidadmedida; set => Unidadmedida = value; }
        public string Unidadmedidacomercial1 { get => Unidadmedidacomercial; set => Unidadmedidacomercial = value; }
        public string Detalle1 { get => Detalle; set => Detalle = value; }
        public decimal Preciounitario1 { get => Preciounitario; set => Preciounitario = value; }
        public decimal Montototal1 { get => Montototal; set => Montototal = value; }
        public decimal Subtotal1 { get => Subtotal; set => Subtotal = value; }
        public decimal Baseimponible1 { get => Baseimponible; set => Baseimponible = value; }
        public decimal Impuestoneto1 { get => Impuestoneto; set => Impuestoneto = value; }
        public decimal Montototallinea1 { get => Montototallinea; set => Montototallinea = value; }
        public int Consecutivo1 { get => Consecutivo; set => Consecutivo = value; }
        public CodigoComercial Codigocomercial1 { get => Codigocomercial; set => Codigocomercial = value; }
        public Descuento objetoDescuento { get => Montodescuento; set => Montodescuento = value; }
        public List<Lineadetalle_Impuesto_Exoneracion> Lista_lineadetalleImpuestoExoneracion1 { get => Lista_lineadetalleImpuestoExoneracion; set => Lista_lineadetalleImpuestoExoneracion = value; }

        public string Elimina_Lineadetalle()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC D_LINEADETALLE ?";

                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(Consecutivo1, "int");

                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Eliminación Realizada Con Éxito";
                }
                else return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Actualiza_Lineadetalle()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC U_LINEADETALLE ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(Numlinea1, "int");
                    objeto_conexion.nuevo_parametro(Partidaarancelaria1, "string");
                    objeto_conexion.nuevo_parametro(Codigo1, "string");
                    objeto_conexion.nuevo_parametro(Cantidad1, "decimal");
                    objeto_conexion.nuevo_parametro(Unidadmedida1, "string");
                    objeto_conexion.nuevo_parametro(Unidadmedidacomercial1, "string");
                    objeto_conexion.nuevo_parametro(Detalle1, "string");
                    objeto_conexion.nuevo_parametro(Preciounitario1, "decimal");
                    objeto_conexion.nuevo_parametro(Montototal1, "decimal");
                    objeto_conexion.nuevo_parametro(Subtotal1, "decimal");
                    objeto_conexion.nuevo_parametro(Baseimponible1, "decimal");
                    objeto_conexion.nuevo_parametro(Impuestoneto1, "decimal");
                    objeto_conexion.nuevo_parametro(Montototallinea1, "decimal");
                    objeto_conexion.nuevo_parametro(Consecutivo1, "int");
                    objeto_conexion.nuevo_parametro(Codigocomercial1.Tipo1, "string");
                    objeto_conexion.nuevo_parametro(Codigocomercial1.Codigo1, "string");
                    objeto_conexion.nuevo_parametro(objetoDescuento.MontoDescuento1, "decimal");
                    objeto_conexion.nuevo_parametro(objetoDescuento.NaturalezaDescuento1, "string");
                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Actualización Realizada Con Éxito";
                }
                else return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public string Inserta_Lineadetalle()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            try
            {
                if (objeto_conexion.activaBD())
                {
                    String query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC I_LINEADETALLE ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";

                    objeto_conexion.nueva_consulta(query);
                    objeto_conexion.nuevo_parametro(Numlinea1, "int");
                    objeto_conexion.nuevo_parametro(Partidaarancelaria1, "string");
                    objeto_conexion.nuevo_parametro(Codigo1, "string");
                    objeto_conexion.nuevo_parametro(Cantidad1, "decimal");
                    objeto_conexion.nuevo_parametro(Unidadmedida1, "string");
                    objeto_conexion.nuevo_parametro(Unidadmedidacomercial1, "string");
                    objeto_conexion.nuevo_parametro(Detalle1, "string");
                    objeto_conexion.nuevo_parametro(Preciounitario1, "decimal");
                    objeto_conexion.nuevo_parametro(Montototal1, "decimal");
                    objeto_conexion.nuevo_parametro(Subtotal1, "decimal");
                    objeto_conexion.nuevo_parametro(Baseimponible1, "decimal");
                    objeto_conexion.nuevo_parametro(Impuestoneto1, "decimal");
                    objeto_conexion.nuevo_parametro(Montototallinea1, "decimal");
                    objeto_conexion.nuevo_parametro(Consecutivo1, "int");
                    objeto_conexion.nuevo_parametro(Codigocomercial1.Tipo1, "string");
                    objeto_conexion.nuevo_parametro(Codigocomercial1.Codigo1, "string");
                    objeto_conexion.nuevo_parametro(objetoDescuento.MontoDescuento1, "decimal");
                    objeto_conexion.nuevo_parametro(objetoDescuento.NaturalezaDescuento1, "string");
                    CONTENEDOR = objeto_conexion.busca();

                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return "Inserción Realizada Con Éxito";
                }
                else return "Sin Conexión con la Base de Datos";
            }
            catch (Exception err)
            {
                return err.Message;
            }
        }
        public List<LineaDetalle> todaslaslineasdetalle()
        {
            List<LineaDetalle> listadeLineaDetalleadevolver = new List<LineaDetalle>();

            ConexionconBD objeto_conexion = new ConexionconBD();


            try
            {
                if (objeto_conexion.activaBD())
                {
                    string query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC S_T_LINEADETALLE";
                    objeto_conexion.nueva_consulta(query);
                    CONTENEDOR = objeto_conexion.busca();
                    while (CONTENEDOR.Read())
                    {
                        LineaDetalle _lineaDetalle = new LineaDetalle();

                        _lineaDetalle.Numlinea1 = Convert.ToInt32(CONTENEDOR["NUMEROLINEA"].ToString());
                        _lineaDetalle.Partidaarancelaria1 = CONTENEDOR["PARTIDAARANCELARIA"].ToString();
                        _lineaDetalle.Codigo1 = CONTENEDOR["CODIGO"].ToString();
                        _lineaDetalle.Cantidad1 = Convert.ToDecimal(CONTENEDOR["CANTIDAD"].ToString());
                        _lineaDetalle.Unidadmedida1 = CONTENEDOR["UNIDADMEDIDA"].ToString();
                        _lineaDetalle.Unidadmedidacomercial1 = CONTENEDOR["UNIDADMEDIDACOMERCIAL"].ToString();
                        _lineaDetalle.Detalle1 = CONTENEDOR["DETALLE"].ToString();
                        _lineaDetalle.Preciounitario1 = Convert.ToDecimal(CONTENEDOR["PRECIOUNITARIO"].ToString());
                        _lineaDetalle.Montototal1 = Convert.ToDecimal(CONTENEDOR["MONTOTOTAL"].ToString());
                        _lineaDetalle.Subtotal1 = Convert.ToDecimal(CONTENEDOR["SUBTOTAL"].ToString());
                        _lineaDetalle.Baseimponible1 = Convert.ToDecimal(CONTENEDOR["BASEIMPONIBLE"].ToString());
                        _lineaDetalle.Impuestoneto1 = Convert.ToDecimal(CONTENEDOR["IMPUESTONETO"].ToString());
                        _lineaDetalle.Montototallinea1 = Convert.ToDecimal(CONTENEDOR["MONTOTOTALLINEA"].ToString());
                        _lineaDetalle.Consecutivo1 = Convert.ToInt32(CONTENEDOR["CONSECUTIVO"].ToString());

                        CodigoComercial _codigocomercial = new CodigoComercial();
                        _codigocomercial.Tipo1 = CONTENEDOR["TIPO"].ToString();
                        _codigocomercial.Codigo1 = CONTENEDOR["CODIGO"].ToString();
                        _lineaDetalle.Codigocomercial1 = _codigocomercial;

                        Descuento _descuento = new Descuento();
                        _descuento.MontoDescuento1 = Convert.ToDecimal(CONTENEDOR["MONTODESCUENTO"].ToString());
                        _descuento.NaturalezaDescuento1 = CONTENEDOR["_NATURALEZADESCUENTO"].ToString();
                        _lineaDetalle.objetoDescuento = _descuento;


                        List<Lineadetalle_Impuesto_Exoneracion> _lista = new List<Lineadetalle_Impuesto_Exoneracion>();
                        Lineadetalle_Impuesto_Exoneracion lineadetalle_Impuesto_Exoneracion = new Lineadetalle_Impuesto_Exoneracion();

                        _lista = lineadetalle_Impuesto_Exoneracion.todaslaslineasdetalleIMPEXO_x_lineadetalle(_lineaDetalle.Consecutivo1);
                        _lineaDetalle.Lista_lineadetalleImpuestoExoneracion1 = _lista;
                        listadeLineaDetalleadevolver.Add(_lineaDetalle);


                    }
                    objeto_conexion.conexion.Close();
                    objeto_conexion.conexion.Dispose();
                    CONTENEDOR.Close();
                    return listadeLineaDetalleadevolver;
                }
                else
                {


                    return listadeLineaDetalleadevolver;
                }
            }
            catch 
            {
                return listadeLineaDetalleadevolver;
            }


        }

    }
}