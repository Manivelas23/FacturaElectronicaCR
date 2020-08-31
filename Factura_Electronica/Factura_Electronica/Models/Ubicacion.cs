using System;
using System.Collections.Generic;

namespace Factura_Electronica.Models
{
    public class Ubicacion
    {
        private string Provincia;
        private string Canton;
        private string Distrito;
        private string Barrio;
        private string OtrasSenas;
        private int IdUbicacion;

        public string Provincia1
        {
            get => Provincia;
            set => Provincia = value;
        }
        public string Canton1
        {
            get => Canton;
            set => Canton = value;
        }
        public string Distrito1
        {
            get => Distrito;
            set => Distrito = value;
        }
        public string Barrio1
        {
            get => Barrio;
            set => Barrio = value;
        }
        public string OtrasSenas1
        {
            get => OtrasSenas;
            set => OtrasSenas = value;
        }
        public int IdUbicacion1
        {
            get => IdUbicacion;
            set => IdUbicacion = value;
        }

        public string Actualiza_ubicacion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
                if (objeto_conexion.activaBD())
                {
                    string query;
                    System.Data.OleDb.OleDbDataReader CONTENEDOR;

                    query = "EXEC  UPDATE_15 ?,?,?,?,?,?";
                    objeto_conexion.nueva_consulta(query);

                    objeto_conexion.nuevo_parametro(Provincia1, "string");
                    objeto_conexion.nuevo_parametro(Canton1, "string");
                    objeto_conexion.nuevo_parametro(Distrito1, "string");
                    objeto_conexion.nuevo_parametro(Barrio1, "string");
                    objeto_conexion.nuevo_parametro(OtrasSenas1, "string");
                    objeto_conexion.nuevo_parametro(IdUbicacion1, "int");


                    CONTENEDOR = objeto_conexion.busca();
                    objeto_conexion.conexion.Close();
                        objeto_conexion.conexion.Dispose();
                        CONTENEDOR.Close();
                return "Se modificó la ubicación con el id : " + IdUbicacion1;
                }
                else return "Sin Conexión con la Base de Datos";
        }
        public string Elimina_ubicacion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            if (objeto_conexion.activaBD())
            {
                String query;
                System.Data.OleDb.OleDbDataReader CONTENEDOR;

                query = "EXEC DELETE_15 ?";
                objeto_conexion.nueva_consulta(query);

                objeto_conexion.nuevo_parametro(IdUbicacion1, "int");
                    
                CONTENEDOR = objeto_conexion.busca();

                objeto_conexion.conexion.Close();
                objeto_conexion.conexion.Dispose();
                CONTENEDOR.Close();
                return "Se eliminó la ubicación con el id : "+ IdUbicacion1;
            }
            else return "Sin Conexión con la Base de Datos";
        }
        public string Inserta_ubicacion()
        {
            ConexionconBD objeto_conexion = new ConexionconBD();
            if (objeto_conexion.activaBD())
            {
                string query;
                System.Data.OleDb.OleDbDataReader CONTENEDOR;

                query = "EXEC INSERT_14 ?,?,?,?,?,?";
                objeto_conexion.nueva_consulta(query);

                objeto_conexion.nuevo_parametro(Provincia1, "string");
                objeto_conexion.nuevo_parametro(Canton1, "string");
                objeto_conexion.nuevo_parametro(Distrito1, "string");
                objeto_conexion.nuevo_parametro(Barrio1, "string");
                objeto_conexion.nuevo_parametro(OtrasSenas1, "string");
                objeto_conexion.nuevo_parametro(IdUbicacion1, "int");


                CONTENEDOR = objeto_conexion.busca();

                objeto_conexion.conexion.Close();
                objeto_conexion.conexion.Dispose();
                CONTENEDOR.Close();
                return "Se guardó la ubicación con el id : " + IdUbicacion1;
            }
            else
                return "Sin Conexión con la Base de Datos";
        }

        public List<Ubicacion> Seleccionar_Todo_Ubicacion()
        {
            List<Ubicacion> listaUbicacion = new List<Ubicacion>();

            ConexionconBD objeto_conexion = new ConexionconBD();

            if (objeto_conexion.activaBD())
            {
                String query;
                System.Data.OleDb.OleDbDataReader CONTENEDOR;

                query = "EXEC SELECCIONARTODOUBICACION";
                objeto_conexion.nueva_consulta(query);
                CONTENEDOR = objeto_conexion.busca();
                while (CONTENEDOR.Read())
                {
                    Ubicacion ubicacion = new Ubicacion();
                    ubicacion.Provincia1 = CONTENEDOR["PROVINCIA"].ToString();
                    ubicacion.Canton1 = CONTENEDOR["CANTON"].ToString();
                    ubicacion.Distrito1 = CONTENEDOR["DISTRITO"].ToString();
                    ubicacion.Barrio1 = CONTENEDOR["BARRIO"].ToString();
                    ubicacion.OtrasSenas1 = CONTENEDOR["OTRASSENAS"].ToString();
                    ubicacion.IdUbicacion1 = Convert.ToInt32(CONTENEDOR["IDUBICACION"].ToString());
                    listaUbicacion.Add(ubicacion);
                }
                objeto_conexion.conexion.Close();
                objeto_conexion.conexion.Dispose();
                CONTENEDOR.Close();
                return listaUbicacion;
            }
            else
                return listaUbicacion;
        }
    }
}