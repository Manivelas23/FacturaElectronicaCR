using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Factura_Electronica.Models
{
        public class Factura1
        {
            private string Codigoactividad;
            private string Clave;
            private Persona Identificacionemisor;
            private Persona Identificacionreceptor;
            private string Numeroconsecutivo;
            private DateTime Fechaemision;
            private string Condicionventa;
            private string Plazocredito;
            private string Mediopago;

            public string Codigoactividad1 { get => Codigoactividad; set => Codigoactividad = value; }
            public string Clave1 { get => Clave; set => Clave = value; }
            public Persona Identificacionemisor1 { get => Identificacionemisor; set => Identificacionemisor = value; }
            public Persona Identificacionreceptor1 { get => Identificacionreceptor; set => Identificacionreceptor = value; }
            public string Numeroconsecutivo1 { get => Numeroconsecutivo; set => Numeroconsecutivo = value; }
            public DateTime Fechaemision1 { get => Fechaemision; set => Fechaemision = value; }
            public string Condicionventa1 { get => Condicionventa; set => Condicionventa = value; }
            public string Plazocredito1 { get => Plazocredito; set => Plazocredito = value; }
            public string Mediopago1 { get => Mediopago; set => Mediopago = value; }

            public string Inserta_Factura()
            {
                ConexionconBD objeto_conexion = new ConexionconBD();

                try
                {
                    if (objeto_conexion.activaBD())
                    {
                        String query;
                        System.Data.OleDb.OleDbDataReader CONTENEDOR;

                        query = "EXEC I_FACTURA1 ?,?,?,?,?,?,?,?,?";
                        objeto_conexion.nueva_consulta(query);

                        objeto_conexion.nuevo_parametro(Codigoactividad1, "string");
                        objeto_conexion.nuevo_parametro(Clave1, "string");
                        objeto_conexion.nuevo_parametro(Identificacionemisor1.identificacionPersona.identificacionPersona1, "string");
                        objeto_conexion.nuevo_parametro(Identificacionreceptor1.identificacionPersona.identificacionPersona1, "string");
                        objeto_conexion.nuevo_parametro(Numeroconsecutivo1, "string");
                        objeto_conexion.nuevo_parametro(Fechaemision1, "date");
                        objeto_conexion.nuevo_parametro(Condicionventa1, "string");
                        objeto_conexion.nuevo_parametro(Plazocredito1, "string");
                        objeto_conexion.nuevo_parametro(Mediopago1, "string");


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
            public string Elimina_Factura()
            {
                ConexionconBD objeto_conexion = new ConexionconBD();
                try
                {
                    if (objeto_conexion.activaBD()) 
                    { 
                        String query;
                        System.Data.OleDb.OleDbDataReader CONTENEDOR;

                        query = "EXEC D_FACTURA1 ?";
                        objeto_conexion.nueva_consulta(query);

                        objeto_conexion.nuevo_parametro(Clave1, "string");

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
            public string Actualiza_Factura()
            {
                ConexionconBD objeto_conexion = new ConexionconBD();

                try
                {
                    if (objeto_conexion.activaBD())
                    {
                        String query;
                        System.Data.OleDb.OleDbDataReader CONTENEDOR;

                        query = "EXEC U_FACTURA1 ?,?,?,?,?,?,?,?,?";
                        objeto_conexion.nueva_consulta(query);
                        objeto_conexion.nuevo_parametro(Codigoactividad1, "string");
                        objeto_conexion.nuevo_parametro(Clave1, "string");
                        objeto_conexion.nuevo_parametro(Identificacionemisor1.identificacionPersona, "string");
                        objeto_conexion.nuevo_parametro(Identificacionreceptor1.identificacionPersona, "string");
                        objeto_conexion.nuevo_parametro(Numeroconsecutivo1, "string");
                        objeto_conexion.nuevo_parametro(Fechaemision1, "string");
                        objeto_conexion.nuevo_parametro(Condicionventa1, "string");
                        objeto_conexion.nuevo_parametro(Plazocredito1, "string");
                        objeto_conexion.nuevo_parametro(Mediopago1, "string");
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
            public List<Factura1> seleccionar_todas_las_facturas()
            {
                List<Factura1> listadeFacturaadevolver = new List<Factura1>();

                ConexionconBD conx_detalles = new ConexionconBD();


                try
                {
                    if (conx_detalles.activaBD())
                    {
                        string CONSULTA;
                        System.Data.OleDb.OleDbDataReader CONTENEDOR;

                        CONSULTA = "EXEC S_T_FACTURA1";
                        conx_detalles.nueva_consulta(CONSULTA);
                        CONTENEDOR = conx_detalles.busca();
                        while (CONTENEDOR.Read())
                        {
                            Factura1 factura = new Factura1();


                            factura.Codigoactividad1 = CONTENEDOR["CODIGOACTIVIDAD"].ToString();
                            factura.Clave1 = CONTENEDOR["CLAVE"].ToString();
                            Models.Persona persona = new Persona();
                            IdentificacionPersona identificacion = new IdentificacionPersona();
                            identificacion.identificacionPersona1 = CONTENEDOR["IDENTIFICACIONEMISOR"].ToString();
                            persona.identificacionPersona = identificacion;
                            persona = persona.getPersonaById();
                            factura.Identificacionemisor1 = persona;

                            identificacion.identificacionPersona1 = CONTENEDOR["IDENTIFICACIONRECEPTOR"].ToString();
                            persona.identificacionPersona = identificacion;
                            persona = persona.getPersonaById();
                            factura.Identificacionreceptor1 = persona;

                            factura.Numeroconsecutivo1 = CONTENEDOR["NUMEROCONSECUTIVO"].ToString();
                            factura.Fechaemision1 = Convert.ToDateTime(CONTENEDOR["FECHAEMISION"].ToString());
                            factura.Condicionventa1 = CONTENEDOR["CONDICIONVENTA"].ToString();
                            factura.Plazocredito1 = CONTENEDOR["PLAZOCREDITO"].ToString();
                            factura.Mediopago1 = CONTENEDOR["MEDIOPAGO"].ToString();

                            listadeFacturaadevolver.Add(factura);

                        }
                        conx_detalles.conexion.Close();
                        conx_detalles.conexion.Dispose();
                        CONTENEDOR.Close();
                        return listadeFacturaadevolver;
                    }
                    else
                    {


                        return listadeFacturaadevolver;
                    }
                }
                catch (Exception error)
                {
                    return listadeFacturaadevolver;
                }

            }
        }
    }